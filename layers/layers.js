var wms_layers = [];

var lyr_CartegologiqueimagedelaFranceaumillion_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoservices.brgm.fr/geologie",
    attributions: ' ',
                              params: {
                                "LAYERS": "SCAN_F_GEOL1M",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Carte géologique image de la France au million",
                            opacity: 0.600000,
                            
                            
                          });
              wms_layers.push([lyr_CartegologiqueimagedelaFranceaumillion_0, 0]);
var format_SudZoneAxiale0_1 = new ol.format.GeoJSON();
var features_SudZoneAxiale0_1 = format_SudZoneAxiale0_1.readFeatures(json_SudZoneAxiale0_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SudZoneAxiale0_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SudZoneAxiale0_1.addFeatures(features_SudZoneAxiale0_1);
var lyr_SudZoneAxiale0_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SudZoneAxiale0_1, 
                style: style_SudZoneAxiale0_1,
                interactive: true,
                title: '<img src="styles/legend/SudZoneAxiale0_1.png" /> Sud Zone Axiale 0'
            });
var format_FrontNordPyr_2 = new ol.format.GeoJSON();
var features_FrontNordPyr_2 = format_FrontNordPyr_2.readFeatures(json_FrontNordPyr_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrontNordPyr_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrontNordPyr_2.addFeatures(features_FrontNordPyr_2);
var lyr_FrontNordPyr_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FrontNordPyr_2, 
                style: style_FrontNordPyr_2,
                interactive: true,
                title: '<img src="styles/legend/FrontNordPyr_2.png" /> Front Nord Pyr'
            });
var format_FailleNordPyr_3 = new ol.format.GeoJSON();
var features_FailleNordPyr_3 = format_FailleNordPyr_3.readFeatures(json_FailleNordPyr_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FailleNordPyr_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FailleNordPyr_3.addFeatures(features_FailleNordPyr_3);
var lyr_FailleNordPyr_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FailleNordPyr_3, 
                style: style_FailleNordPyr_3,
                interactive: true,
                title: '<img src="styles/legend/FailleNordPyr_3.png" /> Faille Nord Pyr'
            });
var format_ChevauchementFrontalSudPyr_4 = new ol.format.GeoJSON();
var features_ChevauchementFrontalSudPyr_4 = format_ChevauchementFrontalSudPyr_4.readFeatures(json_ChevauchementFrontalSudPyr_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChevauchementFrontalSudPyr_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChevauchementFrontalSudPyr_4.addFeatures(features_ChevauchementFrontalSudPyr_4);
var lyr_ChevauchementFrontalSudPyr_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChevauchementFrontalSudPyr_4, 
                style: style_ChevauchementFrontalSudPyr_4,
                interactive: true,
                title: '<img src="styles/legend/ChevauchementFrontalSudPyr_4.png" /> Chevauchement Frontal Sud Pyr'
            });
var format_Localisations_5 = new ol.format.GeoJSON();
var features_Localisations_5 = format_Localisations_5.readFeatures(json_Localisations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localisations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localisations_5.addFeatures(features_Localisations_5);
var lyr_Localisations_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localisations_5, 
                style: style_Localisations_5,
                interactive: true,
    title: 'Localisations<br />\
    <img src="styles/legend/Localisations_5_0.png" /> Zone axiale<br />\
    <img src="styles/legend/Localisations_5_1.png" /> Bassin d\'avant pays nord pyreneen<br />\
    <img src="styles/legend/Localisations_5_2.png" /> Zone nord pyreneenne<br />\
    <img src="styles/legend/Localisations_5_3.png" /> Zone sud pyreneenne<br />'
        });
var group_Limitesdeszones = new ol.layer.Group({
                                layers: [lyr_SudZoneAxiale0_1,lyr_FrontNordPyr_2,lyr_FailleNordPyr_3,lyr_ChevauchementFrontalSudPyr_4,],
                                title: "Limites des zones"});
var group_Gologie = new ol.layer.Group({
                                layers: [lyr_CartegologiqueimagedelaFranceaumillion_0,],
                                title: "Géologie"});

