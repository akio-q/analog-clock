function clock() {
    const hoursArrow = document.querySelector('#hr');
    const minutesArrow = document.querySelector('#mn');
    const secondsArrow = document.querySelector('#sc');
    const deg = 6;
    
    setInterval(() => {
        const day = new Date();

        const hours = day.getHours() * 30
        const minutes = day.getMinutes() * deg
        const seconds = day.getSeconds() * deg

        hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
        minutesArrow.style.transform = `rotateZ(${minutes}deg)`
        secondsArrow.style.transform = `rotateZ(${seconds}deg)`
    }, 0);
}

clock();