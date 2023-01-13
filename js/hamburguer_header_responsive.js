const header_btn = document.querySelector('.header-btn')
const header_menu = document.querySelector('.header-menu')
const hamburguer_responsive = document.querySelector('.hamburguer_responsive')

header_btn.addEventListener('click', () => {
    if (header_menu.style.display != 'block', hamburguer_responsive.className === "hamburguer_responsive") {
        header_menu.style.display = 'block'
        header_btn.innerHTML = 'X'
        hamburguer_responsive.className += " dark_background";
    } else {
        header_menu.style.display = 'none'
        header_btn.innerHTML = '☰'
        hamburguer_responsive.className = "hamburguer_responsive";
    }
})