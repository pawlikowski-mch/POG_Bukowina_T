var wms_layers = [];


    var projection_Ortofotomapastandardowa_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Ortofotomapastandardowa_0 = projection_Ortofotomapastandardowa_0.getExtent();
    var size_Ortofotomapastandardowa_0 = ol.extent.getWidth(projectionExtent_Ortofotomapastandardowa_0) / 256;
    var resolutions_Ortofotomapastandardowa_0 = new Array(14);
    var matrixIds_Ortofotomapastandardowa_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Ortofotomapastandardowa_0[z] = size_Ortofotomapastandardowa_0 / Math.pow(2, z);
        matrixIds_Ortofotomapastandardowa_0[z] = z;
    }
    var lyr_Ortofotomapastandardowa_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMTS/StandardResolution?service=WMTS&request=getCapabilities",
                                attributions: ' ',
                                "layer": "ORTOFOTOMAPA",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Ortofotomapastandardowa_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Ortofotomapastandardowa_0),
                resolutions: resolutions_Ortofotomapastandardowa_0,
                matrixIds: matrixIds_Ortofotomapastandardowa_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortofotomapa standardowa',
                            opacity: 1.0,
                            
                            
                          });
var lyr_raster_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://rastry.gison.pl/cgi-bin/mapserv?map%3D/home/vboxuser/mpzp/bukowinatatrzanska_niewyciete/Z01_2022_352_XLII_studium_uwarunkowania_nowy.map",
                              attributions: ' ',
                              params: {
                                "LAYERS": "raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'raster',
                            popuplayertitle: 'raster',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_raster_1, 0]);
