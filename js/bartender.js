const bars = document.querySelectorAll('.bar');
const lastBar = bars[bars.length - 1];

function handleClick(e) {
    e.preventDefault();
    bars.forEach((bar, i) => {
        bar.style.animationPlayState = "running";
    });
    lastBar.addEventListener("animationend", () => {
        setTimeout(() => {
            window.location = e.target.href;
        }, 500);
    });
}