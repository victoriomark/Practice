const message = document.querySelector('.message');

const ClickMO = () => {
const sound = new Audio('./sound/sounds.mp3');
sound.play();
sound.currentTime = 0;
}

const btn = document.querySelector('button').addEventListener('click',() => {
   ClickMO()
   message.style.display ='flex'
})
