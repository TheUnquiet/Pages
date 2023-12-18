const modal = document.getElementById('modal');
const modalOpenButton = document.querySelector('.open');
const modalCloseButton = document.querySelector('.close');

document.body.addEventListener('keyup', function (e) {
    if (e.key === 'B') {
        window.location.replace('iframe-example.html');
        console.log("Esc pressed");
    } else {
        console.log("pressed", e.key);
    }
});

function openCheck(modal) {
    if (modal.open) {
        console.log('modal open!');
    } else {
        console.log('not open :(');
    }
}

modalOpenButton.addEventListener('click', () => {
    modal.showModal();
});

modalCloseButton.addEventListener('click', () => {
    modal.close();
});