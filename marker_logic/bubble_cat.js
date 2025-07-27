function addBubbleCat(map) {
    map.addInteractiveLayer('bubble_cat', bubble_cat, {
        name: 'Bubble cat',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<img class="sidebar-image" src="images/icons/marker_3.svg" />',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon(undefined, "3"),
                riseOnHover: true
            });
        }
    });
}
