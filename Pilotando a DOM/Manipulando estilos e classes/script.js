// Alterando estilos

const element = document.querySelector('body')

element.style.backgroundColor = 'gray'

// Alterando estilos usando classList

element.classList.add('active', 'green')
element.classList.remove('active')

// toogle funciona como um interruptor, se a classe exister ele remove, e remove se existir
element.classList.toggle('active')