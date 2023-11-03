export default function handleKeydown (e) {
    const key = e.key.toUpperCase(); 
    const audio = document.getElementById(key);
    const display = document.getElementById("display");
    if (!audio) return;
    audio.currentTime = 0; 
    audio.play();
    const playingDiv = document.querySelector(".drum-pad[data-key=" + key + "]");
    playingDiv.classList.add("playing");
    display.classList.add("playing");
    display.innerText = audio.getAttribute("data-name");
    setTimeout(() => {
    playingDiv.classList.remove("playing");
    display.classList.remove("playing");
    display.innerText = "";
  }, 200); 
  }