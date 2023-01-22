const btn = document.getElementById('button')

btn.addEventListener('click', function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active')
        this.classList.add('not-active')
    } else {
        this.classList.remove('not-active')
        this.classList.add('active')
    }
 })