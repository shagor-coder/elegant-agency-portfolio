

// Custom JavaScript

const mainHeader = document.querySelector('.main-header');

const toggler = document.querySelector('.navbar-toggler').addEventListener('click', () => {
   mainHeader.classList.add('active') 
})

const collapse = document.querySelector('.navbar-collapse')

const navMenu = document.querySelectorAll('.nav-link').forEach(function(navMenu){

    navMenu.addEventListener('click', () =>{
        collapse.classList.remove('show')
    })

});



window.addEventListener('scroll', () => {
    mainHeader.classList.toggle('active', scrollY > 50)
})