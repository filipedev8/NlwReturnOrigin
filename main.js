window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() { 
    showNavOnScroll()
    showBackTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    // linha do alvo
    const targetLine = scrollY + innerHeight / 2

    // verificar se a seçao passou da linha
    // quais dados vou precisar?

    // o topo da seçao 
    const sectionTop = section.offsetTop

    // a altura da seçao
    const sectionHeight = section.offsetHeight

    // o topo da seçao chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    // informações dos dados e da logica
    // console.log('o topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetline)

    // verificar se a base está abaixo da linha alvo
    // quais dados vou precisar?


    // a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    // o final da seção passou da linha albo
    const sectionEndPassedTargetline =  sectionEndsAt <=
    targetLine

    // console.log('o fundo da seçao passou da linha', sectionEndPassedTargetline)

    // limites da seção 
    const sectionBoundaries = 
    sectionTopReachOrPassedTargetline &&
    !sectionEndPassedTargetline

    // console.log(sectionBoundaries)

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}


function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    } else{
        navigation.classList.remove('scroll')
    }
}

function showBackTopButtonOnScroll() {
    if(scrollY > 550) {
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home,
    #home img,
    .stats,
    #services,
    #servies header,
    #services .card,
    #about,
    #about header,
    #about .content`);