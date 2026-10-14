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
// Task 4
var form4 = document.getElementById('form4');
var inputs4 = form4.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], select');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
var genderError = document.getElementById('genderError');
var success4 = document.getElementById('success4');

function checkPasswords() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('Passwords do not match');
  } else {
    confirmPassword.setCustomValidity('');
  }
  checkInput(confirmPassword);
}

function checkGender() {
  var selected = form4.querySelector('input[name="gender"]:checked');
  if (selected) {
    genderError.classList.add('d-none');
    return true;
  } else {
    genderError.classList.remove('d-none');
    return false;
  }
}

for (var j = 0; j < inputs4.length; j++) {
  inputs4[j].addEventListener('input', function () {
    if (this === confirmPassword) {
      checkPasswords();
    } else {
      checkInput(this);
    }
  });
}

country.addEventListener('change', function () {
  checkInput(this);
});

form4.addEventListener('submit', function (e) {
  e.preventDefault();
  for (var j = 0; j < inputs4.length; j++) {
    checkInput(inputs4[j]);
  }
  checkPasswords();
  var genderOk = checkGender();

  if (form4.checkValidity() && genderOk) {
    success4.classList.remove('d-none');
  } else {
    success4.classList.add('d-none');
  }
});

form4.addEventListener('reset', function () {
  var marked = form4.querySelectorAll('.is-valid, .is-invalid');
  for (var j = 0; j < marked.length; j++) {
    marked[j].classList.remove('is-valid', 'is-invalid');
  }
  confirmPassword.setCustomValidity('');
  genderError.classList.add('d-none');
  success4.classList.add('d-none');
});