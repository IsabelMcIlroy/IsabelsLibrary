if ("speechSynthesis" in window) {
  let sayWords = document.getElementById("play");
  sayWords.onclick = () => {
    let words = document.getElementById("TSPageEight").innerHTML;
    let msg = new SpeechSynthesisUtterance(words);
    speechSynthesis.speak(msg);
  };
  sayWords.disabled = false;
}
