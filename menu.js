let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

const scrollAnima = document.querySelector('[data-anima="scroll"]')

function animarScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top

    const metadeWindow = window.innerHeight * 10

    const itemVisivel = topoItem - metadeWindow < 0

if(itemVisivel) {
    scrollAnima.classList.add('show-button')
}
else{
        scrollAnima.classList.remove('show-button')
    }

}


window.addEventListener('scroll', animarScroll)


//modo noturno
const chk = document.getElementById('chk')

chk.addEventListener('change', ()=> {
    document.body.classList.toggle('bright')
})
