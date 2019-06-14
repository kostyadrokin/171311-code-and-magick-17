'use strict';
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

// Генерация случайного числа для выбора случайного имени и фамилии
var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var WIZARDS_NAMES = [
  'Иван', 'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARDS_LASTNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARDS_COATCOLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARDS_EYESCOLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizards = [
  {
    name: WIZARDS_NAMES[getRandom(0, WIZARDS_NAMES.length)] + ' ' + WIZARDS_LASTNAMES[getRandom(0, WIZARDS_LASTNAMES.length)],
    coatColor: WIZARDS_COATCOLOR[getRandom(0, WIZARDS_COATCOLOR.length)],
    eyesColor: WIZARDS_EYESCOLOR[getRandom(0, WIZARDS_EYESCOLOR.length)]
  },
  {
    name: WIZARDS_NAMES[getRandom(0, WIZARDS_NAMES.length)] + ' ' + WIZARDS_LASTNAMES[getRandom(0, WIZARDS_LASTNAMES.length)],
    coatColor: WIZARDS_COATCOLOR[getRandom(0, WIZARDS_COATCOLOR.length)],
    eyesColor: WIZARDS_EYESCOLOR[getRandom(0, WIZARDS_EYESCOLOR.length)]
  },
  {
    name: WIZARDS_NAMES[getRandom(0, WIZARDS_NAMES.length)] + ' ' + WIZARDS_LASTNAMES[getRandom(0, WIZARDS_LASTNAMES.length)],
    coatColor: WIZARDS_COATCOLOR[getRandom(0, WIZARDS_COATCOLOR.length)],
    eyesColor: WIZARDS_EYESCOLOR[getRandom(0, WIZARDS_EYESCOLOR.length)]
  },
  {
    name: WIZARDS_NAMES[getRandom(0, WIZARDS_NAMES.length)] + ' ' + WIZARDS_LASTNAMES[getRandom(0, WIZARDS_LASTNAMES.length)],
    coatColor: WIZARDS_COATCOLOR[getRandom(0, WIZARDS_COATCOLOR.length)],
    eyesColor: WIZARDS_EYESCOLOR[getRandom(0, WIZARDS_EYESCOLOR.length)]
  }
];

var similarListElement = document.querySelector('.setup-similar-list');

// Находим шаблон в HTML файле
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}