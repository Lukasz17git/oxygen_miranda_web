
console.log('running script');


const addBurgerFunctionality = () => {
   const burger = document.getElementById('burger')
   burger.addEventListener('click', () => {
      const navbarSection = document.getElementById('navbar-section')
      navbarSection.classList.toggle('navbar-section--on')
   })
}
addBurgerFunctionality()