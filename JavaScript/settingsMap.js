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
				"<p>Ваш браузер не поддерживает аудио</p>"+
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
            balloonLayout: balloonLayout,
            // Отключаем режим панели для балуна.
            balloonPanelMaxMapArea: 0
        });
			map.geoObjects.add(multiRoute);
		}