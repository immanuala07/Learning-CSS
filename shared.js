var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // backdrop.style.display = "block";
    // modal.style.display = "block";

    // modal.className = 'open'; // This will actually overwrites the complete class list.

    // Adds open css class to the modal element
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

function closeModal () {
  // backdrop.style.display = "none";
  // modal.style.display = "none";

  backdrop.classList.remove('open');
  modal.classList.remove('open');
}

backdrop.addEventListener('click', function() {
  // mobileNav.style.display = "none";

  mobileNav.classList.remove('open');
  closeModal();
});

modalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', function() {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";

  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
