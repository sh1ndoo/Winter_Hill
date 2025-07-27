function addJarSpots(map) {
    map.addInteractiveLayer('jar_spots', jar_spots, {
        name: 'Jar spots',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<img class="sidebar-image" src="images/icons/marker_5.svg" />',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon(undefined, "5"),
                riseOnHover: true
            });
        }
    });
}
