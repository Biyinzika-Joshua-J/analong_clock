const secondsPointer = document.querySelector('.seconds_pointer');
const minutesPointer = document.querySelector('.minutes_pointer');
const hoursPointer = document.querySelector('.hour_pointer');

const movePointers = function(){
    let currentTime = new Date();
    let secondsRotation = currentTime.getSeconds()/60;
    let minutesRotation = (secondsRotation + currentTime.getMinutes())/60;
    let hourRotation = (minutesRotation + currentTime.getHours())/12;
    rotateThePointers(secondsPointer, secondsRotation);
    rotateThePointers(minutesPointer, minutesRotation);
    rotateThePointers(hoursPointer, hourRotation);
}

function rotateThePointers(pointer, rotation){
    pointer.style.transform = `rotate(${rotation*360}deg)`;
}

setInterval(movePointers, 1000)

movePointers();