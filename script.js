const secondHand = document.querySelector('.second-hand')

setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds()
    const secondsDegres = ((seconds / 60)* 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegres}deg)`
    console.log(seconds);

}

setInterval(setDate, 1000)