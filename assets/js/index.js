import { homeModal } from "./modals/home-modal.js";
import { tabs } from "./particals/tabs.js";

document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.hero-home')){
        homeModal();
    } else if(document.querySelector('.page')) {
        tabs();
    } else {
        return;
    }
});



