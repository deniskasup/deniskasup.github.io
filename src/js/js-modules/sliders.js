import Swiper, { Navigation, Pagination, Scrollbar, Thumbs, Autoplay, Lazy } from "swiper"
Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Lazy])

const bannerSwiper = new Swiper(".banner .swiper-container", {
    loop: true,
    slidesPerView: "auto",
    lazy: {
        loadPrevNext: true,
    },
    navigation: {
        nextEl: ".banner .swiper-button-next",
        prevEl: ".banner .swiper-button-prev",
    },
})
const promoSwiper = new Swiper(".promo .swiper-container", {
    loop: true,
    slidesPerView: "auto",
    lazy: {
        loadPrevNext: true,
    },
    navigation: {
        nextEl: ".promo .swiper-button-next",
        prevEl: ".promo .swiper-button-prev",
    },
})

const popularSwiper = new Swiper(".product-slider .swiper-container", {
    loop: true,
    slidesPerView: "auto",
    lazy: {
        loadPrevNext: true,
    },
    navigation: {
        nextEl: ".product-slider .swiper-button-next",
        prevEl: ".product-slider .swiper-button-prev",
    },
})

if (window.matchMedia("(max-width: 1349px)").matches) {
    const clinetsSwiper = new Swiper(".clients__list", {
        loop: true,
        slidesPerView: "auto",
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
            nextEl: ".clients__list .swiper-button-next",
            prevEl: ".clients__list .swiper-button-prev",
        },
    })
}

const listingSlider = new Swiper(".listing__tags", {
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: ".listing__tags .swiper-scrollbar",
    },
})

if (window.matchMedia("(max-width: 1200px)").matches) {
    const officeSlider = new Swiper(".office__cards", {
        loop: true,
        slidesPerView: "auto",
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
            nextEl: ".office__cards .swiper-button-next",
            prevEl: ".office__cards .swiper-button-prev",
        },
    })
}
