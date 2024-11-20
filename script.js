// const btnmenu = document.querySelector('.material-icons');
// const sidebar = document.querySelector('.menu__item')

// const openMenu = btnmenu.addEventListener('click',()=>{
//     btnmenu.classList.toggle('active');
//     sidebar.classList.toggle('active')
// })
// console.log(openMenu)

// document.querySelectorAll(".sidebar").forEach(n => n.addEventListener("click", () => {
//     // btnmenu.classList.remove("active");
//     // sidebar.classList.remove("active");
//   }))


const btnMenu = document.querySelector('.navbar__menu--button');
const sidebar = document.querySelector('.sidebar');
const menuItems = document.querySelectorAll('.menu__item .menu__text');


function collapseSidebar() {

    sidebar.style.width = '60px';

  
    menuItems.forEach(item => {
        item.style.display = 'none';
    });
}


function expandSidebar() {

    sidebar.style.width = '200px';


    menuItems.forEach(item => {
        item.style.display = 'inline';
    });
}


btnMenu.addEventListener('click', () => {
    if (sidebar.style.width === '60px') {
        expandSidebar();
    } else {
        collapseSidebar();
    }
});



