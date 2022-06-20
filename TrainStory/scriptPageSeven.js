
if ("speechSynthesis" in window) {
    let sayWords = document.getElementById('play');
    sayWords.onclick = () => {
        let words = document.getElementById('TSPageSeven').innerHTML;
        let msg = new SpeechSynthesisUtterance(words);
        speechSynthesis.speak(msg);
    };
    sayWords.disabled = false;
}
