var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Melbourne_City_LST_1 = new ol.format.GeoJSON();
var features_Melbourne_City_LST_1 = format_Melbourne_City_LST_1.readFeatures(json_Melbourne_City_LST_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Melbourne_City_LST_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Melbourne_City_LST_1.addFeatures(features_Melbourne_City_LST_1);
var lyr_Melbourne_City_LST_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Melbourne_City_LST_1, 
                style: style_Melbourne_City_LST_1,
                popuplayertitle: 'Melbourne_City_LST',
                interactive: true,
    title: 'Melbourne_City_LST<br />\
    <img src="styles/legend/Melbourne_City_LST_1_0.png" /> 17.7 - 19.3<br />\
    <img src="styles/legend/Melbourne_City_LST_1_1.png" /> 19.3 - 21.5<br />\
    <img src="styles/legend/Melbourne_City_LST_1_2.png" /> 21.5 - 23.3<br />\
    <img src="styles/legend/Melbourne_City_LST_1_3.png" /> 23.3 - 26<br />\
    <img src="styles/legend/Melbourne_City_LST_1_4.png" /> 26 - 27.2<br />' });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_Melbourne_City_LST_1.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_Melbourne_City_LST_1];
lyr_Melbourne_City_LST_1.set('fieldAliases', {'SA1_CODE21': 'SA1_CODE21', 'CHG_LBL21': 'CHG_LBL21', 'SA2_CODE21': 'SA2_CODE21', 'SA2_NAME21': 'SA2_NAME21', 'SA3_CODE21': 'SA3_CODE21', 'SA3_NAME21': 'SA3_NAME21', 'SA4_CODE21': 'SA4_CODE21', 'SA4_NAME21': 'SA4_NAME21', 'GCC_CODE21': 'GCC_CODE21', 'GCC_NAME21': 'GCC_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AREASQKM21': 'AREASQKM21', 'Landsat8_9': 'Landsat8_9', });
lyr_Melbourne_City_LST_1.set('fieldImages', {'SA1_CODE21': 'TextEdit', 'CHG_LBL21': 'TextEdit', 'SA2_CODE21': 'TextEdit', 'SA2_NAME21': 'TextEdit', 'SA3_CODE21': 'TextEdit', 'SA3_NAME21': 'TextEdit', 'SA4_CODE21': 'TextEdit', 'SA4_NAME21': 'TextEdit', 'GCC_CODE21': 'TextEdit', 'GCC_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'Landsat8_9': 'TextEdit', });
lyr_Melbourne_City_LST_1.set('fieldLabels', {'SA1_CODE21': 'no label', 'CHG_LBL21': 'no label', 'SA2_CODE21': 'no label', 'SA2_NAME21': 'inline label - visible with data', 'SA3_CODE21': 'no label', 'SA3_NAME21': 'no label', 'SA4_CODE21': 'no label', 'SA4_NAME21': 'no label', 'GCC_CODE21': 'no label', 'GCC_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AREASQKM21': 'no label', 'Landsat8_9': 'no label', });
lyr_Melbourne_City_LST_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});