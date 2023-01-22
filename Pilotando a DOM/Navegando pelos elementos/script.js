// Navegando pelos elementos

// Com parentNode e parentElement conseguimos pegar os elementos pais

const body = document.querySelector('body')

console.log(body.parentNode)
console.log(body.parentElement)

// Com childNode children conseguimos pegar (em formato NodeList) os elementos filhos

console.log(body.childNodes)
console.log(body.children)

// Com firstChild e firstElementChild conseguimos pegar o primeiro filho

console.log(body.firstChild)
console.log(body.firstElementChild)

// Com lastChild e lastElementChild conseguimos pegar o último filho

console.log(body.lastChild)
console.log(body.lastElementChild)

// Com nextSibling e nextElementSibling conseguimos buscar os irmãos 

console.log(body.nextSibling)
console.log(body.nextElementSibling)