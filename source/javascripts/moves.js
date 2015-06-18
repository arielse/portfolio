$(function move () {
	$('#menutoggle').click(function() {
		$('#navmob').toggleClass('hidden');
	})
});

$(function folio() {
	$('.folioLarge').click(function() {
		$('#info').toggleClass('hidden')
	})
});

$(function away() {
	$('.hidden').click(function() {
		$('#info').toggleClass('hidden')
	})
});