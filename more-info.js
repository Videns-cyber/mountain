let submit = document.querySelector('.tours-table-submit');
let tr = document.querySelector('.column');
submit.onclick = function (event) {
  tr.classList.toggle('invisible');
  
}