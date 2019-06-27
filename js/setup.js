'use strict';
(function () {
  var WIZARDS_KOL = 4;
  var wizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireballColor = document.querySelector('.setup-fireball-wrap');

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

  var WIZARDS_FIREBALLCOLOR = [
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
    '#ee4830'
  ];
  var wizards = [];
  var createDataWizards = function () {
    for (var i = 0; i < WIZARDS_KOL; i++) {
      wizards.push(
          {
            name: WIZARDS_NAMES[getRandom(0, WIZARDS_NAMES.length)] + ' ' + WIZARDS_LASTNAMES[getRandom(0, WIZARDS_LASTNAMES.length)],
            coatColor: WIZARDS_COATCOLOR[getRandom(0, WIZARDS_COATCOLOR.length)],
            eyesColor: WIZARDS_EYESCOLOR[getRandom(0, WIZARDS_EYESCOLOR.length)]
          }
      );
    }
  };

  wizardCoatColor.addEventListener('click', function () {
    wizardCoatColor.style.fill = WIZARDS_COATCOLOR[getRandom(0, WIZARDS_COATCOLOR.length)];
  });
  wizardEyesColor.addEventListener('click', function () {
    wizardEyesColor.style.fill = WIZARDS_EYESCOLOR[getRandom(0, WIZARDS_EYESCOLOR.length)];
  });
  wizardFireballColor.addEventListener('click', function () {
    var fireballColor = WIZARDS_FIREBALLCOLOR[getRandom(0, WIZARDS_FIREBALLCOLOR.length)];
    document.querySelector('.setup-fireball-wrap').style.background = fireballColor;
    document.querySelector('.setup-fireball-input').value = fireballColor;
  });

  var similarListElement = document.querySelector('.setup-similar-list');

  // Находим шаблон в HTML файле --
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizards = function () {
    createDataWizards();
    for (var i = 0; i < wizards.length; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
      similarListElement.appendChild(wizardElement);
    }
  };
  renderWizards();
})();
