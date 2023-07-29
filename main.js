const btn = document.querySelector("#btn")
const remove = document.querySelector("#remove")
const navBar = document.querySelector(".nav__links")
btn.addEventListener("click", (e) => {
  navBar.classList.remove("remove__list")
})
//
remove.addEventListener("click", (e) => {
  navBar.classList.add("remove__list")
})

