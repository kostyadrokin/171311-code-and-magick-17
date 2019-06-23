'use strict';

var setupWindow = document.querySelector('.setup');
var dialogHandler = setupWindow.querySelector('.upload');
var itemsShopList = setupWindow.querySelector('.setup-artifacts-shop');
var itemOnShopList = itemsShopList.querySelector('.setup-artifacts-cell').querySelectorAll('img');
var itemsBagsList = setupWindow.querySelector('.setup-artifacts').querySelectorAll('.setup-artifacts-cell');

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
})
