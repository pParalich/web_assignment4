function checkInput(input) {
  if (input.checkValidity()) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
  }
}
// Task 3
var form3 = document.getElementById('form3');
var inputs3 = form3.querySelectorAll('input, textarea');

for (var i = 0; i < inputs3.length; i++) {
  inputs3[i].addEventListener('input', function () {
    checkInput(this);
  });
}

form3.addEventListener('submit', function (e) {
  e.preventDefault();
  for (var i = 0; i < inputs3.length; i++) {
    checkInput(inputs3[i]);
  }
  if (form3.checkValidity()) {
    alert('Form sent!');
  }
});