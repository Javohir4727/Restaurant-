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

// Modal 
const modalOpenBtns = document.querySelectorAll('[data-modal]'),
modal = document.querySelector('.modal'),
modalCloseBtn = document.querySelector("[data-modal-close]"),
modalContent = document.querySelector('.modal__content')

function openModal(){
    modalContent.classList.add('modal_fade')
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
    clearInterval(modalTimerId)
}


function closeModal(){
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}
modalOpenBtns.forEach(btn => {
btn.addEventListener('click', openModal)
})

modalCloseBtn.addEventListener('click' , closeModal)


modal.addEventListener('click', (event) => {
   
    if(event.target === modal){
        closeModal()
    }  
})
document.addEventListener('keydown' , () => {
    if(event.code === "Escape" && modal.classList.contains('show')){
        closeModal()
    }
})
const modalTimerId = setTimeout(openModal, 5000)
});