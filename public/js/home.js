function qs(element){
    return document.querySelector(element)
}

window.addEventListener('load', function(){
    let btn = document.querySelector('.btnMenu');
    let menuNav = document.querySelector('.sidebar');
    
    btn.addEventListener('click', function(){
        btn.classList.toggle('click');
        menuNav.classList.toggle('show');

    });

    window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll)
        let buttonScroll = qs('.scroll');

        if(scroll > 1){
            buttonScroll.classList.remove('d-none');
            buttonScroll.addEventListener('click', function(){
                window.scrollTo(0,0)
            })
        }
        if(scroll == 0){
            buttonScroll.classList.add('d-none');
        }
    });
})