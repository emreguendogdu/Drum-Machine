import './App.css';

function App() {
  return (
    <div className="drum-machine">
      <div className="display">
        <div className="drum-pad" id="">Q<audio src="" className="clip" id="Q"></audio></div>
        <div className="drum-pad" id="">W<audio src="./sounds/" className="clip" id="W"></audio></div>
        <div className="drum-pad" id="">E<audio src="./sounds/" className="clip" id="E"></audio></div>
        <div className="drum-pad" id="">A<audio src="./sounds/" className="clip" id="A"></audio></div>
        <div className="drum-pad" id="">S<audio src="./sounds/" className="clip" id="S"></audio></div>
        <div className="drum-pad" id="">D<audio src="./sounds/" className="clip" id="D"></audio></div>
        <div className="drum-pad" id="">Z<audio src="./sounds/" className="clip" id="Z"></audio></div>
        <div className="drum-pad" id="">X<audio src="./sounds/" className="clip" id="X"></audio></div>
        <div className="drum-pad" id="">C<audio src="./sounds/" className="clip" id="C"></audio></div>
      </div>
    </div>
  );
}

export default App;