lyr_CartegologiqueimagedelaFranceaumillion_0.setVisible(true);lyr_SudZoneAxiale0_1.setVisible(true);lyr_FrontNordPyr_2.setVisible(true);lyr_FailleNordPyr_3.setVisible(true);lyr_ChevauchementFrontalSudPyr_4.setVisible(true);lyr_Localisations_5.setVisible(true);
var layersList = [group_Gologie,group_Limitesdeszones,lyr_Localisations_5];
lyr_SudZoneAxiale0_1.set('fieldAliases', {'CODE_TRAIT': 'CODE_TRAIT', 'TYPE_TRAIT': 'TYPE_TRAIT', 'CODE_GEOL': 'CODE_GEOL', 'NATURE': 'NATURE', 'IMPORTANCE': 'IMPORTANCE', 'SENS': 'SENS', 'NOM': 'NOM', 'COMMENT': 'COMMENT', 'TERRE_MER': 'TERRE_MER', 'CODE_LEG': 'CODE_LEG', 'NOM_SYMB': 'NOM_SYMB', 'WT_SYMB': 'WT_SYMB', 'C_SYMB': 'C_SYMB', 'M_SYMB': 'M_SYMB', 'J_SYMB': 'J_SYMB', 'N_SYMB': 'N_SYMB', 'CODE_TRA_1': 'CODE_TRA_1', 'TYPE_TRA_1': 'TYPE_TRA_1', 'CODE_GEOL_': 'CODE_GEOL_', 'NATURE_2': 'NATURE_2', 'IMPORTAN_1': 'IMPORTAN_1', 'SENS_2': 'SENS_2', 'NOM_2': 'NOM_2', 'COMMENT_2': 'COMMENT_2', 'TERRE_MER_': 'TERRE_MER_', 'CODE_LEG_2': 'CODE_LEG_2', 'NOM_SYMB_2': 'NOM_SYMB_2', 'WT_SYMB_2': 'WT_SYMB_2', 'C_SYMB_2': 'C_SYMB_2', 'M_SYMB_2': 'M_SYMB_2', 'J_SYMB_2': 'J_SYMB_2', 'N_SYMB_2': 'N_SYMB_2', });
lyr_FrontNordPyr_2.set('fieldAliases', {'CODE_TRAIT': 'CODE_TRAIT', 'TYPE_TRAIT': 'TYPE_TRAIT', 'CODE_GEOL': 'CODE_GEOL', 'NATURE': 'NATURE', 'IMPORTANCE': 'IMPORTANCE', 'SENS': 'SENS', 'NOM': 'NOM', 'COMMENT': 'COMMENT', 'TERRE_MER': 'TERRE_MER', 'CODE_LEG': 'CODE_LEG', 'NOM_SYMB': 'NOM_SYMB', 'WT_SYMB': 'WT_SYMB', 'C_SYMB': 'C_SYMB', 'M_SYMB': 'M_SYMB', 'J_SYMB': 'J_SYMB', 'N_SYMB': 'N_SYMB', });
lyr_FailleNordPyr_3.set('fieldAliases', {'CODE_TRAIT': 'CODE_TRAIT', 'TYPE_TRAIT': 'TYPE_TRAIT', 'CODE_GEOL': 'CODE_GEOL', 'NATURE': 'NATURE', 'IMPORTANCE': 'IMPORTANCE', 'SENS': 'SENS', 'NOM': 'NOM', 'COMMENT': 'COMMENT', 'TERRE_MER': 'TERRE_MER', 'CODE_LEG': 'CODE_LEG', 'NOM_SYMB': 'NOM_SYMB', 'WT_SYMB': 'WT_SYMB', 'C_SYMB': 'C_SYMB', 'M_SYMB': 'M_SYMB', 'J_SYMB': 'J_SYMB', 'N_SYMB': 'N_SYMB', });
lyr_ChevauchementFrontalSudPyr_4.set('fieldAliases', {'CODE_TRAIT': 'CODE_TRAIT', 'TYPE_TRAIT': 'TYPE_TRAIT', 'CODE_GEOL': 'CODE_GEOL', 'NATURE': 'NATURE', 'IMPORTANCE': 'IMPORTANCE', 'SENS': 'SENS', 'NOM': 'NOM', 'COMMENT': 'COMMENT', 'TERRE_MER': 'TERRE_MER', 'CODE_LEG': 'CODE_LEG', 'NOM_SYMB': 'NOM_SYMB', 'WT_SYMB': 'WT_SYMB', 'C_SYMB': 'C_SYMB', 'M_SYMB': 'M_SYMB', 'J_SYMB': 'J_SYMB', 'N_SYMB': 'N_SYMB', });
lyr_Localisations_5.set('fieldAliases', {'Site': 'Site', 'Numero de fiche': 'Numero de fiche', 'Cordonnee geographique Lambert 93 (X)': 'Cordonnee geographique Lambert 93 (X)', 'Cordonnee geographique Lambert 93 (Y)': 'Cordonnee geographique Lambert 93 (Y)', 'Zonation': 'Zonation', 'Lien vers la fiche': 'Lien vers la fiche', });
lyr_SudZoneAxiale0_1.set('fieldImages', {'CODE_TRAIT': 'TextEdit', 'TYPE_TRAIT': 'TextEdit', 'CODE_GEOL': 'TextEdit', 'NATURE': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'SENS': 'TextEdit', 'NOM': 'TextEdit', 'COMMENT': 'TextEdit', 'TERRE_MER': 'TextEdit', 'CODE_LEG': 'TextEdit', 'NOM_SYMB': 'TextEdit', 'WT_SYMB': 'TextEdit', 'C_SYMB': 'TextEdit', 'M_SYMB': 'TextEdit', 'J_SYMB': 'TextEdit', 'N_SYMB': 'TextEdit', 'CODE_TRA_1': 'TextEdit', 'TYPE_TRA_1': 'TextEdit', 'CODE_GEOL_': 'TextEdit', 'NATURE_2': 'TextEdit', 'IMPORTAN_1': 'TextEdit', 'SENS_2': 'TextEdit', 'NOM_2': 'TextEdit', 'COMMENT_2': 'TextEdit', 'TERRE_MER_': 'TextEdit', 'CODE_LEG_2': 'TextEdit', 'NOM_SYMB_2': 'TextEdit', 'WT_SYMB_2': 'TextEdit', 'C_SYMB_2': 'TextEdit', 'M_SYMB_2': 'TextEdit', 'J_SYMB_2': 'TextEdit', 'N_SYMB_2': 'TextEdit', });
lyr_FrontNordPyr_2.set('fieldImages', {'CODE_TRAIT': 'TextEdit', 'TYPE_TRAIT': 'TextEdit', 'CODE_GEOL': 'TextEdit', 'NATURE': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'SENS': 'TextEdit', 'NOM': 'TextEdit', 'COMMENT': 'TextEdit', 'TERRE_MER': 'TextEdit', 'CODE_LEG': 'TextEdit', 'NOM_SYMB': 'TextEdit', 'WT_SYMB': 'TextEdit', 'C_SYMB': 'TextEdit', 'M_SYMB': 'TextEdit', 'J_SYMB': 'TextEdit', 'N_SYMB': 'TextEdit', });
lyr_FailleNordPyr_3.set('fieldImages', {'CODE_TRAIT': 'TextEdit', 'TYPE_TRAIT': 'TextEdit', 'CODE_GEOL': 'TextEdit', 'NATURE': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'SENS': 'TextEdit', 'NOM': 'TextEdit', 'COMMENT': 'TextEdit', 'TERRE_MER': 'TextEdit', 'CODE_LEG': 'TextEdit', 'NOM_SYMB': 'TextEdit', 'WT_SYMB': 'TextEdit', 'C_SYMB': 'TextEdit', 'M_SYMB': 'TextEdit', 'J_SYMB': 'TextEdit', 'N_SYMB': 'TextEdit', });
lyr_ChevauchementFrontalSudPyr_4.set('fieldImages', {'CODE_TRAIT': 'TextEdit', 'TYPE_TRAIT': 'TextEdit', 'CODE_GEOL': 'TextEdit', 'NATURE': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'SENS': 'TextEdit', 'NOM': 'TextEdit', 'COMMENT': 'TextEdit', 'TERRE_MER': 'TextEdit', 'CODE_LEG': 'TextEdit', 'NOM_SYMB': 'TextEdit', 'WT_SYMB': 'TextEdit', 'C_SYMB': 'TextEdit', 'M_SYMB': 'TextEdit', 'J_SYMB': 'TextEdit', 'N_SYMB': 'TextEdit', });
lyr_Localisations_5.set('fieldImages', {'Site': 'TextEdit', 'Numero de fiche': 'Range', 'Cordonnee geographique Lambert 93 (X)': 'TextEdit', 'Cordonnee geographique Lambert 93 (Y)': 'TextEdit', 'Zonation': 'TextEdit', 'Lien vers la fiche': 'TextEdit', });
lyr_SudZoneAxiale0_1.set('fieldLabels', {});
lyr_FrontNordPyr_2.set('fieldLabels', {});
lyr_FailleNordPyr_3.set('fieldLabels', {});
lyr_ChevauchementFrontalSudPyr_4.set('fieldLabels', {});
lyr_Localisations_5.set('fieldLabels', {'Site': 'inline label', 'Numero de fiche': 'inline label', 'Cordonnee geographique Lambert 93 (X)': 'inline label', 'Cordonnee geographique Lambert 93 (Y)': 'inline label', 'Zonation': 'inline label', 'Lien vers la fiche': 'inline label', });
lyr_Localisations_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});