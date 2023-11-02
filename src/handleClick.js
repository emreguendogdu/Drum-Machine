export function handleClick (e) {
  const audio = document.getElementById(e.target.innerText);
  if (!audio) return;
  audio.currentTime = 0; // reset the current time
  audio.play();
  const playingDiv = document.querySelector(".drum-pad[data-key=" + e.target.innerText + "]");
  playingDiv.classList.add("playing");
}
