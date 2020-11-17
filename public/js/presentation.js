function qs(element){
    return document.querySelector(element)
}

window.addEventListener('load', function(){
    let textContainer = qs('.presentationTextContainer');
    let imgContainer = qs('.presentationImageContainer');

    textContainer.classList.toggle('.slide-left');
    imgContainer.classList.toggle('.slide-right')
})