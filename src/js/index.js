var t0 = performance.now();

import $ from "jquery";
window.jQuery = $
window.$ = $

// PLUGINS======================================================================================
import Inputmask from 'inputmask'
import LazyLoad from "vanilla-lazyload"

import '@fancyapps/fancybox'

// MODULES======================================================================================
import './js-modules/sliders.js'
import stickyHeader from './js-modules/header.js'
import initAnimations from './js-modules/animation.js'
import initTabs from './js-modules/tabs.js'
import initDropdown from './js-modules/dropdown.js'


// init ========================================================================================
$(() => {

    document.querySelectorAll('.burger').forEach(burger => {
            burger.addEventListener('click', () => {
                burger.classList.toggle('active')
            })
        })

    var lazyLoadInstance = new LazyLoad();
    let im = new Inputmask("+7 (999) 999-99-99")
    im.mask(document.querySelectorAll('input[name="PHONE"]'))
        // $('[data-fancybox]').fancybox({
        // 	smallBtn: true,
        // })

    // CUSTOM FUNCTIONS
	stickyHeader()
	initTabs()
    initAnimations()
    initDropdown()
})

var t1 = performance.now();
console.log('Load index.js in', (t1 - t0).toFixed(4), 'milliseconds');