var format_WNIOSKI_2 = new ol.format.GeoJSON();
var features_WNIOSKI_2 = format_WNIOSKI_2.readFeatures(json_WNIOSKI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WNIOSKI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WNIOSKI_2.addFeatures(features_WNIOSKI_2);
var lyr_WNIOSKI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WNIOSKI_2, 
                style: style_WNIOSKI_2,
                popuplayertitle: 'WNIOSKI',
                interactive: true,
    title: 'WNIOSKI<br />\
    <img src="styles/legend/WNIOSKI_2_0.png" /> ?<br />\
    <img src="styles/legend/WNIOSKI_2_1.png" /> NIESPRECYZOWANE<br />\
    <img src="styles/legend/WNIOSKI_2_2.png" /> NIESPRECYZOWANO<br />\
    <img src="styles/legend/WNIOSKI_2_3.png" /> POZOSTAŁE<br />\
    <img src="styles/legend/WNIOSKI_2_4.png" /> SC<br />\
    <img src="styles/legend/WNIOSKI_2_5.png" /> SI<br />\
    <img src="styles/legend/WNIOSKI_2_6.png" /> SI/SP<br />\
    <img src="styles/legend/WNIOSKI_2_7.png" /> SJ<br />\
    <img src="styles/legend/WNIOSKI_2_8.png" /> SJ/obszar
 uzupełnienia
 zabudowy<br />\
    <img src="styles/legend/WNIOSKI_2_9.png" /> SJ/SN<br />\
    <img src="styles/legend/WNIOSKI_2_10.png" /> SJ/SN/SU<br />\
    <img src="styles/legend/WNIOSKI_2_11.png" /> SJ/SU<br />\
    <img src="styles/legend/WNIOSKI_2_12.png" /> SJ/SU/SN<br />\
    <img src="styles/legend/WNIOSKI_2_13.png" /> SJ/SU/SW<br />\
    <img src="styles/legend/WNIOSKI_2_14.png" /> SJ/SU/SZ<br />\
    <img src="styles/legend/WNIOSKI_2_15.png" /> SJ/SW<br />\
    <img src="styles/legend/WNIOSKI_2_16.png" /> SJ/SW/SU<br />\
    <img src="styles/legend/WNIOSKI_2_17.png" /> SJ/SW/SZ<br />\
    <img src="styles/legend/WNIOSKI_2_18.png" /> SJ/SZ<br />\
    <img src="styles/legend/WNIOSKI_2_19.png" /> SJ/SZ/SN<br />\
    <img src="styles/legend/WNIOSKI_2_20.png" /> SJ/SZ/SN/SU<br />\
    <img src="styles/legend/WNIOSKI_2_21.png" /> SJ/SZ/SU<br />\
    <img src="styles/legend/WNIOSKI_2_22.png" /> SJ/SZ/SW<br />\
    <img src="styles/legend/WNIOSKI_2_23.png" /> SN<br />\
    <img src="styles/legend/WNIOSKI_2_24.png" /> SN/SJ/SZ<br />\
    <img src="styles/legend/WNIOSKI_2_25.png" /> SN/SU<br />\
    <img src="styles/legend/WNIOSKI_2_26.png" /> SN/SU/SJ<br />\
    <img src="styles/legend/WNIOSKI_2_27.png" /> SO<br />\
    <img src="styles/legend/WNIOSKI_2_28.png" /> SO-R<br />\
    <img src="styles/legend/WNIOSKI_2_29.png" /> SP<br />\
    <img src="styles/legend/WNIOSKI_2_30.png" /> SR<br />\
    <img src="styles/legend/WNIOSKI_2_31.png" /> SU<br />\
    <img src="styles/legend/WNIOSKI_2_32.png" /> SU/SH<br />\
    <img src="styles/legend/WNIOSKI_2_33.png" /> SU/SH/SI<br />\
    <img src="styles/legend/WNIOSKI_2_34.png" /> SU/SI<br />\
    <img src="styles/legend/WNIOSKI_2_35.png" /> SU/SJ<br />\
    <img src="styles/legend/WNIOSKI_2_36.png" /> SU/SJ/SW<br />\
    <img src="styles/legend/WNIOSKI_2_37.png" /> SU/SJ/SZ<br />\
    <img src="styles/legend/WNIOSKI_2_38.png" /> SU/SN<br />\
    <img src="styles/legend/WNIOSKI_2_39.png" /> SU/SP/SI<br />\
    <img src="styles/legend/WNIOSKI_2_40.png" /> SU/SW<br />\
    <img src="styles/legend/WNIOSKI_2_41.png" /> SU/SW/SJ<br />\
    <img src="styles/legend/WNIOSKI_2_42.png" /> SU/SZ<br />\
    <img src="styles/legend/WNIOSKI_2_43.png" /> SW<br />\
    <img src="styles/legend/WNIOSKI_2_44.png" /> SW/SJ<br />\
    <img src="styles/legend/WNIOSKI_2_45.png" /> SW/SJ/SZ<br />\
    <img src="styles/legend/WNIOSKI_2_46.png" /> SW/SJ/SZ/SU<br />\
    <img src="styles/legend/WNIOSKI_2_47.png" /> SW/SU<br />\
    <img src="styles/legend/WNIOSKI_2_48.png" /> SW/SU/SJ<br />\
    <img src="styles/legend/WNIOSKI_2_49.png" /> SW/SZ/SJ<br />\
    <img src="styles/legend/WNIOSKI_2_50.png" /> SZ<br />\
    <img src="styles/legend/WNIOSKI_2_51.png" /> SZ/SJ<br />\
    <img src="styles/legend/WNIOSKI_2_52.png" /> SZ/SJ/SN<br />\
    <img src="styles/legend/WNIOSKI_2_53.png" /> SZ/SJ/SU/SN<br />\
    <img src="styles/legend/WNIOSKI_2_54.png" /> SZ/SN<br />\
    <img src="styles/legend/WNIOSKI_2_55.png" /> SZ/SN/SJ<br />\
    <img src="styles/legend/WNIOSKI_2_56.png" /> SZ/SU<br />\
    <img src="styles/legend/WNIOSKI_2_57.png" /> SZ/SW<br />\
    <img src="styles/legend/WNIOSKI_2_58.png" /> zabudowa nawiązująca 
do zabudowy będącej 
w sąsiedztwie<br />\
    <img src="styles/legend/WNIOSKI_2_59.png" /> <br />' });
var format_OBRBY_3 = new ol.format.GeoJSON();
var features_OBRBY_3 = format_OBRBY_3.readFeatures(json_OBRBY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBRBY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBRBY_3.addFeatures(features_OBRBY_3);
var lyr_OBRBY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBRBY_3, 
                style: style_OBRBY_3,
                popuplayertitle: 'OBRĘBY',
                interactive: false,
                title: '<img src="styles/legend/OBRBY_3.png" /> OBRĘBY'
            });
var format_GRANICA_GMINY_4 = new ol.format.GeoJSON();
var features_GRANICA_GMINY_4 = format_GRANICA_GMINY_4.readFeatures(json_GRANICA_GMINY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRANICA_GMINY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRANICA_GMINY_4.addFeatures(features_GRANICA_GMINY_4);
var lyr_GRANICA_GMINY_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRANICA_GMINY_4, 
                style: style_GRANICA_GMINY_4,
                popuplayertitle: 'GRANICA_GMINY',
                interactive: false,
                title: '<img src="styles/legend/GRANICA_GMINY_4.png" /> GRANICA_GMINY'
            });

