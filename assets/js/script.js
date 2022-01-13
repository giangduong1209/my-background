const menuOpenBtn = document.querySelector(".menu-open-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");
const menu = document.querySelector(".nav");
// const menuLinkBtn = document.querySelector(".nav-link");

const menuToggle = () => menu.classList.toggle("active");

menuOpenBtn.addEventListener("click", menuToggle);
menuCloseBtn.addEventListener("click", menuToggle);

const tabButtons = document.querySelectorAll(".tab-button");
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

const portfolioCarouselCards = document.querySelectorAll(".portfolio-carousel-card");
const portfolioCarouselInner = document.querySelector(".portfolio-carousel-inner");
const portfolioCarouselPrev = document.querySelector("#portfolio-carousel-prev");
const portfolioCarouselNext = document.querySelector("#portfolio-carousel-next");

const totalPortfolioCard = portfolioCarouselCards.length;

let portfolioCount = 0;

const carouselFunc = function (countParam){
    if(countParam >= totalPortfolioCard - 1) portfolioCount = 
    totalPortfolioCard - 1;
    if(countParam <= 0) portfolioCount = 0;

    portfolioCarouselInner.style.transform = `translateX(-${100 / 
        totalPortfolioCard * portfolioCount}%)`;
}

portfolioCarouselNext.addEventListener("click", function(){
    portfolioCount++;
    console.log("count A = ", portfolioCount);
    carouselFunc(portfolioCount);
});

portfolioCarouselPrev.addEventListener("click", function(){
    portfolioCount--;
    carouselFunc(portfolioCount);
})

const mainScroll = document.querySelector("main")
const goTop = document.querySelector(".go-top");

mainScroll.addEventListener("scroll", function(){
    if(mainScroll.scrollTop > 0){
        goTop.classList.add("active");
    }
    else{
        goTop.classList.remove("active");
    }
})



