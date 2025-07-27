function addMist(map) {
    map.addInteractiveLayer('mist', mist, {
        name: 'Mist Invasion',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<img class="sidebar-image" src="images/icons/marker_6.svg" />',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon(undefined, "6"),
                riseOnHover: true
            });
        }
    });
}
