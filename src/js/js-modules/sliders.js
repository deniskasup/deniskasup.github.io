import Swiper, { Navigation} from 'swiper';
Swiper.use([Navigation]);

if(window.matchMedia('(max-width: 1200px)').matches) {
	const sleakersSwiper = new Swiper('.speakers__cards', {
    loop: true,
    slidesPerView: 'auto',
    lazy: {
        loadPrevNext: true
	},
    navigation: {
        nextEl: '.speakers__cards .swiper-button-next',
        prevEl: '.speakers__cards .swiper-button-prev',
    }
})

}