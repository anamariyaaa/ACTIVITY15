const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const textInput = document.getElementById('text-input');
let speech = new SpeechSynthesisUtterance();

playBtn.addEventListener('click', () => {
  const text = textInput.value;
  speakText(text);
});

stopBtn.addEventListener('click', () => {
  stopText();
});

function speakText(text) {
  speech.text = text;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

function stopText() {
  window.speechSynthesis.cancel();
}