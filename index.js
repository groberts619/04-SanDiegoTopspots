$(document).ready(function() {
	$.getJSON('topspots.json', function(topspots) {
		$.each(topspots, function(index, topspot) {
			$("#topSpotsTable tbody").append('<tr><td>' + topspot.name + '</td><td>' + topspot.description + '</td><td><a class="btn btn-primary" href="http://maps.google.com/maps?q=' + topspot.location + '">Click here to open in Google Maps</a></td></tr>');
		});
	});
}); 