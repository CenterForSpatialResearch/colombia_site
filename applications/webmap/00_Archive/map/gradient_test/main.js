var data = {
    "type": "FeatureCollection",
        "features": [{
        "geometry": {
            "type": "Polygon",
                "coordinates": [
                [
                    [
                    29.5,
                    65.5],
                    [
                    30.0,
                    65.5],
                    [
                    30.0,
                    65.0],
                    [
                    29.5,
                    65.0],
                    [
                    29.5,
                    65.5]
                ]
            ]
        },
            "type": "Feature",
            "properties": {
            "gradient_stops": ["rgb(255, 22, 0)", "rgb(255, 20, 0)"]
        }
    }, {
        "geometry": {
            "type": "Polygon",
                "coordinates": [
                [
                    [
                    30.5,
                    65.0],
                    [
                    31.0,
                    65.0],
                    [
                    31.0,
                    64.5],
                    [
                    30.5,
                    64.5],
                    [
                    30.5,
                    65.0]
                ]
            ]
        },
            "type": "Feature",
            "properties": {
            "gradient_stops": ["rgb(255, 27, 0)", "rgb(255, 25, 0)"]
        }
    }]
};

var stops2gradient = function (stops) {
    return {
        vector: [
            ['0%', '50%'],
            ['100%', '50%']
        ],
        stops: [{
            'offset': '0%',
                'style': {
                'color': stops[0],
                    'opacity': 1
            }
        }, {
            'offset': '100%',
                'style': {
                'color': stops[1],
                    'opacity': 1
            }
        }]
    }
};

osmLayer = new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetMap, ©CartoDB',
    minZoom: 3,
    maxZoom: 20,
    detectRetina: true
});

var map = new L.Map('map', {});
map.addLayer(osmLayer);

// what is the right way to set up a datalayer to draw geo-json features?
var dataLayer = new L.DataLayer(data, {
    recordsField: 'features',
    locationMode: L.LocationModes.GEOJSON,
    layerOptions: {
        color: "#000000",
        fillOpacity: 0.7,
        opacity: 1,
        weight: 1,
        gradient: true
    },
    displayOptions: {
        gradient_stops: stops2gradient
    }
});
map.addLayer(dataLayer);

map.setView(new L.LatLng(55.75, 37.617), 5);