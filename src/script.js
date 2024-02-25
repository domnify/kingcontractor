new PureCounter({
    selector: ".downloads",
    start: 0,
    end: 10,
    duration: 1,
    delay: 5,
});

new PureCounter({
    selector: ".rating",
    start: 0,
    end: 4,
    duration: 1,
    delay: 5,
});

new PureCounter({
    selector: ".reviews",
    start: 60,
    end: 80,
    duration: 1,
    delay: 5,
});

AOS.init();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 40,

    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

});



