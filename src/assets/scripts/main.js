const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");
let mapedKeys = [];

let audio = new Audio(`src/assets/tunes/a.wav`);
const playTune = (key) => {
    audio.src = (`src/assets/tunes/${key}.wav`);
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    },150);
};

pianoKeys.forEach((key) => {
    mapedKeys.push(key.dataset.key);
    key.addEventListener("click", ()=>{
        return playTune(key.dataset.key);
        
    }
    )
});

document.addEventListener("keydown", (e) => {
  
  if(mapedKeys.includes(e.key)){
    playTune(e.key);
    console.log(e.key);
}
});
const handleVolume = (e) =>{
    audio.volume = e.target.value;
}

const showHideKeys = ()=>{
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
}
volumeSlider.addEventListener("input",handleVolume);
keysCheck.addEventListener("click", showHideKeys);