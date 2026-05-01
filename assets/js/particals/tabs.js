export function tabs(){
    const tabs = document.querySelectorAll('.sidebar__tabs--item');
    const contents = document.querySelectorAll('.page-tab__content');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(el => {
                el.classList.remove('active');
            });
            e.target.classList.add('active');
            contents.forEach(c =>{
                c.classList.remove('active');
                if(c.dataset.content == e.target.dataset.tab){
                    c.classList.add('active')
                }
            })
        })
    })
}