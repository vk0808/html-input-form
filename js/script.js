const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');

// add event listener to text input
text.addEventListener('input', function () {
  // validate text input through regex
  let namRegex = new RegExp(/^[A-Z][a-z]{2,}$/);
  if (namRegex.test(text.value))
    textError.textContent = "";
  else
    textError.textContent = "start with Capital, minimum 3 characters required";
})


const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');

email.addEventListener('input', function () {
  let pattern = RegExp('^[A-Z a-z]{1,}([+-_.]*)[A-Z a-z 0-9 _+-.]*[@]{1}[A-Z a-z 0-9 +_-]{1,}[.]{1}[a-z]{2,3}([.]{1}[a-z]{2})*$');
  if (pattern.test(email.value))
    emailError.textContent = "";
  else
    emailError.textContent = "Ex-abc.xyz@ybl.com, need 3 mandatory parts(abc, ybl, com), 2 optional(xyz & in) with precise @ and .positions";
});