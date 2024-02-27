document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    if (document.querySelector('.header_menu').id == ('')) {
        document.querySelector('.header_menu').id = ('open');
    } else {
        document.querySelector('.header_menu').id = ('')
    }
})

const images = document.querySelectorAll('.card');
const controls = document.querySelectorAll('.case_for_arrows');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('slider')
    images[index].classList.add('slider')
    imageIndex = index;
}

controls.forEach(e => {
    e.addEventListener('click', () => {
        if(event.target.classList.contains('left')) {
            let index = imageIndex - 1;
            if (index < 0) {
                index = images.length - 1;
            }
            show(index)
        } else if (event.target.classList.contains('right')) {
            let index = imageIndex + 1
            if (index >= images.length) {
                index = 0
            }
            show (index)
        }
    })
})

show(imageIndex)