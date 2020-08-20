

// Navigation

const pickers = document.querySelectorAll('.nav__picker'),
    nav = document.querySelector('.nav'),
    sections = document.querySelectorAll('section');

function handlePick(event){
    event.preventDefault();
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
        target.classList.add('nav--active'); },
        0);

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
}

init();