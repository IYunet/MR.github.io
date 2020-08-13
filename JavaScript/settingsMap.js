ymaps.ready(init);
		function init(){
			var map = new ymaps.Map("first_map", {
					center: [52.284387, 104.279504],
					zoom: 15
				});
		
		
			var pointA = [52.293568, 104.286110],
			pointB = [52.291487, 104.280185],
			pointC = [52.287963, 104.280718],
			balloonLayout = ymaps.templateLayoutFactory.createClass(
				"<div class='my-balloon'>" +
				"<audio controls>"+
				'<source src="/music/Peace.ogg">'+
				"</audio>"+
				'<a class="close" href="#">&times;</a>'+
				'/<div>', {

                build: function () {
                    this.constructor.superclass.build.call(this);
                    this._$element = $('.my-balloon', this.getParentElement());
                    this._$element.find('.close')
                        .on('click', $.proxy(this.onCloseClick, this));
                },

                onCloseClick: function (e) {
                    e.preventDefault();
                    this.events.fire('userclose');
                }
            }
        ),
        multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [
                pointA,
                pointB,
                pointC
            ],
            params: {
				 routingMode: 'pedestrian'
                // avoidTrafficJams: true,
                //routingMode: 'masstransit'
            }
        }, {
			 boundsAutoApply: true,
            /**
             * Макет геообъекта.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml#param-options
             */
            balloonLayout: balloonLayout,
            // Отключаем режим панели для балуна.
            balloonPanelMaxMapArea: 0
        });
			//BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            //'<audio controls>'+
			//'<source src="/music/mirror.ogg">'+
			//'</audio>', {build: function () {
            //}, clear: function () {
               
            //}
			//});
			//var placemark = new ymaps.Placemark(pointA, {
			//	balloonContentLayout: BalloonContentLayout,
            
			//	balloonPanelMaxMapArea: 0
			//});
			//multiRoute = new ymaps.multiRouter.MultiRoute({
			//	referencePoints: [
			//		pointA,
			//		pointB,
			//		pointC				],
			//	params: {
            //    //Тип маршрутизации - пешеходная маршрутизация.
			//		routingMode: 'pedestrian'
			//		
			//	}
			//}, 	{
			//  wayPointVisible:false,
            // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
            //boundsAutoApply: true
			
			//});
			//map.geoObjects.add(placemark);
			map.geoObjects.add(multiRoute);
		}