// //kup teraz
// $('.article button').on('click', function () {
//     $('.modal-wrap').addClass('active')
//     $('.article').addClass('blur')
// })

// //wyłącz popup
// $('.hide').on('click', function () {
//     $('.modal-wrap').removeClass('active')
//     $('.article').removeClass('blur')
// })

//wszystko razem w jQ
// $('.article button, .hide').on('click', function () {
//     $('.modal-wrap').toggleClass('active')
//     $('.article').toggleClass('blur')
// })

//wersja jS
// const btnModal = document.querySelector('.article button');
document.querySelector('.article button').addEventListener('click', function () {
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('.article').classList.add('blur');
})
document.querySelector('span.hide').addEventListener('click', function () {
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.article').classList.remove('blur');
})