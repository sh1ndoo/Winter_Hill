function addCameraSpots(map) {
    map.addInteractiveLayer('camera_spots', camera_spots, {
        name: 'Camera spots',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<img class="sidebar-image" src="images/icons/marker_2.svg" />',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon(undefined, "2"),
                riseOnHover: true
            });
        }
    });
}
