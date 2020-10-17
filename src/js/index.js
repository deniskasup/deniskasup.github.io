var t0 = performance.now();

import $, { event } from "jquery";
window.jQuery = $
window.$ = $

// PLUGINS======================================================================================
// import Inputmask from 'inputmask'
// import LazyLoad from "vanilla-lazyload";
// import '@fancyapps/fancybox'
// import './js-modules/datepicker.js'

// MODULES======================================================================================
// import './js-modules/sliders.js'
// import initAnimations from './js-modules/animations.js'

// init ========================================================================================
$(() => {
	
	// var lazyLoadInstance = new LazyLoad();
	// $('[data-fancybox]').fancybox({
	// 	smallBtn: true,
	// });

	// const burger = document.querySelector('.burger')
	// burger.addEventListener('click', () => {
	// 	burger.classList.toggle('active')
	// })

	// initAnimations()
	

	
})

var t1 = performance.now();
console.log('Load index.js in', (t1 - t0).toFixed(4), 'milliseconds');

