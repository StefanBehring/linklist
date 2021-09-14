import { getDataCss } from './data/getDataCss'
import { getDataFunnyVids } from './data/getDataFunnyVids'
import { getDataHtml } from './data/getDataHtml'
import { getDataJavaScript } from './data/getDataJavaScript'
import { getDataOther } from './data/getDataOther'
import { getDataReact } from './data/getDataReact'
import { showPage } from './showPage'

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

// Data arrays
const dataHtml = getDataHtml()
const dataCss = getDataCss()
const dataJavaScript = getDataJavaScript()
const dataReact = getDataReact()
const dataFunnyVids = getDataFunnyVids()
const dataOther = getDataOther()

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

// Init
const init = () => {
  console.log('*** APP START ***')
  showPage('Html', dataHtml)
}

init()
