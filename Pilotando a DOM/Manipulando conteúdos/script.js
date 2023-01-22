// textContent altera o conteúdo de texto do elemento
const element = document.querySelector('h1')

element.textContent = ' Hello Devs'

// innerText altera o texto interno do elemento

element.innerText = 'Bye Bye'

// innerHTML altera o conteúdo HTML interno

element.innerHTML = "I'am from Brazil !! <small> !! <small>"

// manipulando os atributos dos elementos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID)

console.log(headerID.getAttribute('id'))

header.removeAttribute('id')