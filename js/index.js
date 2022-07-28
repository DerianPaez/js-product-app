const form = document.getElementById('form')
let viewProductContainer = document.querySelector('.view__product__container')
const body = document.getElementById('body')
const main = document.querySelector('.main')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const productNameValue = document.getElementById('product__name').value
  const productPriceValue = document.getElementById('product__price').value
  const productYearValue = document.getElementById('product__year').value

  if(productNameValue && productPriceValue && productYearValue) {
    const newItem = createItem(productNameValue, productPriceValue, productYearValue)
    viewProductContainer.appendChild(newItem)

    const newMessage = createMessage('El producto se ha añadido correctamente', '#00b029')
    body.insertBefore(newMessage, main)
    messageTimeout(newMessage)

    form.reset()
    return
  } 

  let newMessage = createMessage('Por favor completar el formulario', '#ff0e29')
  body.insertBefore(newMessage, main)
  messageTimeout(newMessage)
})

function createItem(productName, productPrice, productYear) {
  let div = document.createElement('div')
  div.setAttribute('class', 'view__product__item__container')

  let span = document.createElement('span')
  span.setAttribute('class', 'view__product__item__tet')
  span.textContent = `Nombre del producto: ${productName} | Precio del producto: ${productPrice} | Año del producto: ${productYear}`

  let button = document.createElement('button')
  button.setAttribute('class', 'view__product__item__btn')
  button.textContent = "Borrar"

  button.addEventListener('click', () => {
    div.remove()
    let newMessage = createMessage('El producto se ha eliminado correctamente', '#0497d7') 
    body.insertBefore(newMessage, main)
    messageTimeout(newMessage)
  })

  div.appendChild(span)
  div.appendChild(button)
  
  return div
}

function createMessage(text, color) {
  div = document.createElement('div')
  div.setAttribute('class', 'message__container')
  div.style.backgroundColor = color
  
  p = document.createElement('p')
  p.setAttribute('class', 'message__text')
  p.textContent = text

  div.appendChild(p)

  return div
}

function messageTimeout(message) {
  setTimeout(() => {
    message.remove()
  }, 2000)
}


