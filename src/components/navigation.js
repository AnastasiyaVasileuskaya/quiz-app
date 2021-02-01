import getAllByDataJs from '../js/getAllByDataJs'

export default function navigation() {
  const pages = getAllByDataJs('page')
  const navButtons = getAllByDataJs('nav')

  navButtons.forEach(button => {
    const clickedButtonName = button.dataset.name
    button.addEventListener('click', () => {
      pages.forEach(page => {
        const pageName = page.dataset.name
        page.classList.toggle('hidden', clickedButtonName !== pageName)
      })
      navButtons.forEach(button => {
        button.classList.toggle(
          'active',
          clickedButtonName === button.dataset.name
        )
      })
    })
  })
}
