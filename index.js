

const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    // console.log(seconds);
    // console.log(minutes);
    // console.log(hours);
    const secondsDegrees = ((seconds / 60) *  360 + 90);
    const minuteDegrees = ((minutes / 60) * 360 + 90);
    const hourDegrees = ((hours / 24) * 360);
    console.log(secondsDegrees);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    if (secondsDegrees === 90) {
        secondHand.style.transition = `all 0s`;
    } else {
        secondHand.style.transition = `all 0.1s`
    }
}

setInterval(setDate, 1000);