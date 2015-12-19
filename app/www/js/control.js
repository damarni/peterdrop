
function peterDrop(){
	
	//init app
	this.init = function(){		
		this.core.init();
		this.core.show('select_images');
		this.core.showInterface();	
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
