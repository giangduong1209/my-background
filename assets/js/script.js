const menuOpenBtn = document.querySelector(".menu-open-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");
const menu = document.querySelector(".nav");
const menuLinkBtn = document.querySelector(".nav-link");

const menuToggle = () => menu.classList.toggle("active");

menuOpenBtn.addEventListener("click", menuToggle);
menuCloseBtn.addEventListener("click", menuToggle);

const tabButtons = document.querySelectorAll(".tab-button");
const tabButtonActive = document.querySelectorAll(".tab-button.active");
const tabContents = document.querySelectorAll(".tab-content");


for (let i = 0; i < tabButtons.length; i++){
    tabButtons[i].addEventListener("click", function (){
        for (let i = 0; i < tabContents.length; i++){
            if (tabButtons[i].classList.contains("active")) tabButtons[i].classList.remove("active");
            if (tabContents[i].classList.contains("active")) tabContents[i].classList.remove("active");
            if (tabContents[i].classList.contains(this.classList[0]))
            tabContents[i].classList.add("active");
        }
        this.classList.add("active");
    });
}