export default function initMobileMenu() {
	const burger = document.querySelector('.js-burger')
	const body = document.querySelector('body')
	if (burger) {
		const menu = document.querySelector('.mobilemenu')

		burger.addEventListener('click', () => {
			if (body.classList.contains('mobile-opened')) {
				document.removeEventListener('click', outsideEvtListener)
			} else {
				setTimeout(() => { document.addEventListener('click', outsideEvtListener)})
			}
			// burger.classList.toggle('active')
			menu.classList.toggle('active')
			body.classList.toggle('mobile-opened')
		})

		if (menu) {
			const menuItems = document.querySelectorAll('.mobilemenu__nav-item')
			menuItems.forEach(item => {
				item.addEventListener('click', () => {
					if(item.querySelector('.mobilemenu__nav-sublist')){
						item.classList.toggle('opened')
					}
				})
			})	

		}

		function outsideEvtListener(evt) {
			if (evt.target === menu || menu.contains(evt.target)) {
				return
			}
			burger.classList.toggle('active')
			menu.classList.toggle('active')
			body.classList.toggle('mobile-opened')

			document.removeEventListener('click', outsideEvtListener);
		}

	}

}