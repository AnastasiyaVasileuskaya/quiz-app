import getAllByDataJs from '../js/getAllByDataJs'

export default function bookmarks() {
  const pages = getAllByDataJs('page')
  const bookmarks = getAllByDataJs('bookmark', pages[0])
  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('fas')
    })
  })
}
