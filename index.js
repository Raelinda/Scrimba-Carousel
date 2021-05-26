// variables
const slides = document.getElementsByClassName('carousel-item')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')

const totalSlides = slides.length
let slidePosition = 0

// event listeners
prevBtn.addEventListener('click', goToPreviousSlide)
nextBtn.addEventListener('click', goToNextSlide)

// functions

function hideSlides() {
    for (slide of slides) {
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}

function goToPreviousSlide() {
    hideSlides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }
    slides[slidePosition].classList.add('carousel-item-visible')
}

function goToNextSlide() {
    hideSlides()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add('carousel-item-visible')
}