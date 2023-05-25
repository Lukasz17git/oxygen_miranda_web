
console.log('running script');


const addBurgerFunctionality = () => {
   const burger = document.getElementById('burger')
   burger?.addEventListener('click', () => {
      const navbarSection = document.getElementById('navbar-section')
      navbarSection.classList.toggle('navbar-section--on')
   })
}
addBurgerFunctionality()

const addNavbarFloatingFunctionality = () => {
   document.addEventListener('mousemove', (e) => {
      const navbar = document.getElementsByTagName('nav')[0]
      if (e.clientY < 100 & window.scrollY > 200) {
         navbar.style.transform = 'translateY(200%)'
      } else if (navbar.style.transform) {
         navbar.style.transform = ''
      }
   })
}

if (window.innerWidth >= 1000) addNavbarFloatingFunctionality()


const makeSureEndingDateIsAfterStartingDate = () => {
   const startDateInput = document.getElementById("start");
   const endDateInput = document.getElementById("end");

   startDateInput?.addEventListener('change', () => {
      if (startDateInput.value) endDateInput.min = startDateInput.value
   }, false)

   endDateInput?.addEventListener('change', () => {
      if (endDateInput.value) startDateInput.max = endDateInput.value
   }, false)
}

makeSureEndingDateIsAfterStartingDate()

const addToAvailabilityFormParams = () => {
   const form = document.getElementById("availability-form")

   form?.addEventListener('submit', (e) => {
      e.preventDefault()
      const startDateInput = document.getElementById("start");
      const endDateInput = document.getElementById("end");

      const url = "rooms/?start=" + startDateInput.value + "&end=" + endDateInput.value;
      window.location.href = url
   })
}

addToAvailabilityFormParams()
