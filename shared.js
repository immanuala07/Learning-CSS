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

    setTimeout(() => {
      backdrop.classList.add('open');
    }, 10);
  });
}

function closeModal () {
  // backdrop.style.display = "none";
  // modal.style.display = "none";

  if (modal) {
    modal.classList.remove('open');
  }

  backdrop.classList.remove('open');

  setTimeout(() => {
    backdrop.style.display = 'none';
    // Adding the same timeout seconds as per transitions as 0.2 seconds or 200 milliseconds.
  }, 200);
}

backdrop.addEventListener('click', function() {
  // mobileNav.style.display = "none";

  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  // Since the below code is always executed so we wrap the code in IF condition.
  modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', function() {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";

  mobileNav.classList.add('open');
  backdrop.style.display = 'block';

  setTimeout(() => {
    backdrop.classList.add('open');    
  }, 10);
});
