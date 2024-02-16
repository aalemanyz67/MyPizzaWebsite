let cart = document.querySelector('.shopping-cart');


document.querySelector('#cart').onclick = () =>{
    cart.classList.toggle('active');
    login.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login').onclick = () =>{
    login.classList.toggle('active');

}