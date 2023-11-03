import { useEffect } from 'react';
import './styles/App.scss';
import Drumpad from "./Drumpad";
import Footer from "./Footer";
import handleKeydown from './handleKeydown';

export default function App() {
  useEffect(() => window.addEventListener('keydown', handleKeydown));

  return (
    <>
    <div id="drum-machine">
      <p id="display">
      </p>
      <div id="drumpad-bank">
        <Drumpad k={"Q"} audiosrc={"Heater-1.mp3"} name={"Heater 1"}/>
        <Drumpad k={"W"} audiosrc={"Heater-2.mp3"} name={"Heater 2"}/>
        <Drumpad k={"E"} audiosrc={"Heater-3.mp3"} name={"Heater 3"}/>
        <Drumpad k={"A"} audiosrc={"Heater-4_1.mp3"} name={"Heater 4"}/>
        <Drumpad k={"S"} audiosrc={"Heater-6.mp3"} name={"Clap"}/>
        <Drumpad k={"D"} audiosrc={"Dsc_Oh.mp3"} name={"Open Hi-hat"}/>
        <Drumpad k={"Z"} audiosrc={"Kick_n_Hat.mp3"} name={"Kick n' Hat"}/>
        <Drumpad k={"X"} audiosrc={"RP4_KICK_1.mp3"} name={"Kick"}/>
        <Drumpad k={"C"} audiosrc={"Cev_H2.mp3"} name={"Closed Hi-hat"}/>
      </div>
    </div>
    <Footer/>
    </>
  );
}