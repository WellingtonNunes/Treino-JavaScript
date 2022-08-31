 const btn_menu = document.querySelector("#btn_menu");
 const menuMobile = document.querySelector(".menu-mobile");

btn_menu.addEventListener('click', mostrarMenu);
function mostrarMenu(){
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open');
    }
}