const mainCards = document.getElementById('mainCards')

export const createCard = (title, url, info) => {
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
