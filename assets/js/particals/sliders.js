export function sliders() {
    const contentSliders = document.querySelectorAll('.item-content__slider');
    contentSliders.forEach(slider => {
        const container = slider.closest('.item-content');
        const nextBtn = container.querySelector('.item-content__next');
        const prevBtn = container.querySelector('.item-content__prev');
        const pagination = container.querySelector('.item-content__pagination');
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
                el: pagination,
                clickable: true
            },
              navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
        }

        )
    })
    
}