function addCatSpots(map) {
    map.addInteractiveLayer('cat_spots', cat_spots, {
        name: 'Cat spots',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<img class="sidebar-image" src="images/icons/marker_1.svg" />',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon(undefined, "1"),
                riseOnHover: true
            });
        }
    });
}
