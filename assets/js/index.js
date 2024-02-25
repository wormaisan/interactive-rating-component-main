let submitBtn = document.querySelector('.card__btn');
let rating = document.querySelectorAll('.card__rating input')
let ratingMsg = document.querySelector('.thank__rating span');
let cardWindow = document.querySelector('.card');
let thankWindow = document.querySelector('.thank');
let defaultRating = 0;

if (submitBtn) {
  submitBtn.addEventListener('click', function() {
    if (rating) {
      rating.forEach(function (radio) {
        if (radio.checked) {
          defaultRating = radio.value;
        }
      });
    }

    ratingMsg.textContent = defaultRating;
    cardWindow.classList.add('blockHide');
    thankWindow.classList.remove('blockHide');
  });
}
