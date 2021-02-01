import getByDataJs from '../js/getByDataJs'
import getAllByDataJs from '../js/getAllByDataJs'

export default function form() {
  const form = getByDataJs('createpage-form')
  const textareaSections = getAllByDataJs('createpage-input', form)
  const firstTextarea = getByDataJs('createpage-textarea', textareaSections[0])

  textareaSections.forEach(textareaSection => {
    setTextareaMaxLength(textareaSection)
    addTextareaInputListener(textareaSection)
  })

  function setTextareaMaxLength(textareaSection) {
    const textareaMaxlength = getByDataJs('texarea-maxlength', textareaSection)
    const textarea = getByDataJs('createpage-textarea', textareaSection)
    textareaMaxlength.innerHTML = textarea.maxLength
  }

  function addTextareaInputListener(textareaSection) {
    const textareaMaxlength = getByDataJs('texarea-maxlength', textareaSection)
    const textarea = getByDataJs('createpage-textarea', textareaSection)
    textarea.addEventListener('input', () => {
      textareaMaxlength.innerHTML =
        textarea.maxLength - textarea.value.length + ' / ' + textarea.maxLength
    })
  }

  form.addEventListener('submit', event => {
    event.preventDefault()
    form.reset()
    firstTextarea.focus()
    textareaSections.forEach(textareaSection => {
      setTextareaMaxLength(textareaSection)
    })
  })
}
