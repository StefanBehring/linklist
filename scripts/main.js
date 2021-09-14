const headerBurger = document.getElementById('header__burger')
const navigation = document.getElementById('navigation')

headerBurger.addEventListener('click', () => {
  console.log('click')
  navigation.classList.toggle('navigation--hidden')
})

function init() {
  console.log('*** APP START ***')
}

init()
