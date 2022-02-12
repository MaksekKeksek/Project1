ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.759248, 37.624536],
    zoom: 15
  });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/mark.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
}

// function toggle () {
//   bigMap = !bigMap;

//   // Добавляем/убираем CSS-класс, определяющий размеры контейнера карты,
//   // заданные в абсолютных единицах (300x200 px).
//   if (bigMap) {
//       $('#map').removeClass('smallMap');
//   } else {
//       $('#map').addClass('smallMap');
//   }

//   // Если выставлен флаг, сообщаем карте, что ей следует
//   // привести свои размеры к размерам контейнера.
//   if ($('#checkbox').prop('checked')) {
//       myMap.container.fitToViewport();
//   }
// }
