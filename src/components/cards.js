import getByDataJs from '../js/getByDataJs'
import getAllByDataJs from '../js/getAllByDataJs'

export default function cards() {
  const cards = getAllByDataJs('card')
  cards.forEach(card => {
    const cardButton = getByDataJs('card-button', card)
    const cardAnswer = getByDataJs('card-answer', card)
    cardButton.addEventListener('click', () => {
      cardAnswer.classList.toggle('hidden')
    })
  })
}
