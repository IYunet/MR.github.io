ymaps.ready(init);
		function init(){
			var map = new ymaps.Map("first_map", {
					center: [52.284387, 104.279504],
					zoom: 3
				});
		
		
			var pointA = [52.293568, 104.286110],
			pointB = [52.291487, 104.280185],
			pointC = [52.287963, 104.280718],
        /**
         * Создаем мультимаршрут.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
         */
			multiRoute = new ymaps.multiRouter.MultiRoute({
				referencePoints: [
					pointA,
					pointB,
					pointC				],
				params: {
                //Тип маршрутизации - пешеходная маршрутизация.
					routingMode: 'pedestrian'
				}
			}, 	{
            // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
            boundsAutoApply: true
			});
			map.geoObjects.add(multiRoute);
		}