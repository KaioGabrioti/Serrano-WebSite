function initialize() {
	const myLatlng = { lat: -23.887958, lng: -46.426579 };
	const map = new google.maps.Map(document.getElementById("map-canvas"), {
		zoom: 18,
		center: myLatlng,
	});
	const marker = new google.maps.Marker({
		position: myLatlng,
		map,
		title: "Click to zoom",
	});

	map.addListener("center_changed", () => {
		// 3 seconds after the center of the map has changed, pan back to the
		// marker.
		window.setTimeout(() => {
		map.panTo(marker.getPosition());
		}, 3000);
	});
	marker.addListener("click", () => {
		map.setZoom(8);
		map.setCenter(marker.getPosition());
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
