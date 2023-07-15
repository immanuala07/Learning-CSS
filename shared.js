var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');

// console.dir(backdrop);

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}

function closeModal () {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

backdrop.addEventListener('click', closeModal);

modalActionNoButton.addEventListener('click', closeModal);
