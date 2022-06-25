var menu = document.querySelector('.menu');
var submenu = document.querySelector('.submenu');
var nuclearmenu = document.querySelector('.nuclearmenu');
var nuclearbutton = document.querySelector('.nuclear');
var clickerbutton = document.querySelector('.button');
var counter = document.querySelector('.counter');
var count = 0;
var firstauto = document.querySelector('.firstauto');
var profile = document.querySelector('.profile');
var firstachievment = document.querySelector('.firstachievment');
var secondachievment = document.querySelector('.secondachievment');
var firstdescription = document.querySelector('.firstdescription')
var secondauto = document.querySelector('.secondauto');
var seconddescription = document.querySelector('.seconddescription');
var thirdauto = document.querySelector('.thirdauto');
var thirddescription = document.querySelector('.thirddescription');
var thirdachievment = document.querySelector('.thirdachievment');
var firstCounterPrice = 15;
var secondCounterPrice = 25;
var thirdCounterPrice = 35;
var achievments = [
  'Вы накопили денег на свой первый автокликер!',
  'Вы накопили денег на свой второй автикликер!',
  'Вы ебнулись! Зачем вам столько цифр?'
];

updateMainButton();
makeMenu(submenu, menu);
makeMenu(nuclearmenu, nuclearbutton);
makeFirstAuto();
makeSecondAuto();
makeThirdAuto();

function clickCounter() { // подсчет кликов
  count = count + 1;
  counter.textContent = count;
  makeAchievments();
}
function makeFirstAuto() { // первая покупка автокликера
  firstauto.addEventListener('click', function() {
    if (count>=firstCounterPrice) {
      firstCounterPrice = changeCounterPrice(firstCounterPrice);
      firstdescription.textContent = firstCounterPrice;
      counter.textContent = count;
      setInterval(function () {
        count = count + 1;
        counter.textContent = count;
      }, 1500);
      }
  });
}
function makeSecondAuto() { // вторая покупка автокликера
  secondauto.addEventListener('click', function() {
    if (count>=secondCounterPrice) {
      secondCounterPrice = changeCounterPrice(secondCounterPrice);
      seconddescription.textContent = secondCounterPrice;
      counter.textContent = count;
      setInterval(function () {
        count = count + 2;
        counter.textContent = count;
      }, 1000);
      }
  });
}
function makeThirdAuto() { // третья покупка автокликера
  thirdauto.addEventListener('click', function() {
    if (count>=thirdCounterPrice) {
      thirdCounterPrice = changeCounterPrice(thirdCounterPrice);
      thirddescription.textContent = thirdCounterPrice;
      counter.textContent = count;
      setInterval(function () {
        count = count + 4;
        counter.textContent = count;
      }, 1000);
      }
  });
}
clickerbutton.addEventListener('click', clickCounter); // привязка подсчета к клику

function changeCounterPrice(m) {
  count = count - m;
  m = Math.trunc(m * 1.2);
  return(m);
}

function makeAchievments() {
  if (count==15) {
    clickerbutton.textContent = 'Вы открыли новое достижение! Посмотрите вкладку прогресса';
    firstachievment.textContent = achievments[0];
  }
 if (count==25) {
   clickerbutton.textContent = 'Вы открыли новое достижение! Посмотрите вкладку прогресса';
   secondachievment.textContent = achievments[1];
 }
 if (count==540000) {
   clickerbutton.textContent = 'Вы открыли новое достижение! Посмотрите вкладку прогресса';
   thirdachievment.textContent = achievments[2];
 }
}

function updateMainButton() {
  setInterval(function () {
    clickerbutton.textContent = 'нажми на меня!'
  }, 7000)
}
