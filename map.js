// Step 0:
// Add all feature geoJSON and layer logic to the `index.html`
// In this example this is:
// * `marker/collectibles.js`
// * `marker/information.js`
// * `marker_logic/collectibles.js`
// * `marker_logic/information.js`

// Step 1:
// Initialize the map with basic information
var interactive_map = new InteractiveMap('map', {
    // This will limit automatic zooming to this zoom level
    max_good_zoom: 4,
    // This is the max zoom the map will allow
    max_map_zoom: 5,
    website_source: 'https://github.com/sh1ndoo/Winter_Hill',
    website_subdir: 'Winter_Hill',
    attribution: `
    <li>This project uses sample images from <a href="https://picsum.photos/">picsum.photos</a></li>
`
});

// Step 2:
// Add at least one tile layer
//
// generate them from an image with (don't forget do adjust the zoom levels `-z`):
// https://github.com/commenthol/gdal2tiles-leaflet
// `./gdal2tiles.py -l -p raster -w none -z 3-5 full_map.jpg map_tiles`
interactive_map.addTileLayer('Ingame map', {
    minNativeZoom: 2,
    maxNativeZoom: 4,
    attribution: 'Map of Tree of Savior'
});

// Step 2.5 (optional):
// Add more tile layer
// interactive_map.addTileLayer('Overview', {
//     minNativeZoom: 2,
//     maxNativeZoom: 4,
//     attribution: 'Map from <a href="https://www.example.com/index.html">$source</a>'
// }, 'overview_tiles/{z}/{x}/{y}.png');

// Step 3:
// Add at least one marker layer
// The order matters - they will appear in this order in the sidebar and layer control
// See `marker_logic/collectibles.js` for a really basic layer
addCatSpots(interactive_map);
addJarSpots(interactive_map);
addBubbleCat(interactive_map);
addCameraSpots(interactive_map);
addNpc(interactive_map);


// Step 4:
// Finalize the map after adding all layers.
interactive_map.finalize();

// Step 5:
// Open `index.html` to view the map.
// You can now add additional layers by clicking the edit button in the lower left
// While editing a layer you can export the geoJSON in the toolbar on the right when you're done
// and add them here to step 3 to display them fixed for all users.
