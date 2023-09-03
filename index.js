let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    // event.currentTarget.classList.add('active-tab');
    document.getElementById(tabname).classList.add('active-tab');
}
let sidemenu = document.getElementById('nav-links');
function openMenu() {
    sidemenu.style.right = "0";
}
function closeMenu() {
    sidemenu.style.right = "-230px";
}
