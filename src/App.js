import { useEffect } from 'react';
import './App.scss';
import Drumpad from "./Drumpad";

export default function App() {

  function handleKeydown (e) {
    const key = e.key.toUpperCase(); 
    const audio = document.getElementById(key);
    if (!audio) return;
    audio.currentTime = 0; 
    audio.play();
    const playingDiv = document.querySelector(".drum-pad[data-key=" + key + "]");
    playingDiv.classList.add("playing");
    document.getElementById("display").innerText = audio.getAttribute("data-name");
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; 
    this.classList.remove('playing');  
  }
  useEffect(() => {
    const drumpads = document.querySelectorAll('.drum-pad');
    drumpads.forEach(drumpad => drumpad.addEventListener('transitionend', removeTransition));
  });


  useEffect(() => window.addEventListener('keydown', handleKeydown));

  return (
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
  );
}