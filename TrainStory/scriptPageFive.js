
if ("speechSynthesis" in window) {
    let sayWords = document.getElementById('play');
    sayWords.onclick = () => {
        let words = document.getElementById('TSPageFive').innerHTML;
        let msg = new SpeechSynthesisUtterance(words);
        speechSynthesis.speak(msg);
    };
    sayWords.disabled = false;
}
