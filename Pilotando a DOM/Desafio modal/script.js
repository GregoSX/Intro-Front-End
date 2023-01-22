const button = document.querySelector('#openModal')
const wrapper = document.querySelector('.modal-wrapper')

button.addEventListener('click', () => {
    wrapper.classList.remove('invisible')
})

document.addEventListener(('keydown'), (event) => {
    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        wrapper.classList.add('invisible')
    }
})