const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const dateContainer = document.querySelector('.js-date');
const dateHeader = dateContainer.querySelector('h3');

function getTime() {
    const date = new Date;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const year = date.getFullYear();
    const mon = date.getMonth() + 1;
    const day = date.getDate();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}`;
    dateHeader.innerText = `${year}, ${mon}, ${day}`;
}


function init() {
    getTime();
    setInterval(getTime, 200);
}

init();