import './App.scss';
import Drumpad from "./Drumpad";

function App() {

  function handleClick (e) {
    const audio = document.getElementById(e.target.innerText);
    console.log(audio);
    audio.currentTime = 0; // reset the current time
    const playPromise = audio.play();
    if (playPromise !== undefined) {
    playPromise.then(_ => {
    })
    .catch(error => {
      console.log(error);
    });
  }
  };
  
  function handleKey (e) {
    const key = e.key.toUpperCase(); 
    const audio = document.getElementById(key);
    if (!audio) return; 
    audio.currentTime = 0; 
    const playPromise = audio.play();
    if (playPromise !== undefined) {
    playPromise.then(_ => {
    })
    .catch(error => {
    });
  }
  }

  window.addEventListener('keydown', handleKey);

  return (
    <div id="drum-machine">
      <div id="display">
        <Drumpad handleClick={handleClick} k={"Q"} audiosrc={"Heater-1.mp3"} name={"Heater 1"}/>
        <Drumpad handleClick={handleClick} k={"W"} audiosrc={"Heater-2.mp3"} name={"Heater 2"}/>
        <Drumpad handleClick={handleClick} k={"E"} audiosrc={"Heater-3.mp3"} name={"Heater 3"}/>
        <Drumpad handleClick={handleClick} k={"A"} audiosrc={"Heater-4_1.mp3"} name={"Heater 4"}/>
        <Drumpad handleClick={handleClick} k={"S"} audiosrc={"Heater-6.mp3"} name={"Clap"}/>
        <Drumpad handleClick={handleClick} k={"D"} audiosrc={"Dsc_Oh.mp3"} name={"Open Hi-hat"}/>
        <Drumpad handleClick={handleClick} k={"Z"} audiosrc={"Kick_n_Hat.mp3"} name={"Kick n' Hat"}/>
        <Drumpad handleClick={handleClick} k={"X"} audiosrc={"RP4_KICK_1.mp3"} name={"Kick"}/>
        <Drumpad handleClick={handleClick} k={"C"} audiosrc={"Cev_H2.mp3"} name={"Closed Hi-hat"}/>
      </div>
    </div>
  );
}

export default App;
