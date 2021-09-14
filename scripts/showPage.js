import { createCard } from './createCard'

// Main elements
const mainTitle = document.getElementById('mainTitle')
const mainCards = document.getElementById('mainCards')

export const showPage = (title, arr) => {
  mainTitle.textContent = title
  mainCards.innerHTML = ''
  arr.forEach(element => {
    createCard(element.title, element.url, element.info)
  })
}
