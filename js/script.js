// open & close Cart

const cart = document.querySelector('.cart');
const menu = document.querySelector('.mobile_menu')
const openBtn = document.querySelector('.icon_cart')
const closeBtn = document.querySelector('.close_cart')
const priceCartTotal = document.querySelector('.price_cart_total')
const priceCartHeader = document.querySelector('.price_cart_header')
const countItem = document.querySelector('.count_item');
const countItemCart = document.querySelector('.count_item_cart')
const bigImg = document.getElementById('bigImg')
// const btnRemoveItem = document.querySelector('.delete_item')

function openCart(){
    cart.classList.add('active')
}

function closeCart(){
    cart.classList.remove('active')
}

function openMenu(){
    menu.classList.add('active')
}

function closeMenu(){
    menu.classList.remove('active')
}

function changeImage(img){
    bigImg.src = img
}

console.log(bigImg)



openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)


let all_products_json;

let items_in_cart = document.querySelector('.items_in_cart');
let products_cart = []

function addToCart (id, btn){
    products_cart.push(all_products_json[id])
    btn.classList.add('active')
    console.log(products_cart)
    getCartItems()

}

function getCartItems (){
    let items_c = '';
    let totalPrice = 0
    // let countProductCart = 0;
    for(let i = 0; i <products_cart.length; i++){
        items_c += `
            <div class="item_cart">
                <img src="${products_cart[i].img}" alt="">
                <div class="content">
                    <h4>${products_cart[i].name}</h4>
                    <p class="price_cart">${products_cart[i].price}$</p>
                </div>
                <button onclick ="removeFromCart(${i})" class="delete_item"><i class="fa-solid fa-trash"></i></button>
            </div>
        `
        totalPrice += products_cart[i].price
    };
    
    priceCartTotal.innerHTML = `${totalPrice}$`
    priceCartHeader.innerHTML = `${totalPrice}$`
    countItem.innerHTML = products_cart.length
    countItemCart.innerHTML = `(${products_cart.length} Item in Cart)`

    items_in_cart.innerHTML = items_c;
}

function removeFromCart (index){
    products_cart.splice(index,1)
    getCartItems()
    let addToCartBtn = document.querySelectorAll('.addToCart')
    for(let i = 0; i < addToCartBtn.length; i++){

        addToCartBtn[i].classList.remove('active')

        products_cart.forEach(product => {
            if(product.id === i){
                addToCartBtn[i].classList.add('active')
            }
        })
    }
}


// back to top js

let backToTop = document.querySelector('.back_to_top');

backToTop.addEventListener('click', function(){
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
})