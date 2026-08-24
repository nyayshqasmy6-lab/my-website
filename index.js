// ============================
// LOADER
// ============================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 800);
});


// ============================
// IMAGE SLIDER
// ============================

const slides = document.getElementById("slides");
const slideItems = document.querySelectorAll(".slide");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const dots = document.querySelectorAll(".dot");
const sliderContainer = document.querySelector(".slider-container");

let currentSlide = 0;
let autoSlide;


// رفتن به اسلاید
function showSlide(index) {

    // اگر از آخر رد شد
    if (index >= slideItems.length) {
        currentSlide = 0;
    }

    // اگر از اول رد شد
    else if (index < 0) {
        currentSlide = slideItems.length - 1;
    }

    else {
        currentSlide = index;
    }


    // حرکت اسلایدها
    slides.style.transform =
        `translateX(-${currentSlide * 100}%)`;


    // تغییر نقطه فعال
    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentSlide].classList.add("active");
}


// دکمه بعدی
nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    restartAutoSlide();
});


// دکمه قبلی
prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    restartAutoSlide();
});


// دکمه‌های نقطه‌ای
dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        showSlide(index);
        restartAutoSlide();
    });

});


// حرکت خودکار
function startAutoSlide() {

    autoSlide = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 4500);

}


// ریست حرکت خودکار
function restartAutoSlide() {

    clearInterval(autoSlide);
    startAutoSlide();

}


// توقف با رفتن موس روی اسلایدر
sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});


// شروع دوباره با خارج شدن موس
sliderContainer.addEventListener("mouseleave", () => {
    startAutoSlide();
});


// شروع اولیه
startAutoSlide();


// ============================
// SCROLL REVEAL
// ============================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ============================
// ANIMATED COUNTERS
// ============================

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    const stats =
        document.querySelector(".hero-stats");

    const statsPosition =
        stats.getBoundingClientRect().top;

    if (statsPosition < window.innerHeight) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 80;

            const updateCounter = () => {

                count += speed;

                if (count < target) {

                    counter.innerText =
                        Math.ceil(count);

                    requestAnimationFrame(
                        updateCounter
                    );

                }

                else {

                    counter.innerText =
                        target + "+";

                }

            };

            updateCounter();

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);

startCounters();


// ============================
// MOBILE MENU
// ============================

const hamburger =
    document.getElementById("hamburger");

const nav =
    document.getElementById("nav");


hamburger.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

});


// بستن منو بعد از کلیک
document.querySelectorAll("nav a")
.forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("mobile-open");
    });

});


// ============================
// BACK TO TOP BUTTON
// ============================

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    }

    else {
        backToTop.classList.remove("show");
    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ============================
// PARALLAX HERO EFFECT
// ============================

const heroImage =
    document.querySelector(".hero-image");


document.addEventListener("mousemove", (e) => {

    if (window.innerWidth < 900) return;

    const x =
        (window.innerWidth / 2 - e.clientX) / 70;

    const y =
        (window.innerHeight / 2 - e.clientY) / 70;


    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


// ============================
// RANDOM FLOATING FRUITS
// ============================

const fruits =
    document.querySelectorAll(".floating-fruit");


fruits.forEach(fruit => {

    fruit.style.animationDuration =
        `${4 + Math.random() * 4}s`;

});