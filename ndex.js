

const ClickMO = () => {
   const message = document.querySelector('.message');
const sound = new Audio('./sound/sounds.mp3');

const btn = document.querySelector('button').addEventListener('click',() => {
   message.style.display ='flex'
   sound.play();
   sound.currentTime = 0;

})

}

ClickMO();