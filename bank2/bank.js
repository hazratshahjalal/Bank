// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
  const emailField = document.getElementById('user-email');
  const email = emailField.value;

  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;
  console.log(email, password)

  if (email === 'sontan@baap.com' && password === 'secret') {
    window.location.href = 'bank.html'
  }
  else {
    alert('invalid user, please give this email "sontan@baap.com" and password "secret"')
  }
})
