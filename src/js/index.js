function getElement(dataJsName) {
    return document.querySelector(`[data-js="${dataJsName}"]`)
  }

const quizappPage = getElement('quizapp-page')
const bookmarksPage = getElement('bookmarks-page')
const createPage = getElement('create-page')
const profilePage = getElement('profile-page')

const quizappButton = getElement('quizapp-button')
const bookmarksButton = getElement('bookmarks-button')
const createButton = getElement('create-button')
const profileButton = getElement('profile-button')

const header = getElement('header')

const form = getElement('createpage-form')
const submitButton = form.querySelector('[data-js="submit-button"]')
const textareaSections = form.querySelectorAll('[data-js="createpage-input"]')
const firstTextarea = textareaSections[0].querySelector('[data-js="createpage-textarea"]')

const cards = document.querySelectorAll('[data-js="card"]')

quizappButton.addEventListener('click', () => {
    quizappPage.classList.remove('hidden')
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
    quizappPage.classList.add('hidden')
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
    quizappPage.classList.add('hidden')
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
    quizappPage.classList.add('hidden')
    bookmarksPage.classList.add('hidden')
    createPage.classList.add('hidden')
    profilePage.classList.remove('hidden')

    quizappButton.classList.remove('active')
    bookmarksButton.classList.remove('active')
    createButton.classList.remove('active')
    profileButton.classList.add('active')

    header.textContent='Profile'
})

textareaSections.forEach(textareaSection => {
    setTextareaMaxLength(textareaSection)
    addTextareaInputListener (textareaSection)
})

function setTextareaMaxLength (textareaSection) {
    const textareaMaxlength = textareaSection.querySelector('[data-js="texarea-maxlength"]')
    const textarea = textareaSection.querySelector('[data-js="createpage-textarea"]')
    textareaMaxlength.innerHTML = textarea.maxLength
    
}

function addTextareaInputListener (textareaSection) {
    const textarea = textareaSection.querySelector('[data-js="createpage-textarea"]')
    const textareaMaxlength = textareaSection.querySelector('[data-js="texarea-maxlength"]')
    textarea.addEventListener('input', () => {
        textareaMaxlength.innerHTML = textarea.maxLength - textarea.value.length+" / "+`${textarea.maxLength}`
    })
}

form.addEventListener('submit', event => {
    event.preventDefault()
})

submitButton.addEventListener('click', () => {
    form.reset()
    firstTextarea.focus()
    textareaSections.forEach(textareaSection => {
        setTextareaMaxLength(textareaSection)
    })
})

cards.forEach(card => {
    const bookmark = card.querySelector('[data-js="bookmark"]')
    bookmark.addEventListener('click',() => {
        bookmark.classList.toggle('fas')
    })
})
