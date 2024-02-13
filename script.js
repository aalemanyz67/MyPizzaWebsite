let cart = document.querySelector('.shopping-cart');


document.querySelector('#cart').onclick = () =>{
    cart.classList.toggle('active');
    login.classList.remove('active');
}