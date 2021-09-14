// Header elements
const headerBurger = document.getElementById('header__burger')
const navigation = document.getElementById('navigation')
// Navigation buttons
const navBtnHtml = document.getElementById('goToHtml')
const navBtnCss = document.getElementById('goToCss')
const navBtnJavaScript = document.getElementById('goToJavaScript')
const navBtnReact = document.getElementById('goToReact')
const navBtnFunnyVids = document.getElementById('goToFunnyVids')
const navBtnOther = document.getElementById('goToOther')
// Main elements
const mainTitle = document.getElementById('mainTitle')
const mainCards = document.getElementById('mainCards')

// Data arrays
const dataHtml = []
const dataCss = []
const dataJavaScript = []
const dataReact = []
const dataFunnyVids = []
const dataOther = [
  { title: 'google', url: 'http://www.google.de', info: 'A search engine' },
]

// Event listener
headerBurger.addEventListener('click', () => {
  console.log('click')
  navigation.classList.toggle('navigation--hidden')
})

navBtnHtml.addEventListener('click', () => {
  showPage('Html', dataHtml)
})

navBtnCss.addEventListener('click', () => {
  showPage('Css', dataCss)
})

navBtnJavaScript.addEventListener('click', () => {
  showPage('JavaScript', dataJavaScript)
})

navBtnReact.addEventListener('click', () => {
  showPage('React', dataReact)
})

navBtnFunnyVids.addEventListener('click', () => {
  showPage('Funny Vids', dataFunnyVids)
})

navBtnOther.addEventListener('click', () => {
  showPage('Other', dataOther)
})

// Other functions
const showPage = (title, arr) => {
  mainTitle.textContent = title
  mainCards.innerHTML = ''
  arr.forEach(element => {
    createCard(element.title, element.url, element.info)
  })
}

const createCard = (title, url, info) => {
  const card = document.createElement('section')
  card.classList.add('card')
  mainCards.appendChild(card)
  const cardTitle = document.createElement('h3')
  cardTitle.classList.add('card__title')
  card.appendChild(cardTitle)
  const cardLink = document.createElement('a')
  cardLink.classList.add('card__link')
  cardLink.setAttribute('href', url)
  cardLink.textContent = title
  cardTitle.appendChild(cardLink)
  const cardInfo = document.createElement('p')
  cardInfo.classList.add('card__info')
  cardInfo.textContent = info
  card.appendChild(cardInfo)
}

// Init
const init = () => {
  console.log('*** APP START ***')
}

init()
