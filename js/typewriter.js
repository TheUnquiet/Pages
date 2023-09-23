function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["code", "cook", "play mario", "play Spiderman", "watch Spiderman"];

const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop  = async () => {
    while (true) {
        let curWord = phrases[curPhraseIndex];
        // Write each letter
        for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }
        // Wait after each word
        await sleep(sleepTime * 10);

        // Remove each letter
        for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }
        // Wait
        await sleep(sleepTime * 10);

        // When the last word is shown set the index back to 0
        // If not keep incrementing
        if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
        }
        else {
            curPhraseIndex++;
        }
    }
};

writeLoop();

document.querySelector('.back').addEventListener('click', () => {
    location.replace("iframe-example.html");
});