const burger = document.querySelector('.burger');
const navResponsive = document.querySelector('.nav-responsive');
let isBurgerClicked = false;
let portfolios = []

async function renderAllPortfolio() {
    portfolios = await getPortfolioData();
    renderPortfolio(portfolios, 'Semua');
}

burger.addEventListener("click", function(e) {
    if(!isBurgerClicked){
        burger.firstElementChild.firstElementChild.src = 'assets/icon/close.svg';
        navResponsive.style.maxHeight = navResponsive.scrollHeight + 'px';
    } else {
        burger.firstElementChild.firstElementChild.src = 'assets/icon/burger.svg';
        navResponsive.style.maxHeight = 0;
    }
    isBurgerClicked = !isBurgerClicked;
});



renderAllPortfolio();
renderMediumStories();