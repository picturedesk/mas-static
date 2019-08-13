import $ from "jquery";
import 'bootstrap';
import './assets/styles/main.scss';

console.log('app.js loaded');

$(document).ready(() => {
	// Srolling show small Logo
	$(window).scroll(function() {
		var logoPos = ($(".key-visual .logo img").height)();
		var scroll = $(window).scrollTop();
		if (scroll >= logoPos) {
			$(".navbar").addClass("show-logo");
		} else {
			$(".navbar").removeClass("show-logo");
		}
	});

	// Submenus
	$('li.dropdown-submenu [data-toggle=dropdown]').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).parent().siblings().removeClass('open');
		$(this).parent().toggleClass('open');
	});
	// Close if clicking outside
	$("body").mouseup(function(e){
		if (!e.target.classList.contains("dropdown-item")) {
			$(".dropdown-submenu.open").removeClass("open");
		}
	});
});
