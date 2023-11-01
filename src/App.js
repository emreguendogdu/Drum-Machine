import './App.css';

function App() {
  const handleClick = (e) => {
    console.log(e.target.innerText);
    let audio = document.getElementById(e.target.innerText);
    audio.play();
   };
  


  return (
    <div className="drum-machine">
      <div className="display">
        <div className="drum-pad" id="" onClick={handleClick}>Q<audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' className="clip" id="Q"></audio></div>
        <div className="drum-pad" id="" onClick={handleClick}>W<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio></div>
        <div className="drum-pad" id="" onClick={handleClick}>E<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio></div>
        <div className="drum-pad" id="" onClick={handleClick}>A<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio></div>
        <div className="drum-pad" id="" onClick={handleClick}>S<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio></div>
        <div className="drum-pad" id="" onClick={handleClick}>D<audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio></div>
        <div className="drum-pad" id="" onClick={handleClick}>Z<audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio></div>
        <div className="drum-pad" id="" onClick={handleClick}>X<audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio></div>
        <div className="drum-pad" id="" onClick={handleClick}>C<audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio></div>
      </div>
    </div>
  );
}

export default App;
