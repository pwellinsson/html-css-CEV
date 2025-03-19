function clickMenu() {
  menu = document.querySelector("menu#menu");
  botao = document.querySelector("i#icon-menu");

  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
