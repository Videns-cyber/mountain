// Таблица альпинистских туров
let submit = document.getElementById('submit');;
let trs = document.querySelectorAll('.column');
submit.onclick = function (event) {
  event.preventDefault();
  for (let tr of trs) {
    tr.classList.toggle('invisible');
  }
}