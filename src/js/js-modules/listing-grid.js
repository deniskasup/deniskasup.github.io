export default function initListing() {
    const linesButton = document.querySelector(".listing__sort-grid svg:first-of-type")
    const gridButton = document.querySelector(".listing__sort-grid svg:last-of-type")
    const products = document.querySelector('.listing__products-list')
    linesButton.onclick = () => {
        linesButton.classList.add("active")
        gridButton.classList.remove("active")
        products.classList.remove('grid')
    }
    gridButton.onclick = () => {
        gridButton.classList.add("active")
        linesButton.classList.remove("active")
        products.classList.add('grid')
    }
}
