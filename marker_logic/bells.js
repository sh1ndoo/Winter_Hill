function addBells(map) {
    map.addInteractiveLayer('bells', bells, {
        name: 'Bells',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<img class="sidebar-image" src="images/icons/marker_7.svg" />',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon(undefined, "7"),
                riseOnHover: true
            });
        }
    });
}
