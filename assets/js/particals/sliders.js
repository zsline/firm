export function sliders() {
    const contentSliders = document.querySelectorAll('.item-content__slider');
    contentSliders.forEach(slider => {
        new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 52,
            watchOverflow: true,
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    },
              pagination: {
                el: '.item-content__pagination',
                clickable: true
            },
              navigation: {
                nextEl: '.item-content__next',
                prevEl: '.item-content__prev',
            },
        }

        )
    })
    
}