export default function handleKeydown (e) {
    // Get the key that was pressed
    const key = e.key.toUpperCase(); 

    // Get the audio element and display element
    const audio = document.getElementById(key);
    const display = document.getElementById("display");

    // If the audio element is not found, break out
    if (!audio) return;

    // Reset audio and play it
    audio.currentTime = 0; 
    audio.play();

    // Get the drum pad element that was pressed
    const playingDiv = document.querySelector(`.drum-pad[data-key=${key}]`); 

    // Add "playing" class to the drum pad and display elements
    playingDiv.classList.add("playing"); 
    display.classList.add("playing"); 

    // Set the display text to the name of the audio clip
    display.innerText = audio.getAttribute("data-name");

    // Remove "playing" class and text of display after 200ms
    setTimeout(() => {
        playingDiv.classList.remove("playing");
        display.classList.remove("playing");
        display.innerText = "";
    }, 200); 
}
