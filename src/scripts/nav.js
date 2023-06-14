export function navItems(){
    const nav = document.querySelector('.navBar');
    nav.insertAdjacentHTML("afterbegin", '<img class="nav__logo" src="./src/assets/img/logo.svg" alt="">');
    
    const navButton = document.createElement('button');
    navButton.classList.add('nav__button')
    navButton.innerText = "Sair";
    nav.appendChild(navButton);
}
