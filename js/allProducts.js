const filter = document.querySelector('.filter');
function close_open_filter(){
  filter.classList.toggle('active')
}

fetch('../js/items.json')
  .then(res => res.json())
  .then(data => {
    const products = document.getElementById('products_dev')

    all_products_json = data

    data.forEach(product => {
        // const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)
        const old_price_condition = product.old_price ? `<p class="old_price">${product.old_price}$</p>` : '';
        const percent_condition = product.old_price ? `<span class="sale_present">${Math.floor((product.old_price - product.price) / product.old_price * 100)}%</span>` :'';

        products.innerHTML += `
        
        <div class="product swiper-slide">
            <div class='icons'>
              <span><i onclick ="addToCart(${product.id}, this)" class="addToCart fa-solid fa-cart-plus"></i></span>
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
            </div>
            ${[percent_condition]}
            <div class="icons"></div>

            <div class="img_product">
               <img src=${product.img} alt="">
                <img class="img_hover" src="${product.img_hover}" alt="">
            </div>

            <h3 class="name_product">
            <a href="#">${product.name}</a>
             </h3>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <div class="price">
                <p><span>${product.price}$</span></p>
                ${old_price_condition}
            </div>
         </div>

        `
      
    });
  })
  .catch(err => console.error('Error loading JSON:', err));