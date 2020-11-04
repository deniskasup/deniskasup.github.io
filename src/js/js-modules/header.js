export default function stickyHeader() {
    let point;

    if (window.matchMedia('(min-width: 1024px)').matches) {
        point = document.querySelector("header")
    } else {
        point = document.querySelector(".mobile-header")
    }

    const header = document.querySelector(".header-sticky")

    const scrollButton = document.querySelector('.scroll-top')

    const filterButton = document.querySelector('.listing__filter-button')

    const config = {
        rootMargin: "0px",
        threshold: 0.8,
    }



    const observerCallback2 = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                header.classList.remove("sticky")
                scrollButton.classList.remove("active")
                if (filterButton) {
                    filterButton.classList.remove('active')
                }

            } else {
                if (entry.rootBounds.y >= entry.boundingClientRect.y) {
                    header.classList.add("sticky")
                    scrollButton.classList.add("active")
                    if (filterButton) {
                        filterButton.classList.add('active')
                    }
                }
            }
        })
    }

    const headerObserver = new IntersectionObserver(observerCallback2, config)
    headerObserver.observe(point)
}