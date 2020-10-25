export default function initDropdown() {
    const dropdownLists = document.querySelectorAll("[data-dropdown]")
    if (dropdownLists) {
        dropdownLists.forEach((list) => {
            const listItems = Array.from(list.children)
            listItems.forEach((item) => {
                item.addEventListener("click", () => {
                    item.classList.toggle('active')
                })
            })
        })
    }
}
