$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);


const BoxContents= $$('.box-content')
const SiderbarItems = $$('.nav-sidebar__item');

SiderbarItems.forEach((slider, index) => {

    const BoxContent = BoxContents[index];
    slider.onclick = function() {
        $('.box-content.active').classList.remove('active');
        $('.nav-sidebar__item.active').classList.remove('active');
        this.classList.add('active');
        BoxContent.classList.add('active');
    }
});

// let index = 0;
// const sliders = document.getElementsByClassName('swiper-wapper__item');
// let slideShow = setInterval(() => {
//     for (let i = 0; i < sliders.length; i++) {
//         sliders[i].classList.remove('active');
//     }
//     sliders[index].classList.add('active');
//     index == sliders.length - 1 ? index = 0 : index = index + 1;
// }, 5000)
