window.addEventListener('DOMContentLoaded', () =>{

    const tabs = document.querySelectorAll('.tabheader__item'),
    tabContents = document.querySelectorAll('.tab_content'),
    tabPArents = document.querySelector('.tabheader__items')

    function hideTabContents(){
        tabContents.forEach(tabContent => {
            tabContent.classList.add('hide')
            tabContent.classList.remove('show')
        })
        tabs.forEach(tab => {
            tab.classList.remove("tabheader__item_active")
        })
    }
    function showTabContent(index = 0) {
        tabContents[index].classList.add('show', 'fade')
        tabContents[index].classList.remove('hide')
        tabs[index].classList.add('tabheader__item_active')
    }
hideTabContents()
showTabContent()
 
tabPArents.addEventListener('click', event => {
    const target = event.target 
    
    if(target && target.classList.contains('tabheader__item')) {
        tabs.forEach((tab, index) => {
            if(target === tab){
                hideTabContents()
                showTabContent(index)
            } 
        })
    }
})
//Loader
const loaderWrapper = document.querySelector('.loader-wrapper')

setTimeout(() => {
   loaderWrapper.style.display = "none" 
}, 1000);


setTimeout(() => {
    loaderWrapper.style.display = "none";
}, 1000);

// Timer 
const deadLine = '2024-12-11';

function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const time = Date.parse(endtime) - Date.parse(new Date());

    if (time <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    } else {
        days = Math.floor(time / (1000 * 60 * 60 * 24));
        hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        minutes = Math.floor((time / (1000 * 60)) % 60);
        seconds = Math.floor((time / 1000) % 60);
    }

    return {
        totalTime: time,
        days,
        hours,
        minutes,
        seconds  
    };
}


function formatNumber(number){
    if(number >= 0 && number < 10){
       return `0${number}` 
    }else{
        return number
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

        updateClock()

    function updateClock() {
        const time = getTimeRemaining(endtime);

        days.innerHTML = formatNumber(time.days);
        hours.innerHTML = formatNumber(time.hours);
        minutes.innerHTML = formatNumber(time.minutes);
        seconds.innerHTML = formatNumber(time.seconds); 

        if (time.totalTime <= 0) { 
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadLine);
});