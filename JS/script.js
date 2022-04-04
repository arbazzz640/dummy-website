
$(document).ready(function () {
    $('.count').counterUp({
        delay: 10,
        time: 2000
    })
})
mybutton = document.getElementById('myBtn');
window.onscroll = function(){
    scrollFunction()
};
function scrollFunction(){
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        mybutton.style.display = "block"
    }else{
        mybutton.style.display = "none"   
    }
}
function topFunction(){
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome , Firefox, IE and Opera
}
AOS.init({
    offset: 180,
    duration: 1500,
});