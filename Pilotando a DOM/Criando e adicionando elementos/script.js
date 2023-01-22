// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = 'Hello Devs'

// append (Adiciona no final) prepend (Adiciona no inicio)
const body = document.querySelector('body')
body.prepend(div)

// insertBefore (Adiciona antes de um elemento dado no 2º argumento)
const script = body.querySelector('script')
body.insertBefore(div, script)

