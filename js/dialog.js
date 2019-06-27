'use strict';
(function () {
  var setupWindow = document.querySelector('.setup');
  var dialogHandler = setupWindow.querySelector('.upload');
  var itemsShopList = setupWindow.querySelector('.setup-artifacts-shop');
  var itemOnShopList = itemsShopList.querySelector('.setup-artifacts-cell').querySelectorAll('img');
  var itemsBagsList = setupWindow.querySelector('.setup-artifacts').querySelectorAll('.setup-artifacts-cell');
  var setupWindow = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupWindow.querySelector('.setup-close');
  var userIcon = document.querySelector('.setup-open-icon');
  var wizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireballColor = document.querySelector('.setup-fireball-wrap');
  var userNameInput = document.querySelector('.setup-user-name');

  // Функция закрытия модального окна по нажатию на ESC
  var onPopupEscPress = function (evt) {
    if (userNameInput !== document.activeElement) { // Проверка фокуса в поле имени игрока
      window.util.isEscEvent(evt, closePopup);
    }
  };

  // Функция открытия модального окна с разными обработчиками для объектов этого окна
  var openPopup = function () {
    setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);

  };

  var closePopup = function () {
    setupWindow.classList.add('hidden');
    setupWindow.style.top = 80 + 'px';
    setupWindow.style.left = 50 + '%';
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  userIcon.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  // Валидация инпута имени игрока
  document.querySelector('.setup-user-name').maxlength = '25';
  document.querySelector('.setup-user-name').setAttribute('minlength', 2);
  document.querySelector('.setup-similar').classList.remove('hidden');

  // Обработчик передаскивания окна
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupWindow.style.top = (setupWindow.offsetTop - shift.y) + 'px';
      setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (onClickEvt) {
          onClickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  // Обработчик перетаскивания звездочки
  itemOnShopList[0].addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordsItem = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoordsItem.x - moveEvt.clientX,
        y: startCoordsItem.y - moveEvt.clientY
      };

      startCoordsItem = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      itemOnShopList[0].style.position = 'absolute';
      itemOnShopList[0].style.top = (itemOnShopList[0].offsetTop - shift.y) + 'px';
      itemOnShopList[0].style.left = (itemOnShopList[0].offsetLeft - shift.x) + 'px';
      itemOnShopList[0].style.zIndex = 1000;

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      var sverkaCoordsStar = itemOnShopList[0].getBoundingClientRect();
      for (var i = 0; i < itemsBagsList.length; i++) {
        var sverkaCoordsBag = itemsBagsList[i].getBoundingClientRect();

        if (sverkaCoordsStar.y + (sverkaCoordsStar.height / 2) >= sverkaCoordsBag.y &&
          sverkaCoordsStar.y + (sverkaCoordsStar.height / 2) <= sverkaCoordsBag.y + 65 &&
          sverkaCoordsStar.x + (sverkaCoordsStar.width / 2) >= sverkaCoordsBag.x &&
          sverkaCoordsStar.x + (sverkaCoordsStar.width / 2) <= sverkaCoordsBag.x + 65
        ) {
          itemsBagsList[i].appendChild(itemOnShopList[0]);
          itemOnShopList[0].style.top = 0 + 'px';
          itemOnShopList[0].style.left = 0 + 'px';
        } else {
          itemOnShopList[0].removeAttribute('style');
        }
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}) ();
