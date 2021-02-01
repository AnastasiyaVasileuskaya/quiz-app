export default function bookmarks() {
    document.querySelectorAll('[data-js="quizapp-page"] [data-js="bookmark"]').forEach(bookmark => {
        bookmark.addEventListener('click', () => {
        bookmark.classList.toggle('fas')
        })
    })
}