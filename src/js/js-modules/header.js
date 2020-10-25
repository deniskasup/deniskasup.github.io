export default function stickyHeader() {
    const point = document.querySelector("header")

    const header = document.querySelector(".header-sticky")

    const config = {
        rootMargin: "0px",
        threshold: 0.8,
    }

    const observerCallback2 = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                header.classList.remove("sticky")
            } else {
                if (entry.rootBounds.y >= entry.boundingClientRect.y) {
                    header.classList.add("sticky")
                }
            }
        })
    }

    const headerObserver = new IntersectionObserver(observerCallback2, config)
    headerObserver.observe(point)
}
