function addNpc(map) {
    map.addInteractiveLayer('npc', npc, {
        name: 'Npc',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<img class="sidebar-image" src="images/icons/marker_4.svg" />',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon(undefined, "4"),
                riseOnHover: true
            });
        }
    });
}
