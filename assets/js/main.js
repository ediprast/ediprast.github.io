/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services-modal'),
    modalBtns = document.querySelectorAll('.services-button'),
    modalClose = document.querySelectorAll('.services-modal-x')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */
const linkwork = document.querySelectorAll('.work-item')

function activeWork() {
    linkwork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(l => l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".my-swiper", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true,
})

sr.reveal(`.home-data`)
sr.reveal(`.home-image`, { delay: 600 })
sr.reveal(`.home-social`, { delay: 900, origin: 'bottom' })

const srServices = ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    delay: 100,
    reset: true,
})

sr.reveal(`.reveal-ui`)
sr.reveal(`.reveal-web`, { delay: 400 })
sr.reveal(`.reveal-app`, { delay: 700 })

sr.reveal(`.reveal-email`)
sr.reveal(`.reveal-tele`, { delay: 400 })
sr.reveal(`.reveal-mess`, { delay: 700 })

/*=============== TILT ANIMATION ===============*/

VanillaTilt.init(document.querySelector(".home-image-1"), {
    max: 25,
    speed: 400,
    reverse: false
});

VanillaTilt.init(document.querySelectorAll(".home-image-1"));

VanillaTilt.init(document.querySelector(".home-image-2"), {
    max: 25,
    speed: 400,
    reverse: true,
    glare: true
});

VanillaTilt.init(document.querySelectorAll(".home-image-2"));

VanillaTilt.init(document.querySelector(".about-img"), {
    max: 25,
    speed: 200,
    reverse: false
});

VanillaTilt.init(document.querySelectorAll(".about-img"));

// SCROLL TO TOP
window.addEventListener('scroll', windowScrolling)

function windowScrolling() {
    const scrollY = window.pageYOffset

    if (scrollY > 100) {
        document.getElementById("to-top").style.display = "block";
    } else {
        document.getElementById("to-top").style.display = "none";
    }


}

const toTop = document.getElementById('to-top')

function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

toTop.addEventListener('click', scrollToTop)