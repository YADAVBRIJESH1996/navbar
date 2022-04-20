const mobile_nav = document.querySelector(".mobile-navbar-btn");

const Nav_header = document.querySelector(".header");


const toggaleNave_bar=()=>{
    Nav_header.classList.toggle("active")

}

mobile_nav.addEventListener("click", ()=>toggaleNave_bar());