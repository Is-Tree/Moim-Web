// Setting
const SLIDE_DURATION = 500,
    RESPONSE_WIDTH = 768;

// Navigation

const pickers = document.querySelectorAll('.nav__picker'),
    nav = document.querySelector('.nav'),
    sections = document.querySelectorAll('section'),
    back = document.querySelector('.back');

let state;

function handlePick(event){
    event.preventDefault();

    state = event.target.dataset.id;
    const target = document.querySelector(`.${event.target.dataset.id}`);

    sections.forEach( section => {
        if( section !== target){
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    })

    setTimeout(function(){
            nav.classList.add('nav--active');
            target.classList.add('nav--active');
        }, 0);

    setTimeout(function(){
            back.classList.add('back--active');
        }, SLIDE_DURATION);

}

function handleBack(event){
    event.preventDefault();
    const target = document.querySelector(`.${state}`);

    if( document.body.offsetWidth > 768){
        target.scrollIntoView({behavior: "smooth"});
    } else {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    setTimeout(function() {
        nav.classList.remove('nav--active');
        target.classList.remove('nav--active');
    }, 300);

    setTimeout(function() {
        sections.forEach( section => {
            section.style.display = 'none';
        });
        back.classList.remove('back--active');
    }, SLIDE_DURATION+300);
}

// About > Rotation on Scrolling

const balls = document.querySelectorAll('.container>img');

function handleScrolling(event){
    event.preventDefault();
    balls.forEach( ball => {
    ball.style.transform = `rotate(${window.pageYOffset/6}deg)`;
    })
}

// init

function init(){
    window.addEventListener("scroll", handleScrolling);
    pickers.forEach( picker => {
        picker.addEventListener("click", handlePick);
    })
    back.addEventListener("click", handleBack);
}

init();