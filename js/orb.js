const orbDelay = 400;

const orb = anime({
    targets: '.orb',
    translateX: [
        {
            value: -350,
            delay: orbDelay,
            duration: 1500,
            ease: "spring",
        },
        
    ],
});

const text = anime({
    targets: '.text',
    opacity: [
        {
            value: 1,
            delay: orbDelay + 100,
        }
    ]
});

document.querySelector('.button').addEventListener('click', () => {
    text.restart();
    orb.restart();
});

document.querySelector('.back').addEventListener('click', () => {
    location.replace("iframe-example.html");
});