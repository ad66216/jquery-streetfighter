$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		// alert('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
	})
	.mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});
});
