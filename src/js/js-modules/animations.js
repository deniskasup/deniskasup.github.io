export default function initAnimations() {
	const observeParams = {
		rootMargin: '0px',
		threshold: 0.65
	}

	if (window.matchMedia("(max-width: 768px)").matches) {
		observeParams.threshold = 0.35
	}

	const animateTargets = document.querySelectorAll('.fadeInUp')
	if (animateTargets) {
		const observerCallback = (entries, observer) => {
			let delay = 0.25
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.setAttribute("style", `transition-delay: ${delay}s;`)
					delay = delay + 0.1
					entry.target.classList.add('js-visible')
				}
			})
		}
		const animateObserver = new IntersectionObserver(observerCallback, observeParams)

		animateTargets.forEach(target => {
			animateObserver.observe(target)
		})
		
	}
}