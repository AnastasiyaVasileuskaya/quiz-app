import getByDataJs from '../js/getByDataJs'

export default function navigation() {
    const homePage = getByDataJs('quizapp-page')
    const bookmarksPage = getByDataJs('bookmarks-page')
    const createPage = getByDataJs('create-page')
    const profilePage = getByDataJs('profile-page')

    const quizappButton = getByDataJs('quizapp-button')
    const bookmarksButton = getByDataJs('bookmarks-button')
    const createButton = getByDataJs('create-button')
    const profileButton = getByDataJs('profile-button')

    const header = getByDataJs('header')

    quizappButton.addEventListener('click', () => {
        homePage.classList.remove('hidden')
        bookmarksPage.classList.add('hidden')
        createPage.classList.add('hidden')
        profilePage.classList.add('hidden')
    
        quizappButton.classList.add('active')
        bookmarksButton.classList.remove('active')
        createButton.classList.remove('active')
        profileButton.classList.remove('active')
    
        header.textContent='Quiz App'
    })
    
    bookmarksButton.addEventListener('click', () => {
        homePage.classList.add('hidden')
        bookmarksPage.classList.remove('hidden')
        createPage.classList.add('hidden')
        profilePage.classList.add('hidden')
    
        quizappButton.classList.remove('active')
        bookmarksButton.classList.add('active')
        createButton.classList.remove('active')
        profileButton.classList.remove('active')
    
        header.textContent='Bookmarks'
    })
    
    createButton.addEventListener('click', () => {
        homePage.classList.add('hidden')
        bookmarksPage.classList.add('hidden')
        createPage.classList.remove('hidden')
        profilePage.classList.add('hidden')
    
        quizappButton.classList.remove('active')
        bookmarksButton.classList.remove('active')
        createButton.classList.add('active')
        profileButton.classList.remove('active')
    
        header.textContent='Create'
    })
    
    profileButton.addEventListener('click', () => {
        homePage.classList.add('hidden')
        bookmarksPage.classList.add('hidden')
        createPage.classList.add('hidden')
        profilePage.classList.remove('hidden')
    
        quizappButton.classList.remove('active')
        bookmarksButton.classList.remove('active')
        createButton.classList.remove('active')
        profileButton.classList.add('active')
    
        header.textContent='Profile'
    })
}
