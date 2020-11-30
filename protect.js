let slider = [ 'https://images.unsplash.com/photo-1461685265823-f8d5d0b08b9b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c2VjdXJpdHl8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1150&q=60', 'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VjdXJpdHl8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1150&q=60', 'https://images.unsplash.com/photo-1523294557-3637e1db3f33?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNlY3VyaXR5fGVufDB8fDB8&auto=format&fit=crop&w=1150&q=60', 'https://images.unsplash.com/photo-1580847097346-72d80f164702?ixlib=rb-1.2.1&auto=format&fit=crop&w=1150&q=60', 'https://images.unsplash.com/photo-1586661615438-349a276d098b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1150&q=60'
]

// Website Developed by George Mealy 
let img = document.querySelector('.image')
let bgSet = document.body

let rightBtn = document.querySelector('.btn-right')
let leftBtn = document.querySelector('.btn-left')
var i = 0
rightBtn.addEventListener('click', function(e) {
    i++
    if (i >= slider.length) {
        i = 0
    }
    img.setAttribute('src', slider[i])
    switch (i) {
        case 0:
            document.querySelector('.image-gallery').style.backgroundColor = 'white'
            break;
        case 1:
            document.querySelector('.image-gallery').style.backgroundColor = 'white'
            break;
        case 2:
            document.querySelector('.image-gallery').style.backgroundColor = 'white'
            break;
        case 3:
            document.querySelector('.image-gallery').style.backgroundColor = 'white'
            break;
        case 4:
            document.querySelector('.image-gallery').style.backgroundColor = 'white'
            break;
        default:
            document.querySelector('.image-gallery').style.backgroundColor = 'white'
    }
})
leftBtn.addEventListener('click', function(e) {
    i--
    if (i < 0) {
        i = slider.length - 1
    }
    img.setAttribute('src', slider[i])
    switch (i) {
        case 0:
            document.querySelector('.image-gallery').style.backgroundColor = 'white'
            break;
        case 1:
            document.querySelector('.image-gallery').style.backgroundColor = 'white'
            break;
        case 2:
            document.querySelector('.image-gallery').style.backgroundColor = 'white'
            break;
        case 3:
            document.querySelector('.image-gallery').style.backgroundColor = 'white'
            break;
        case 4:
            document.querySelector('.image-gallery').style.backgroundColor = 'white'
            break;
        default:
            document.querySelector('.image-gallery').style.backgroundColor = 'white'
    }
})



// muitple bg colors effect 
// function loading() {
//     alert('You can change the background color of this page simply by click anywhere in the page');
// }
// bgSet.addEventListener('mousemove', function(e) {
//     let cordY = e.offsetY
//     let cordX = e.offsetX
//     bgSet.style.backgroundColor = `rgb(${cordX}, ${cordY}, 40)`
// })

