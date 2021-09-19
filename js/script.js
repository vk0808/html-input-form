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