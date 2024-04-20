var typed = new Typed(".text", {
    strings: ["Font End Developer" , "Web Developer"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:500,
    loop:true
});

const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
