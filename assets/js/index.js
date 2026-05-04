import { homeModal } from "./modals/home-modal.js";
import { tabs } from "./particals/tabs.js";
import { sliders } from "./particals/sliders.js";

document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.hero-home')){
        homeModal();
    } else if(document.querySelector('.page')) {
        tabs();
    } else {
        return;
    }
});
if(document.querySelector('.swiper-wrapper')){
    sliders();
}



