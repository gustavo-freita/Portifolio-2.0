const hamburguer = document.querySelector(".hamburguer");
const navBar = document.querySelector("ul");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navBar.classList.toggle('active');
})