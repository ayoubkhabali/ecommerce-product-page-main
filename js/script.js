// ===================================
//          CART BUTTON
//       ==========================

const cartIcon = document.querySelector(".cart-icon")
const cartBx = document.querySelector(".cart-bx")
const mainImage = document.querySelector('.main .left-side .main-image')
const mainImageCarousel = document.querySelector('.main .carousel-img .main-image')
const mainImageMobile = document.querySelector('.main .left-side .main-image')
const imagesThumbnails = document.querySelectorAll('.main .left-side .others-images .imgBx')
const carouselImages  = document.querySelector(".main .carousel-img")
const nextButtonCarousel = document.querySelector('.carousel-img .next-prev-btn .next-btn')
const prevButtonCarousel = document.querySelector('.carousel-img .next-prev-btn .prev-btn')
const nextButtonMobile = document.querySelector('.main .left-side .next-prev-btn .next-btn')
const prevButtonMobile = document.querySelector('.main .left-side .next-prev-btn .prev-btn')
const increaseButton = document.querySelector('.increase-btn')
const decreaseButton = document.querySelector('.decrease-btn')
const addToCart = document.querySelector('.add-to-cart')
const navToggler = document.querySelector('.nav-toggler')
const navTogglerSidebar = document.querySelector('.nav-toggler-sidebar')
const sideBar = document.querySelector('.nav-items')
const cartEmpty = document.querySelector('.cart-empty')
const cartNotEmpty = document.querySelector('.cart-not-empty')
const productListSection = document.querySelector('.product-list')

 

// ===================================
//          SHOW SIDEBAR
//       ==========================

navToggler.addEventListener('click',()=> {
    sideBar.classList.add('show-sidebar')
})
navTogglerSidebar.addEventListener('click', ()=> {
    sideBar.classList.remove('show-sidebar')

})

// ===================================
//          INCREASE PRODUCTS
//       ==========================
let productCounter = 1;

increaseButton.addEventListener('click', ()=> {
    productCounter++;
    document.querySelector('.product-counter').textContent = productCounter;
    console.log(productCounter)
})

decreaseButton.addEventListener('click',()=> {
    if (productCounter <= 1) {
        productCounter = 1;
    } else {
        productCounter--;

        document.querySelector('.product-counter').textContent = productCounter;

    }
    
})

// ===================================
//          ADD TO CART BUTTON
//       ==========================
addToCart.addEventListener('click', ()=> {
    addToCart.classList.toggle('clicked');
    if (!addToCart.classList.contains('clicked')) {
        cartEmpty.style.transform = 'translateX(00%)'
        cartNotEmpty.style.transform = 'translateX(100%)' 
        productListSection.innerHTML = ""    

    }
     if (addToCart.classList.contains('clicked')) {

        cartEmpty.style.transform = 'translateX(-100%)'
        cartNotEmpty.style.transform = 'translateX(0%)'
        productListSection.innerHTML = `<div class="bought-item">
        <div class="product-icon">
          <img src="./img/image-product-1-thumbnail.jpg" alt="">
        </div>
        <div class="product-info">
          <h3 class="product-title">Full Limited Edition Sneakers</h3>
          <span class="product-price-quantity"> $${125.00} x ${productCounter}</span>
          <span class="total-price">${productCounter * 125.00}$</span>
        </div>
        <div class="delete-icon">
          <i class='bx bxs-trash'></i>
        </div>
      </div>`

        addToCart.innerHTML = "<i class='bx bx-cart-alt'></i> Remove from cart"
  
    } else {
        addToCart.innerHTML = "<i class='bx bx-cart-alt'></i> Add to cart"
       
    }

})

cartIcon.addEventListener("click", ()=> {
    cartBx.classList.toggle('show-cartBx')
})


// ===================================
//          SHOW PRODUCTS IMAGES
//       ==========================

mainImage.addEventListener("click", ()=> {
    carouselImages.classList.add("show-carousel")
})



document.querySelector('.close-btn').addEventListener('click',()=>{
    carouselImages.classList.remove('show-carousel')
})

imagesThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (e) => {
        mainImage.innerHTML =`<img src="img/image-product-${e.currentTarget.dataset.no}.jpg" alt="">`
    })
} )

let imageCounter = 1;

nextButtonCarousel.addEventListener('click', ()=> {
    imageCounter++;
    if (imageCounter <= 4)
    mainImageCarousel.innerHTML = `<img src="img/image-product-${imageCounter}.jpg" alt="" >`
    if (imageCounter >4) {
        imageCounter = 1;
        mainImageCarousel.innerHTML = `<img src="img/image-product-${imageCounter}.jpg" alt="" >`


    }
})

prevButtonCarousel.addEventListener('click', ()=> {
    imageCounter--;
    if (imageCounter < 1)
    imageCounter = 4;
    mainImageCarousel.innerHTML = `<img src="img/image-product-${imageCounter}.jpg" alt="" >`
    if (imageCounter >=1) {
        mainImageCarousel.innerHTML = `<img src="img/image-product-${imageCounter}.jpg" alt="" >`


    }
})

nextButtonMobile.addEventListener('click', ()=> {
    imageCounter++;
    if (imageCounter <= 4)
    mainImageMobile.innerHTML = `<img src="img/image-product-${imageCounter}.jpg" alt="" >`
    if (imageCounter >4) {
        imageCounter = 1;
        mainImageMobile.innerHTML = `<img src="img/image-product-${imageCounter}.jpg" alt="" >`


    }
})

prevButtonMobile.addEventListener('click', ()=> {
    imageCounter--;
    if (imageCounter < 1)
    imageCounter = 4;
    mainImageMobile.innerHTML = `<img src="img/image-product-${imageCounter}.jpg" alt="" >`
    if (imageCounter >=1) {
        mainImageMobile.innerHTML = `<img src="img/image-product-${imageCounter}.jpg" alt="" >`


    }
})