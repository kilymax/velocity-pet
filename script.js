// TABS
const tab_buttons = document.querySelectorAll('.tab-button')
const tab_items = document.querySelectorAll(".future__item")

const hideTabs = () => {
    tab_items.forEach((tab) => {
        tab.classList.add("hide")
    })
    tab_buttons.forEach((btn) => {
        btn.classList.remove("active")
    })
}

const showTab = (index) => {
    tab_items[index].classList.remove('hide')
    tab_buttons[index].classList.add('active')
}

hideTabs();
showTab(0);

tab_buttons.forEach((btn, index) =>
    btn.addEventListener('click', () => {
        hideTabs();
        showTab(index);
    }
    ))


// Anchors
const anchors = document.querySelectorAll('.header__nav a')
anchors.forEach( item => {
    item.addEventListener("click", function (event) {
        event.preventDefault()
        const id = item.getAttribute("href")
        const targetElem = document.querySelector(id)
        
        window.scroll({
            top: targetElem.offsetTop-60,
            behavior: 'smooth'
        })
        
    })
})