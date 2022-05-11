let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;

let next = document.getElementById('next');
let previous = document.getElementById('previous');

if (sessionStorage.getItem('data') == null) {
    slides[0].className = 'slide showing';
} else {

    let d = sessionStorage.getItem('data');
    slides[d].className = 'slide showing';
    currentSlide = Number(d);
}

function nextSlide() {
    goToSlide(currentSlide + 1);
    sessionStorage.setItem('data', currentSlide);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
    sessionStorage.setItem('data', currentSlide);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

next.onclick = function() {
    nextSlide();
};

previous.onclick = function() {
    previousSlide();
};

addEventListener("keydown", function (event) {
    if (event.keyCode == 39)
        nextSlide();
    if (event.keyCode == 37)
        previousSlide();
});