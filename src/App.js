import React, { useState, useEffect } from 'react';
import { database, ref, set } from "./firebase";
import { onValue } from "firebase/database"; // ✅ Importar onValue para lectura en tiempo real

import DashboardButton from './components/DashboardButton';
import DashboardLayout from './components/DashboardLayout';
import DashboardSlider from './components/DashboardSlider';
import DashboardSliderPuerta from './components/DashboardSliderPuerta'; // ✅ Nuevo componente
import DashboardPanel from './components/DashboardPanel';
import DashboardValveControl from './components/DashboardValveControl';

const App = () => {
  const [irrigationLevel, setIrrigationLevel] = useState(50);
  const [puertaLevel, setPuertaLevel] = useState(0); // ✅ Nuevo estado para puerta
  const [statusMessage, setStatusMessage] = useState('Esperando comandos...');
  const [realtimeData, setRealtimeData] = useState({
    temperature: 25.5,
    humidity: 60,
    flowSensorStatus: true,
    waterLevel: 75,
  });

  // ✅ Escuchar cambios en sensor1 desde Firebase
  useEffect(() => {
    const sensorRef = ref(database, 'sensor1');
    const unsubscribe = onValue(sensorRef, (snapshot) => {
      if (snapshot.exists()) {
        const value = snapshot.val();
        console.log("Temperatura recibida:", value);

        setRealtimeData(prev => ({
          ...prev,
          temperature: value // ✅ Actualiza solo la temperatura
        }));
      }
    });

    return () => unsubscribe(); // 🔹 Limpieza al desmontar
  }, []);

  const handleButtonClick = (action = '') => {
    let path = '';
    let newValue;

    switch (action) {
      case 'Encender LED':
        path = 'LED';
        newValue = 1;
        break;
      case 'Apagar LED':
        path = 'LED';
        newValue = 0;
        break;
      case 'Activar Bomba Principal':
        path = 'devices/bomba';
        newValue = 1;
        break;
      case 'Desactivar Bomba Principal':
        path = 'devices/bomba';
        newValue = 0;
        break;
      case 'Reset':
        path = 'devices/reset';
        newValue = 1;
        break;
      default:
        console.warn('Acción desconocida:', action);
        return;
    }

    set(ref(database, path), newValue)
      .then(() => {
        setStatusMessage(`Comando enviado: ${action}`);
      })
      .catch((error) => {
        console.error('Error al escribir en Firebase:', error);
        setStatusMessage(`Error: no se pudo enviar ${action}`);
      });
  };

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    setIrrigationLevel(newValue);
    setStatusMessage(`Nivel de riego ajustado a: ${newValue}%`);
    set(ref(database, 'devices/irrigationLevel'), newValue);
  };

  // ✅ Nuevo handler para la puerta
  const handlePuertaChange = (event) => {
    const porcentaje = parseInt(event.target.value);
    setPuertaLevel(porcentaje);

    // Conversión a 0–180 grados
    const grados = Math.round((porcentaje / 100) * 92);

    setStatusMessage(`Puerta ajustada a: ${grados}°`);
    set(ref(database, 'puerta'), grados);
  };

  const handleValveActivate = (valveId = 0) => {
    setStatusMessage(`Válvula ${valveId} activada.`);
    set(ref(database, `valves/${valveId}`), 1);
  };

  const handleValveDeactivate = (valveId = 0) => {
    setStatusMessage(`Válvula ${valveId} desactivada.`);
    set(ref(database, `valves/${valveId}`), 0);
  };

  return (
    <DashboardLayout>
      <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <DashboardButton label="Encender LED" onClick={() => handleButtonClick('Encender LED')} />
        <DashboardButton label="Apagar LED" onClick={() => handleButtonClick('Apagar LED')} />
        <DashboardButton label="Activar Bomba Principal" onClick={() => handleButtonClick('Activar Bomba Principal')} />
        <DashboardButton label="Desactivar Bomba Principal" onClick={() => handleButtonClick('Desactivar Bomba Principal')} />
        <DashboardButton label="Reset" variant="danger" onClick={() => handleButtonClick('Reset')} />
      </div>

      <DashboardSlider 
        label="Nivel de Riego General" 
        value={irrigationLevel} 
        onChange={handleSliderChange} 
      />

      {/* ✅ Nuevo slider para la puerta */}
      <DashboardSliderPuerta 
        label="Posición de la Puerta" 
        value={puertaLevel} 
        onChange={handlePuertaChange} 
      />

      {/* 🔹 Aquí se mostrará temperatura actualizada desde Firebase */}
      <DashboardPanel data={realtimeData} />

      <DashboardValveControl valveId={1} onActivate={handleValveActivate} onDeactivate={handleValveDeactivate} />
      <DashboardValveControl valveId={2} onActivate={handleValveActivate} onDeactivate={handleValveDeactivate} />
      <DashboardValveControl valveId={3} onActivate={handleValveActivate} onDeactivate={handleValveDeactivate} />

      <div className="lg:col-span-3 flex justify-center mt-6">
        <p className="text-xl font-medium text-gray-700 p-4 bg-gray-50 rounded-xl shadow-inner w-full text-center">
          Estado del Sistema: <span className="font-bold text-gray-900">{statusMessage}</span>
        </p>
      </div>
    </DashboardLayout>
  );
};

export default App;
