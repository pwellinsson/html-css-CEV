//input = document.querySelector("input#data");

function addZero(x) {
  return x < 10 ? "0" + x : "" + x;
  // Se o x for menor que zero, retorna string "0x" senão retorna normalmente.
}
/*
input.addEventListener("keydown", function (event) {
  if (event.which === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
*/

dia_atual = new Date().getDate();
mes_atual = addZero(new Date().getMonth() + 1);
ano_atual = new Date().getFullYear();

document.querySelector("input#mes").value = `${ano_atual}-${mes_atual}`;
document.querySelector(
  "input#dia"
).value = `${ano_atual}-${mes_atual}-${dia_atual}`;


