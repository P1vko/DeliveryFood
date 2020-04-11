const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal')
const closeBtn = document.querySelectorAll('.close-btn')


cartButton.addEventListener('click', function (event) {
   modal.classList.add('is-open');
});

closeBtn.forEach(elem => {
   elem.addEventListener('click', function (event) {
      modal.classList.remove('is-open')
   })
});


let firstPlus = document.querySelector('#cart-plus-first');
let firstMinus = document.querySelector('#cart-minus-first')
let firstAddedToCartNumber = document.querySelector('#counter-first');

let secondPlus = document.querySelector('#cart-plus-second');
let secondMinus = document.querySelector('#cart-minus-second')
let secondAddedToCartNumber = document.querySelector('#counter-second');

let thirdPlus = document.querySelector('#cart-plus-third');
let thirdMinus = document.querySelector('#cart-minus-third')
let thirdAddedToCartNumber = document.querySelector('#counter-third');

let fourthPlus = document.querySelector('#cart-plus-fourth');
let fourthMinus = document.querySelector('#cart-minus-fourth')
let fourthAddedToCartNumber = document.querySelector('#counter-fourth');

let fifthPlus = document.querySelector('#cart-plus-fifth');
let fifthMinus = document.querySelector('#cart-minus-fifth')
let fifthAddedToCartNumber = document.querySelector('#counter-fifth');

let sixthPlus = document.querySelector('#cart-plus-sixth');
let sixthMinus = document.querySelector('#cart-minus-sixth')
let sixthAddedToCartNumber = document.querySelector('#counter-sixth');

let counterFirst = 0;
let counterSecond = 0;
let counterThird = 0;
let counterFourth = 0;
let counterFifth = 0;
let counterSixth = 0;

firstPlus.onclick = function () {
   if(counterFirst < 9) {
      counterFirst++;
      firstAddedToCartNumber.textContent = counterFirst;
   } else{return}
   }
   
firstMinus.onclick = function () {
   if(counterFirst >= 1) {
      counterFirst--;
      firstAddedToCartNumber.textContent = counterFirst;
   } else {return}
}


secondPlus.onclick = function () {
   if(counterSecond < 9) {
      counterSecond++;
      secondAddedToCartNumber.textContent = counterSecond;
   } else{return}
   }
   
secondMinus.onclick = function () {
   if(counterSecond >= 1) {
      counterSecond--;
      secondAddedToCartNumber.textContent = counterSecond;
   } else {return}
}


thirdPlus.onclick = function () {
   if(counterThird < 9) {
      counterThird++;
      thirdAddedToCartNumber.textContent = counterThird;
   } else{return}
   }
   
thirdMinus.onclick = function () {
   if(counterThird >= 1) {
      counterThird--;
      thirdAddedToCartNumber.textContent = counterThird;
   } else {return}
}


fourthPlus.onclick = function () {
   if(counterFourth < 9) {
      counterFourth++;
      fourthAddedToCartNumber.textContent = counterFourth;
   } else{return}
   }
   
fourthMinus.onclick = function () {
   if(counterFourth >= 1) {
      counterFourth--;
      fourthAddedToCartNumber.textContent = counterFourth;
   } else {return}
}


fifthPlus.onclick = function () {
   if(counterFifth < 9) {
      counterFifth++;
      fifthAddedToCartNumber.textContent = counterFifth;
   } else{return}
   }
   
fifthMinus.onclick = function () {
   if(counterFifth >= 1) {
      counterFifth--;
      fifthAddedToCartNumber.textContent = counterFifth;
   } else {return}
}


sixthPlus.onclick = function () {
   if(counterSixth < 9) {
      counterSixth++;
      sixthAddedToCartNumber.textContent = counterSixth;
   } else{return}
   }
   
sixthMinus.onclick = function () {
   if(counterSixth >= 1) {
      counterSixth--;
      sixthAddedToCartNumber.textContent = counterSixth;
   } else {return}
}