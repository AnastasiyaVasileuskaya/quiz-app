const quizappPage = document.querySelector('[data-js="quizapppage"]')
const bookmarksPage = document.querySelector('[data-js="bookmarkspage"]')
const createPage = document.querySelector('[data-js="createpage"]')
const profilePage = document.querySelector('[data-js="profilepage"]')

const quizappButton = document.querySelector('[data-js="quizappbutton"]')
const bookmarksButton = document.querySelector('[data-js="bookmarksbutton"]')
const createButton = document.querySelector('[data-js="createbutton"]')
const profileButton = document.querySelector('[data-js="profilebutton"]')

quizappButton.addEventListener('click', () => {
    quizappPage.classList.remove('hidden')
    bookmarksPage.classList.add('hidden')
    createPage.classList.add('hidden')
    profilePage.classList.add('hidden')

    quizappButton.classList.add('active')
    bookmarksButton.classList.remove('active')
    createButton.classList.remove('active')
    profileButton.classList.remove('active')
})

bookmarksButton.addEventListener('click', () => {
    quizappPage.classList.add('hidden')
    bookmarksPage.classList.remove('hidden')
    createPage.classList.add('hidden')
    profilePage.classList.add('hidden')

    quizappButton.classList.remove('active')
    bookmarksButton.classList.add('active')
    createButton.classList.remove('active')
    profileButton.classList.remove('active')
    
})

createButton.addEventListener('click', () => {
    quizappPage.classList.add('hidden')
    bookmarksPage.classList.add('hidden')
    createPage.classList.remove('hidden')
    profilePage.classList.add('hidden')

    quizappButton.classList.remove('active')
    bookmarksButton.classList.remove('active')
    createButton.classList.add('active')
    profileButton.classList.remove('active')
})

profileButton.addEventListener('click', () => {
    quizappPage.classList.add('hidden')
    bookmarksPage.classList.add('hidden')
    createPage.classList.add('hidden')
    profilePage.classList.remove('hidden')

    quizappButton.classList.remove('active')
    bookmarksButton.classList.remove('active')
    createButton.classList.remove('active')
    profileButton.classList.add('active')
})