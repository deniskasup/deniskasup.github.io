export default function initDropdown() {
    const dropdownLists = document.querySelectorAll("[data-dropdown]")
    if (dropdownLists) {
        dropdownLists.forEach((list) => {
            if (list.getAttribute("data-dropdown") != "") {
                const listItems = Array.from(document.querySelectorAll(list.getAttribute("data-dropdown")))
                
                listItems.forEach((item) => {
                    item.addEventListener("click", () => {
                        item.parentElement.classList.toggle("active")
                    })
                })
            } else {
                const listItems = Array.from(list.children)
                listItems.forEach((item) => {
                    item.addEventListener("click", () => {
                        item.classList.toggle("active")
                    })
                })
            }
        })
    }
}
