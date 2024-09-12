var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests:true,
        clickDable: true
    },
    autoplay:{
        delay:2500,
    },

    loop:true,
});

var swiper = new Swiper(".sale_sec", {
    
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay:{
        delay:3500,
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints:{
        1280:{
            slidesPerView: 5
        },
        1024:{
            slidesPerView: 4,
        },

        768:{
            slidesPerView: 3,
        }, 

        640:{
            slidesPerView: 1,
        },

        0:{
            slidesPerView: 1
        }
    },

    loop:true,
});


var swiper = new Swiper(".product_swip", {
    
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay:{
        delay:3500,
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints:{
        1280:{
            slidesPerView: 4
        },
        1024:{
            slidesPerView: 3,
        },

        768:{
            slidesPerView: 2,
        }, 

        640:{
            slidesPerView: 2,
        },

        0:{
            slidesPerView: 1
        }
    },

    loop:true,
});