lyr_Ortofotomapastandardowa_0.setVisible(true);lyr_raster_1.setVisible(true);lyr_WNIOSKI_2.setVisible(true);lyr_OBRBY_3.setVisible(true);lyr_GRANICA_GMINY_4.setVisible(true);
var layersList = [lyr_Ortofotomapastandardowa_0,lyr_raster_1,lyr_WNIOSKI_2,lyr_OBRBY_3,lyr_GRANICA_GMINY_4];
lyr_WNIOSKI_2.set('fieldAliases', {'fid': 'fid', 'NUMER_DZIALKI': 'NUMER_DZIALKI', 'NAZWA_OBREBU': 'NAZWA_OBREBU', 'NR_WNIOSKU': 'NR_WNIOSKU', 'NAZWA_STREFY': 'NAZWA_STREFY', 'UWAGI': 'UWAGI', 'layer': 'layer', 'path': 'path', });
lyr_OBRBY_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIALKI': 'NUMER_DZIALKI', 'NAZWA_OBREBU': 'NAZWA_OBREBU', 'NUMER_OBREBU': 'NUMER_OBREBU', 'NUMER_JEDNOSTKI': 'NUMER_JEDNOSTKI', 'NAZWA_GMINY': 'NAZWA_GMINY', 'POLE_EWIDENCYJNE': 'POLE_EWIDENCYJNE', 'KLASOUZYTKI_EGIB': 'KLASOUZYTKI_EGIB', 'GRUPA_REJESTROWA': 'GRUPA_REJESTROWA', 'DATA': 'DATA', 'PO_TERMINIE_NR WNIOSKU': 'PO_TERMINIE_NR WNIOSKU', 'PO_TERMINIE_MIEJSCOWOŚĆ': 'PO_TERMINIE_MIEJSCOWOŚĆ', 'PO_TERMINIE_NUMER 
DZIAŁKI': 'PO_TERMINIE_NUMER 
DZIAŁKI', 'PO_TERMINIE_NAZWA 
STREFY': 'PO_TERMINIE_NAZWA 
STREFY', 'PO_TERMINIE_UWAGI + DATA 
ZŁOŻENIA WNIOSKU': 'PO_TERMINIE_UWAGI + DATA 
ZŁOŻENIA WNIOSKU', 'layer': 'layer', 'path': 'path', });
lyr_GRANICA_GMINY_4.set('fieldAliases', {'województ': 'województ', 'powiat': 'powiat', 'gmina': 'gmina', 'teryt': 'teryt', });
lyr_WNIOSKI_2.set('fieldImages', {'fid': 'TextEdit', 'NUMER_DZIALKI': 'TextEdit', 'NAZWA_OBREBU': 'TextEdit', 'NR_WNIOSKU': 'TextEdit', 'NAZWA_STREFY': 'TextEdit', 'UWAGI': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_OBRBY_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'ID_DZIALKI': 'TextEdit', 'NUMER_DZIALKI': 'TextEdit', 'NAZWA_OBREBU': 'TextEdit', 'NUMER_OBREBU': 'TextEdit', 'NUMER_JEDNOSTKI': 'TextEdit', 'NAZWA_GMINY': 'TextEdit', 'POLE_EWIDENCYJNE': 'TextEdit', 'KLASOUZYTKI_EGIB': 'TextEdit', 'GRUPA_REJESTROWA': 'TextEdit', 'DATA': 'TextEdit', 'PO_TERMINIE_NR WNIOSKU': 'TextEdit', 'PO_TERMINIE_MIEJSCOWOŚĆ': 'TextEdit', 'PO_TERMINIE_NUMER 
DZIAŁKI': 'TextEdit', 'PO_TERMINIE_NAZWA 
STREFY': 'TextEdit', 'PO_TERMINIE_UWAGI + DATA 
ZŁOŻENIA WNIOSKU': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_GRANICA_GMINY_4.set('fieldImages', {'województ': 'TextEdit', 'powiat': 'TextEdit', 'gmina': 'TextEdit', 'teryt': 'TextEdit', });
lyr_WNIOSKI_2.set('fieldLabels', {'fid': 'no label', 'NUMER_DZIALKI': 'no label', 'NAZWA_OBREBU': 'no label', 'NR_WNIOSKU': 'no label', 'NAZWA_STREFY': 'no label', 'UWAGI': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_OBRBY_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'ID_DZIALKI': 'no label', 'NUMER_DZIALKI': 'no label', 'NAZWA_OBREBU': 'no label', 'NUMER_OBREBU': 'no label', 'NUMER_JEDNOSTKI': 'no label', 'NAZWA_GMINY': 'no label', 'POLE_EWIDENCYJNE': 'no label', 'KLASOUZYTKI_EGIB': 'no label', 'GRUPA_REJESTROWA': 'no label', 'DATA': 'no label', 'PO_TERMINIE_NR WNIOSKU': 'no label', 'PO_TERMINIE_MIEJSCOWOŚĆ': 'no label', 'PO_TERMINIE_NUMER 
DZIAŁKI': 'no label', 'PO_TERMINIE_NAZWA 
STREFY': 'no label', 'PO_TERMINIE_UWAGI + DATA 
ZŁOŻENIA WNIOSKU': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_GRANICA_GMINY_4.set('fieldLabels', {'województ': 'no label', 'powiat': 'no label', 'gmina': 'no label', 'teryt': 'no label', });
lyr_GRANICA_GMINY_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});