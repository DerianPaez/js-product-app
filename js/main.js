class Product {
  constructor(name, price, year){
    this.name = name
    this.price = price
    this.year = year
  }
}

class UI {
  addProduct(product) {
    const viewProductContainer = document.querySelector('.view__product__container')
    let div = document.createElement('div')
    div.setAttribute('class', 'view__product__item__container')

    let span = document.createElement('span')
    span.setAttribute('class', 'view__product__item__tet')
    span.textContent = `Nombre del producto: ${product.name} | Precio del producto: ${product.price} | Año del producto: ${product.year}`

    let button = document.createElement('button')
    button.setAttribute('class', 'view__product__item__btn')
    button.textContent = "Borrar"

    this.deleteProduct(button, div)

    div.appendChild(span)
    div.appendChild(button)

    viewProductContainer.appendChild(div)
  } 

  deleteProduct(button, container){
    button.addEventListener('click', () => {
      container.remove()
      this.showMessage('El producto se ha eliminado correctamente', '#0497d7')
    })
  }

  showMessage(message, color) {
    const body = document.getElementById('body')
    const main = document.querySelector('.main')

    let div = document.createElement('div')
    div.setAttribute('class', 'message__container')
    div.style.backgroundColor = color
    
    let p = document.createElement('p')
    p.setAttribute('class', 'message__text')
    p.textContent = message
  
    div.appendChild(p)
    
    setTimeout(() => {
      div.remove()
    }, 2000)
    
    body.insertBefore(div, main)
  }
}

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const productNameValue = document.getElementById('product__name').value
  const productPriceValue = document.getElementById('product__price').value
  const productYearValue = document.getElementById('product__year').value
  const newUI = new UI()

  if(productNameValue && productPriceValue && productYearValue){
    const newProduct = new Product(productNameValue, productPriceValue, productYearValue)
    newUI.addProduct(newProduct)
    newUI.showMessage('El producto se ha añadido correctamente', '#00b029')
    
    form.reset()
    return
  }
  
  newUI.showMessage('Por favor completar el formulario', '#ff0e29')

})