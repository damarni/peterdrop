
function peterDrop(){
	//init app
	this.init = function(){		
		this.core.init();
		this.core.show('select_images');
		this.core.showInterface();	
	}
	
	//pupup add images
	this.select_images_add = function() {
		window.imagePicker.getPictures(function(results) {
			$('.selected_images .image').remove();
			for (var i = 0; i < results.length; i++) {
				$('.selected_images').prepend('<img class="image" src="'+results[i]+'" />'); 
			}
		}, function (error) {
			console.log('Error: ' + error);
		}, {
			maximumImagesCount: 40,
			height: 100
		});
	}
	
	var checkStatusNetwork = function() {
		console.log('CKECKK');
		//check connection
		for (var i = 2; i <= 254; i++) {
			$.ajax({
				url: "192.168.3." + i + ":1150",
				error: function(){
					// will fire when timeout is reached
				},
				success: function(){
					console.log("192.168.3." + i);
					//do something
					//$('.computers_table').append('<tr class="computers_tr"><td class="computers_img"><img class="computer_img" src="./img/icon-laptop.png" /></td><td class="computers_name">'+ data +'</td></tr>');
					
				},
				timeout: 500 // sets timeout to 0.5 seconds
			});
		}
		
		//in 4 seconds reCheck
		setTimeout(function(){
			checkStatusNetwork();
		}, 4000);
	}
	
	//render select_images
	this.render_select_images = function() {
		//init empty
		$('.selected_images .image').remove();
		
		checkStatusNetwork();
		/*
		imac
		other  
		*/
	}
	
	//core class --> control interficie and langs
	this.core = new DropCore({
		pages: {
			select_images: {
				lang: "select_images",
				contentFile: "pages/select_images.html",
				buttonRight: {src: "img/info.png", action: "window.app.core.show('info');"}
			},
			info: {
				lang: "info",
				contentFile: "pages/info.html",
				buttonLeft: {src: "img/back.png", action: "window.app.core.show('select_images');"}
			}
		},
		languages: {
			en: 'strings_en'
		}
	});
}
