// Eventos

// Adicionando eventos via HTML (OBS: Está no arquivo .html)
function print() {
    window.alert('Eventos via HTML!')
}

// Eventos de teclado
const input = document.querySelector('input')

input.onkeydown= function () {
    window.alert('Eventos de teclado!')
}

// Adicionando eventos via JS
const h1 = document.querySelector('h1')

h1.addEventListener('mouseout', () => {
    window.alert('Eventos via JS método 1!')
})

// Adicionando evento via JS (Outro método)

h1.onmouseout = function() {
    window.alert('Eventos via JS método 2!')
}