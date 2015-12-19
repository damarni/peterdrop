
function peterDrop(){
	
	//init app
	this.init = function(){		
		this.core.init();
		this.core.show('select_images');
		this.core.showInterface();	
	}
	
	this.render_select_images = function() {
		module.controller('ThisCtrl', function($scope, $cordovaImagePicker) {
			var options = {
				maximumImagesCount: 10,
				width: 800,
				height: 800,
				quality: 80
			};
			
			$cordovaImagePicker.getPictures(options).then(function (results) {
				var html = '';
				for (var i = 0; i < results.length; i++) {
					html += '<img src="'+ results[i] +'" /><br />';
				}
				$('#select_images_container').html(html);
			}, function(error) {
				// error getting photos
			});
		});
	}
	
	//core class --> control interficie and langs
	this.core = new DropCore({
		pages: {
			select_images: {
				lang: "select_images",
				contentFile: "pages/select_images.html",
				buttonRight: {src: "img/info.png", action: "window.app.core.show('info');"}
			},
			send_images: {
				lang: "send_images",
				contentFile: "pages/send_images.html",
				buttonLeft: {src: "img/back.png", action: "window.app.core.show('select_images');"}
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
