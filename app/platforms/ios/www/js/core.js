
function DropCore(settings) {
	//private vars
	var pages = settings['pages'];
	
	//public vars
	this.strings = {};
	
	//load main_body
	function load_main_body(url){
		$('.loading_container').show();
		$('#main_body').load(url, function() {
			$('.loading_container').hide();
		});
	}
	
	//gen top bar
	function generate_header(page){
		var html = "";
		html += '<div class="topbar_title">'+ get_string(pages[page].lang) +'</div>';
		html += '<table class="topbar_table">';
			html += '<tr class="topbar_tr">';
				html += '<td class="topbar_td_left">';
					if ('buttonLeft' in pages[page]) {
						html += '<div class="topbar_td_left_div" onClick="'+ pages[page].buttonLeft.action +'">';
							if ('src' in pages[page].buttonLeft) {
								html += '<img class="topbar_img" src="'+ pages[page].buttonLeft.src +'" />';
							}
							else if ('lang' in pages[page].buttonLeft){
								html += '<div class="topbar_buttonLeft_text">'+ get_string(pages[page].buttonLeft.lang) +'</div>';
							}
						html += '</div>';
					}				
				html += '</td>';
				html += '<td class="topbar_td_right">';
					if ('buttonRight' in pages[page]) {
						html += '<div class="topbar_td_right_div" onClick="'+ pages[page].buttonRight.action +'">';
							if ('src' in pages[page].buttonRight) {
								html += '<img class="topbar_img" src="'+ pages[page].buttonRight.src +'" />';
							}
							else if ('lang' in pages[page].buttonRight){
								html += '<div class="topbar_buttonRight_text">'+ get_string(pages[page].buttonRight.lang) +'</div>';
							}
						html += '</div>';
					}
				html += '</td>';
			html += '</tr>';
		html += '</table>';
		
		$('.topbar_container').html(html);
	}
	
	//show new page
	this.show = function(page) {
		$('body').attr('class', 'page_'+ page);
		generate_header(page);
		load_main_body(pages[page].contentFile);
	}
	
	this.showInterface = function() {
		$('.loading_container').hide();
		$('.topbar_container').show();
		$('#main_body').show();
	}
	
	/*
	this.apiRequest = function(file, post, callback){
		//add to all requests the platform
		post.platform = window.device.platform;
		
		$('.loading_container').show();
		$.post("http://api2.waxy.eu/"+ file +"?appkey="+ settings['appkey'], post, function(data, textStatus) {
			if (textStatus == "success") {
				callback(data);
				$('.loading_container').hide();
			}
			else {
				//retry
				$.post("http://api2.waxy.eu/"+ file +"?appkey="+ settings['appkey'], post, function(data, textStatus) {
					if (textStatus == "success") {
						callback(data);
						$('.loading_container').hide();
					}
					else {
						$('.loading_container').hide();
						window.app.core.error('network_error');
					}
				}, "json");
			}
		}, "json");
	}
	*/
	this.error = function(lang){
		alert(get_string(lang));
	}
	
	this.updtLang = function(lang) {
		if ((lang in settings.languages) && (settings.languages[lang] in window)) {
			this.strings = window[ settings.languages[lang] ];
		}
		else {
			this.strings = {};
		}
	}
	
	/***** INIT ******/
	this.init = function() {
		//set default lang
		/*var lang = (navigator.language.split("-"))[0];
		if (lang in settings.languages) {
			window.app.core.updtLang(lang);
		}
		else {*/
			window.app.core.updtLang('en');
		//}
		
		//fastclick
		$(function() {
			FastClick.attach(document.body);
		});
	}
}


function get_string(key) {
	if (!(key in window.app.core.strings)) return '[['+ key +']]';
	return window.app.core.strings[key];
}

function print_string(selector, key) {
	$(selector).html(get_string(key));
}


