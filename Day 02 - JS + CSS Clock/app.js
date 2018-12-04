const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function setDate() {

    const seconds = new Date().getSeconds();
    const secondsDegrees = (seconds * 6);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = new Date().getMinutes();
    const minsDegrees = (mins * 6);
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = new Date().getHours();
    const hoursDegree = (hours * 30);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

}
setInterval(setDate, 1000);