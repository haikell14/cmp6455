var wms_layers = [];

var format_SLCo_County_Boundary_0 = new ol.format.GeoJSON();
var features_SLCo_County_Boundary_0 = format_SLCo_County_Boundary_0.readFeatures(json_SLCo_County_Boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_County_Boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_County_Boundary_0.addFeatures(features_SLCo_County_Boundary_0);
var lyr_SLCo_County_Boundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLCo_County_Boundary_0, 
                style: style_SLCo_County_Boundary_0,
                popuplayertitle: 'SLCo_County_Boundary',
                interactive: true,
                title: '<img src="styles/legend/SLCo_County_Boundary_0.png" /> SLCo_County_Boundary'
            });
var format_SLCo_Healthcare_Tract_Joined_1 = new ol.format.GeoJSON();
var features_SLCo_Healthcare_Tract_Joined_1 = format_SLCo_Healthcare_Tract_Joined_1.readFeatures(json_SLCo_Healthcare_Tract_Joined_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_Healthcare_Tract_Joined_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_Healthcare_Tract_Joined_1.addFeatures(features_SLCo_Healthcare_Tract_Joined_1);
var lyr_SLCo_Healthcare_Tract_Joined_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLCo_Healthcare_Tract_Joined_1, 
                style: style_SLCo_Healthcare_Tract_Joined_1,
                popuplayertitle: 'SLCo_Healthcare_Tract_Joined',
                interactive: false,
    title: 'SLCo_Healthcare_Tract_Joined<br />' });
var format_SLCo_Healthcare_Facilities_2 = new ol.format.GeoJSON();
var features_SLCo_Healthcare_Facilities_2 = format_SLCo_Healthcare_Facilities_2.readFeatures(json_SLCo_Healthcare_Facilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_Healthcare_Facilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_Healthcare_Facilities_2.addFeatures(features_SLCo_Healthcare_Facilities_2);
var lyr_SLCo_Healthcare_Facilities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLCo_Healthcare_Facilities_2, 
                style: style_SLCo_Healthcare_Facilities_2,
                popuplayertitle: 'SLCo_Healthcare_Facilities',
                interactive: true,
                title: '<img src="styles/legend/SLCo_Healthcare_Facilities_2.png" /> SLCo_Healthcare_Facilities'
            });

lyr_SLCo_County_Boundary_0.setVisible(true);lyr_SLCo_Healthcare_Tract_Joined_1.setVisible(true);lyr_SLCo_Healthcare_Facilities_2.setVisible(true);
var layersList = [lyr_SLCo_County_Boundary_0,lyr_SLCo_Healthcare_Tract_Joined_1,lyr_SLCo_Healthcare_Facilities_2];
lyr_SLCo_County_Boundary_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTYNBR': 'COUNTYNBR', 'ENTITYNBR': 'ENTITYNBR', 'ENTITYYR': 'ENTITYYR', 'NAME': 'NAME', 'FIPS': 'FIPS', 'STATEPLANE': 'STATEPLANE', 'POP_LASTCE': 'POP_LASTCE', 'POP_CURRES': 'POP_CURRES', 'GlobalID': 'GlobalID', 'FIPS_STR': 'FIPS_STR', 'COLOR4': 'COLOR4', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SLCo_Healthcare_Tract_Joined_1.set('fieldAliases', {'objectid': 'objectid', 'geoid10': 'geoid10', 'total_coun': 'total_coun', 'total': 'total', });
lyr_SLCo_Healthcare_Facilities_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FACTYPE': 'FACTYPE', 'FACILITY_I': 'FACILITY_I', 'FACID': 'FACID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'ZIP': 'ZIP', 'TELEPHONE': 'TELEPHONE', 'TYPE': 'TYPE', 'COUNTY': 'COUNTY', 'TELEHEALTH': 'TELEHEALTH', 'FUNCTIONAL': 'FUNCTIONAL', });
lyr_SLCo_County_Boundary_0.set('fieldImages', {'OBJECTID': '', 'COUNTYNBR': '', 'ENTITYNBR': '', 'ENTITYYR': '', 'NAME': '', 'FIPS': '', 'STATEPLANE': '', 'POP_LASTCE': '', 'POP_CURRES': '', 'GlobalID': '', 'FIPS_STR': '', 'COLOR4': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SLCo_Healthcare_Tract_Joined_1.set('fieldImages', {'objectid': 'TextEdit', 'geoid10': 'TextEdit', 'total_coun': 'TextEdit', 'total': 'TextEdit', });
lyr_SLCo_Healthcare_Facilities_2.set('fieldImages', {'OBJECTID': '', 'FACTYPE': '', 'FACILITY_I': '', 'FACID': '', 'NAME': '', 'ADDRESS': '', 'CITY': '', 'ZIP': '', 'TELEPHONE': '', 'TYPE': '', 'COUNTY': '', 'TELEHEALTH': '', 'FUNCTIONAL': '', });
lyr_SLCo_County_Boundary_0.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTYNBR': 'no label', 'ENTITYNBR': 'no label', 'ENTITYYR': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'STATEPLANE': 'no label', 'POP_LASTCE': 'no label', 'POP_CURRES': 'no label', 'GlobalID': 'no label', 'FIPS_STR': 'no label', 'COLOR4': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SLCo_Healthcare_Tract_Joined_1.set('fieldLabels', {'objectid': 'no label', 'geoid10': 'no label', 'total_coun': 'no label', 'total': 'no label', });
lyr_SLCo_Healthcare_Facilities_2.set('fieldLabels', {'OBJECTID': 'no label', 'FACTYPE': 'no label', 'FACILITY_I': 'no label', 'FACID': 'no label', 'NAME': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'ZIP': 'no label', 'TELEPHONE': 'no label', 'TYPE': 'no label', 'COUNTY': 'no label', 'TELEHEALTH': 'no label', 'FUNCTIONAL': 'no label', });
lyr_SLCo_Healthcare_Facilities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});