$("document").ready(function(){
	
	var dialog = document.querySelector('dialog');
   
	if (! dialog.showModal) {
		dialogPolyfill.registerDialog(dialog);
	}	
		
	$(".close").click(function(){
		dialog.close();
	});
	
	
	//------ массивы с данными ------
	var notebooks = [ "Ноутбук HP 15-bw625ur",
					  "Ноутбук LENOVO IdeaPad 320-15AST",
					  "Ноутбук APPLE MacBook Air 11.6\"",
					  "Ноутбук LENOVO Legion Y520-15IKBN",
					  "Ноутбук MSI GV72 7RD-1401RU",
					  "Ноутбук ASUS X542UQ-DM282T",
					  "Ноутбук LENOVO 320-15AST",
					  "Ноутбук HP Omen 15-ce009ur",
					  "Ноутбук IRBIS NB31 White",
					  "Ноутбук ACER E5-573G-34KJ",
					  "Ноутбук MSI GP72M 7REX-1012RU Leopard Pro",
					  "Ноутбук ASUS GX501VI-GZ025T"
					];
					
	var shortDescriptions = [ "AMD A9-9420 3GHz/15.6\"/1366х768/8Gb/500Gb/AMD Radeon 520/DVD нет/Wi-Fi/Bluetooth/Win 10 Home",
							  "AMD E2-9000 1800Mhz/15.6\"/1366x768/4Gb/500Gb/AMD Radeon R2/Wi-Fi/Bluetooth/Win10",
							  "Intel Core i5-5250U 1.6GHz/11.6\"/1366х768/4Gb/128Gb SSD/Intel HD Graphics 6000/DVD нет/Wi-Fi/Bluetooth/MacOS",
							  "Intel Core i5-7300HQ 2.5GHz/15.6\"/1920x1080/6Gb/1Tb+128Gb SSD/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Win 10",
							  "Intel Core I7-7700HQ 2800Mhz/17.3\"/1920x1080/16Gb/1Tb/nVidia GeForce GTX 1050/Wi-Fi/Bluetooth/Win10",
							  "Intel Core i3-7100U 2.4GHz/15.6\"/1920x1080/6Gb/1Tb/NVIDIA GeForce 940MX/DVD нет/Wi-Fi/Bluetooth/Win 10",
							  "AMD A4-9120 2200Mhz/15.6\"/1920x1080/4Gb/500Gb/DVD нет/AMD Radeon HD R3/Wi-Fi/Bluetooth/Win10",
							  "Intel Core i7-7700HQ 2.8GHz/15.6\"/1920х1080/8Gb/1Tb/NVIDIA GeForce GTX 1050/DVD нет/Wi-Fi/Bluetooth/Win 10",
							  "Intel Atom Z3735F 1.33GHz/11.6\"/1366х768/2Gb/32Gb SSD/Intel HD Graphics/DVD нет/Wi-Fi/Bluetooth/Win 10",
							  "Intel Core i3 4005U 1700 MHz/15.6\"/1366x768/4Gb/500Gb/DVD±RW/nVidia GeForce 920M/Wi-Fi/Bluetooth/Win8",
							  "Intel Core i7-7700HQ 2.8Ghz/17.3\"/1920x1080/8GB/1TB+128GB/NVIDIA GeForce GTX1050Ti/Отсутствует/Wi-Fi/Bluetooth/Win 10 Home 64",
							  "Intel Core i7 7700HQ 2800Mhz/15.6\"/1920х1080/24GB/1TB/nVidia GeForce GTX 1080/Wi-Fi/Bluetooth/Win10"
							];
							
	var longDescriptions =  [ /*1*/"<strong>Основные характеристики</strong></br>" +
						      "Операционная система: Windows 10 Домашняя x64</br>" +
						      "<strong>Экран</strong></br>" +
						      "Разрешение: 1366x768 Пикс</br>" +
						      "Диагональ: 15.6\"</br>" +
						      "<strong>Процессор</strong></br>" +
							  "Тактовая частота: 3 ГГц</br>" +
							  "Модель процессора: A9-9420</br>" +
							  "Производитель процессора: AMD</br>" +
							  "<strong>Оперативная память</strong></br>" +
							  "Тип оперативной памяти: DDR4</br>" +
							  "Объем оперативной памяти: 8 Гб</br>" +
							  "<strong>Накопитель</strong></br>" +
							  "Тип накопителя: HDD</br>" +
							  "Объем накопителя: 500 Гб</br>" +
							  "<strong>Графическая система</strong></br>" +
							  "Объем видеопамяти: 2 Гб</br>" +
							  "Модель видеокарты: Radeon 520</br>" +
							  "Производитель видеокарты: AMD</br>" +
							  "Цвет: Черный", 
							  /*2*/"<strong>Основные характеристики</strong></br>" +
							  "Операционная система: Windows 10 Домашняя</br>" +
							  "<strong>Экран</strong></br>" +
						      "Разрешение: 1366x768 Пикс</br>" +
						      "Диагональ: 15.6\"</br>" +
						      "<strong>Процессор</strong></br>" +
						      "Тактовая частота: 1.8 ГГц</br>" +
						      "Модель процессора: E2-9000</br>" +
						      "Производитель процессора: AMD</br>" +
						      "<strong>Оперативная память</strong></br>" +
						      "Тип оперативной памяти: DDR4</br>" +
						      "Объем оперативной памяти: 4 Гб</br>" +
						      "<strong>Накопитель</strong></br>" +
						      "Тип накопителя: HDD</br>" +
						      "Объем накопителя: 500 Гб</br>" +
						      "<strong>Графическая система</strong></br>" +
						      "Модель видеокарты: Radeon R2</br>" +
						      "Производитель видеокарты: AMD</br>" +
						      "Цвет: Черный",
							  /*3*/"<strong>Основные характеристики</strong></br>" +
							  "Операционная система: MacOS 10.10 Yosemite</br>" +
							  "<strong>Экран</strong></br>" +
							  "Разрешение: 1366x768 Пикс</br>" +
							  "Диагональ: 11.6\"</br>" +
							  "<strong>Процессор</strong></br>" +
							  "Тактовая частота: 1.6 ГГц</br>" +
							  "Модель процессора: Core i5-5250U</br>" +
							  "Производитель процессора: Intel</br>" +
							  "<strong>Оперативная память</strong></br>" +
							  "Тип оперативной памяти: DDR3</br>" +
							  "Объем оперативной памяти: 4 Гб</br>" +
							  "<strong>Накопитель</strong></br>" +
							  "Тип накопителя: SSD</br>" +
							  "Объем накопителя: 128 Гб</br>" +
							  "<strong>Графическая система</strong></br>" +
							  "Модель видеокарты: Intel HD 6000</br>" +
							  "Производитель видеокарты: Intel</br>" +
							  "Цвет: Серебристый",
							  /*4*/"<strong>Основные характеристики</strong></br>" +
							  "Игровой ноутбук: есть</br>" +
							  "Операционная система: Windows 10</br>" +
							  "<strong>Экран</strong></br>" +
							  "Разрешение: 1920x1080 Пикс</br>" +
							  "Диагональ: 15.6\"</br>" +
							  "<strong>Процессор</strong></br>" +
							  "Тактовая частота: 2.5 ГГц</br>" +
							  "Модель процессора: Core i5-7300HQ</br>" +
							  "Производитель процессора: Intel</br>" +
							  "<strong>Оперативная память</strong></br>" +
							  "Тип оперативной памяти: DDR4</br>" +
							  "Объем оперативной памяти: 6 Гб</br>" +
							  "<strong>Накопитель</strong></br>" +
							  "Тип накопителя: HDD+SSD</br>" +
							  "Объем накопителя: 1 Тб + 128 Гб</br>" +
							  "<strong>Графическая система</strong></br>" +
							  "Объем видеопамяти: 2 Гб" +
							  "Модель видеокарты: Geforce GTX 1050</br>" +
							  "Производитель видеокарты: nVidia</br>" +
							  "Цвет: Черный",
							  /*5*/"<strong>Основные характеристики</strong></br>" +
							  "Операционная система: Windows 10</br>" +
							  "<strong>Экран</strong></br>" +
							  "Разрешение: 1920x1080 Пикс</br>" +
							  "Диагональ: 17.3\"</br>" +
							  "<strong>Процессор</strong></br>" +
							  "Тактовая частота: 2.8 ГГц</br>" +
							  "Модель процессора: Core i7-7700HQ</br>" +
							  "Производитель процессора: Intel</br>" +
							  "<strong>Оперативная память</strong></br>" +
							  "Тип оперативной памяти: DDR4</br>" +
							  "Объем оперативной памяти: 16 Гб</br>" +
							  "<strong>Накопитель</strong></br>" +
							  "Тип накопителя: HDD</br>" +
							  "Объем накопителя: 1 Тб</br>" +
							  "<strong>Графическая система</strong></br>" +
							  "Объем видеопамяти: 4 Гб" +
							  "Модель видеокарты: Geforce GTX 1050</br>" +
							  "Производитель видеокарты: nVidia</br>" +
							  "Цвет: Черный",
							  /*6*/"<strong>Основные характеристики</strong></br>" +
							  "Операционная система: Windows 10</br>" +
							  "<strong>Экран</strong></br>" +
							  "Разрешение: 1920x1080 Пикс</br>" +
							  "Диагональ: 15.6\"</br>" +
							  "<strong>Процессор</strong></br>" +
							  "Тактовая частота: 2.4 ГГц</br>" +
							  "Модель процессора: Core i3-7100U</br>" +
							  "Производитель процессора: Intel</br>" +
							  "<strong>Оперативная память</strong></br>" +
							  "Тип оперативной памяти: DDR4</br>" +
							  "Объем оперативной памяти: 6 Гб</br>" +
							  "<strong>Накопитель</strong></br>" +
							  "Тип накопителя: HDD</br>" +
							  "Объем накопителя: 1 Тб</br>" +
							  "<strong>Графическая система</strong></br>" +
							  "Объем видеопамяти: 2 Гб" +
							  "Модель видеокарты: Geforce GTX 940MX</br>" +
							  "Производитель видеокарты: nVidia</br>" +
							  "Цвет: Серый",
							  /*7*/"<strong>Основные характеристики</strong></br>" +
							  "Операционная система: Windows 10</br>" +
							  "<strong>Экран</strong></br>" +
							  "Разрешение: 1920x1080 Пикс</br>" +
							  "Диагональ: 15.6\"</br>" +
							  "<strong>Процессор</strong></br>" +
							  "Тактовая частота: 2.2 ГГц</br>" +
							  "Модель процессора: A4-9120</br>" +
							  "Производитель процессора: AMD</br>" +
							  "<strong>Оперативная память</strong></br>" +
							  "Тип оперативной памяти: DDR4</br>" +
							  "Объем оперативной памяти: 4 Гб</br>" +
							  "<strong>Накопитель</strong></br>" +
							  "Тип накопителя: HDD</br>" +
							  "Объем накопителя: 500 Гб</br>" +
							  "<strong>Графическая система</strong></br>" +
							  "Объем видеопамяти: 2 Гб" +
							  "Модель видеокарты: R520M</br>" +
							  "Производитель видеокарты: AMD</br>" +
							  "Цвет: Серый",
							  /*8*/"<strong>Основные характеристики</strong></br>" +
							  "Игровой ноутбук: Есть</br>" +
							  "Операционная система: Windows 10</br>" +
							  "<strong>Экран</strong></br>" +
							  "Разрешение: 1920x1080 Пикс</br>" +
							  "Диагональ: 15.6\"</br>" +
							  "<strong>Процессор</strong></br>" +
							  "Тактовая частота: 2.8 ГГц</br>" +
							  "Модель процессора: Core i7-7700HQ</br>" +
							  "Производитель процессора: Intel</br>" +
							  "<strong>Оперативная память</strong></br>" +
							  "Тип оперативной памяти: DDR4</br>" +
							  "Объем оперативной памяти: 8 Гб</br>" +
							  "<strong>Накопитель</strong></br>" +
							  "Тип накопителя: HDD</br>" +
							  "Объем накопителя: 1 Тб</br>" +
							  "<strong>Графическая система</strong></br>" +
							  "Объем видеопамяти: 4 Гб</br>" +
							  "Модель видеокарты: GeForce GTX 1050</br>" +
							  "Производитель видеокарты: nVidia</br>" +
							  "Цвет: Черный",
							  /*9*/"<strong>Основные характеристики</strong></br>" +
							  "Операционная система: Windows 10</br>" +
							  "<strong>Экран</strong></br>" +
							  "Разрешение: 1366x768 Пикс</br>" +
							  "Диагональ: 11.6\"</br>" +
							  "Сенсорный: Есть</br>" +
							  "<strong>Процессор</strong></br>" +
							  "Тактовая частота: 1.33 ГГц</br>" +
							  "Модель процессора: Atom Z3735F</br>" +
							  "Производитель процессора: Intel</br>" +
							  "<strong>Оперативная память</strong></br>" +
							  "Тип оперативной памяти: DDR3</br>" +
							  "Объем оперативной памяти: 2 Гб</br>" +
							  "<strong>Накопитель</strong></br>" +
							  "Тип накопителя: SSD</br>" +
							  "Объем накопителя: 32 Гб</br>" +
							  "<strong>Графическая система</strong></br>" +
							  "Модель видеокарты: Intel HD Graphics</br>" +
							  "Производитель видеокарты: Intel</br>" +
							  "Цвет: Белый",
							  /*10*/"<strong>Основные характеристики</strong></br>" +
							  "Операционная система: Windows 8.1</br>" +
							  "<strong>Экран</strong></br>" +
							  "Разрешение: 1366x768 Пикс</br>" +
							  "Диагональ: 15.6\"</br>" +
							  "<strong>Процессор</strong></br>" +
							  "Тактовая частота: 1.7 ГГц</br>" +
							  "Модель процессора: Core i3-4005U</br>" +
							  "Производитель процессора: Intel</br>" +
							  "<strong>Оперативная память</strong></br>" +
							  "Тип оперативной памяти: DDR3L</br>" +
							  "Объем оперативной памяти: 4 Гб</br>" +
							  "<strong>Накопитель</strong></br>" +
							  "Тип накопителя: HHD</br>" +
							  "Объем накопителя: 500 Гб</br>" +
							  "<strong>Графическая система</strong></br>" +
							  "Объем видеопамяти: 2 Гб</br>" +
							  "Модель видеокарты: GeForce 920M</br>" +
							  "Производитель видеокарты: nVidia</br>" +
							  "Цвет: Черный",
							  /*11*/"<strong>Основные характеристики</strong></br>" +
							  "Игровой ноутбук: Есть</br>" +
							  "Операционная система: Windows 10</br>" +
							  "<strong>Экран</strong></br>" +
							  "Разрешение: 1920x1080 Пикс</br>" +
							  "Диагональ: 17.3\"</br>" +
							  "<strong>Процессор</strong></br>" +
							  "Тактовая частота: 2.8 ГГц</br>" +
							  "Модель процессора: Core i7-7700HQ</br>" +
							  "Производитель процессора: Intel</br>" +
							  "<strong>Оперативная память</strong></br>" +
							  "Тип оперативной памяти: DDR4</br>" +
							  "Объем оперативной памяти: 8 Гб</br>" +
							  "<strong>Накопитель</strong></br>" +
							  "Тип накопителя: HHD+SSD</br>" +
							  "Объем накопителя: 1 Тб</br>" +
							  "<strong>Графическая система</strong></br>" +
							  "Объем видеопамяти: 4 Гб</br>" +
							  "Модель видеокарты: GeForce GTX1050Ti</br>" +
							  "Производитель видеокарты: nVidia</br>" +
							  "Цвет: Черный",
							  /*12*/"<strong>Основные характеристики</strong></br>" +
							  "Игровой ноутбук: Есть</br>" +
							  "Операционная система: Windows 10</br>" +
							  "<strong>Экран</strong></br>" +
							  "Разрешение: 1920x1080 Пикс</br>" +
							  "Диагональ: 15.6\"</br>" +
							  "<strong>Процессор</strong></br>" +
							  "Тактовая частота: 2.8 ГГц</br>" +
							  "Модель процессора: Core i7-7700HQ</br>" +
							  "Производитель процессора: Intel</br>" +
							  "<strong>Оперативная память</strong></br>" +
							  "Тип оперативной памяти: DDR4</br>" +
							  "Объем оперативной памяти: 24 Гб</br>" +
							  "<strong>Накопитель</strong></br>" +
							  "Тип накопителя: SSD</br>" +
							  "Объем накопителя: 1 Тб</br>" +
							  "<strong>Графическая система</strong></br>" +
							  "Объем видеопамяти: 8 Гб</br>" +
							  "Модель видеокарты: GeForce GTX1080</br>" +
							  "Производитель видеокарты: nVidia</br>" +
							  "Цвет: Черный"
							];
							
	var prices = [ "28 990",
				   "16 990",
				   "49 990",
				   "56 999",
				   "78 990",
				   "36 990",
				   "23 990",
				   "74 990",
				   "9 890",
				   "41 990",
				   "90 990",
				   "229 990"
				 ];
	//-------------------------------
		
	//--------- Формирование списка товаров ----------
	$( ".mdl-grid" ).empty();
	for (var i = 0; i < notebooks.length; ++i){
		$( ".mdl-grid" ).append(
			"<div class=\"mdl-cell mdl-cell--3-col\">" +
				"<div class=\"demo-card-square mdl-card mdl-shadow--2dp\">" +
					"<div class=\"mdl-card__title mdl-card--expand\" style=\"background: url('images/" + (i+1) +".jpg') no-repeat;\">" +
						"<h2 class=\"mdl-card__title-text\">" + notebooks[i] + "</h2>" +
					"</div>" +
					"<div class=\"mdl-card__supporting-text\">" +
						shortDescriptions[i] +
					"</div>" +
					"<div class=\"mdl-card__actions mdl-card--border\">" +
						"<a id=\"a" + i + "\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect show-modal\">" +
							"Подробнее" +
						"</a>" +
						"<div class=\"mdl-textfield mdl-js-textfield narrow toRight\">" +
							"<input class=\"mdl-textfield__input\" type=\"text\" pattern=\"[0-9]*\" id=\"sample" + i + "\">" +
							"<label class=\"mdl-textfield__label\" for=\"sample" + i + "\">Кол-во товара</label>" +
							"<span class=\"mdl-textfield__error\">Неккоректный ввод!</span>" +
						"</div>" +
						"<button id=\"b" + i + "\" class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--colored btn\">" +
							"<i class=\"material-icons\">add_shopping_cart</i>" +
						"</button>" +								
					"</div>" +
				"</div>" +
			"</div>"
		);
	}
	//------------------------------------------------
		
	//------------Кнопки "Подробнее" --------------	
	$(".show-modal").click(function(){
		var id = $(this).attr('id');
		id = id.replace(/\D/g,'');
		id = parseInt(id);

		$( ".mdl-dialog__content" ).empty();
		$( ".mdl-dialog__content" ).append( 
				"<div class=\"demo-card-wide mdl-card mdl-shadow--2dp\">" + 
					"<div class=\"mdl-card__title\" style=\"background: url('images/" + (id+1) + ".jpg') no-repeat;\">" + 
						"<h2 class=\"mdl-card__title-text title\">" + notebooks[id] + "</h2>" +
					"</div>" +
					"<div class=\"mdl-card__supporting-text text\">" + 
						longDescriptions[id] +
					"</div>" +
					"<div class=\"mdl-card__actions mdl-card--border\">" +
						"<strong>Цена: " + prices[id] + " руб.</strong>" +
					"</div>" +					
				"</div>");
		
		dialog.showModal();
	});	
	//---------------------------------------------
	
	//--------Кнопки "добавления в корзину" -------	
	$(".btn").click(function(){
		var id = $(this).attr('id');
		id = id.replace(/\D/g,'');

		var sample = "#sample" + id;		
		var str = $(sample).val();
		
		if ( str.match(/^\d+$/) != null){
			$(".mdl-badge").attr("data-badge", parseInt($(sample).val()) + parseInt($(".mdl-badge").attr("data-badge")));
		}
	});
	//---------------------------------------------
});

