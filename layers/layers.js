var wms_layers = [];

var format_WilayahAdministrasi_0 = new ol.format.GeoJSON();
var features_WilayahAdministrasi_0 = format_WilayahAdministrasi_0.readFeatures(json_WilayahAdministrasi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahAdministrasi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahAdministrasi_0.addFeatures(features_WilayahAdministrasi_0);
var lyr_WilayahAdministrasi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahAdministrasi_0, 
                style: style_WilayahAdministrasi_0,
                popuplayertitle: "Wilayah Administrasi",
                interactive: true,
    title: 'Wilayah Administrasi<br />\
    <img src="styles/legend/WilayahAdministrasi_0_0.png" /> AIRHITAM<br />\
    <img src="styles/legend/WilayahAdministrasi_0_1.png" /> BALIKBUKIT<br />\
    <img src="styles/legend/WilayahAdministrasi_0_2.png" /> BANDARNEGERISUOH<br />\
    <img src="styles/legend/WilayahAdministrasi_0_3.png" /> BANJIT<br />\
    <img src="styles/legend/WilayahAdministrasi_0_4.png" /> BATUBRAK<br />\
    <img src="styles/legend/WilayahAdministrasi_0_5.png" /> BATUKETULIS<br />\
    <img src="styles/legend/WilayahAdministrasi_0_6.png" /> BELALAU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_7.png" /> BENGKUNAT<br />\
    <img src="styles/legend/WilayahAdministrasi_0_8.png" /> BUAYPEMACA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_9.png" /> BUKITKEMUNING<br />\
    <img src="styles/legend/WilayahAdministrasi_0_10.png" /> GEDUNGSURIAN<br />\
    <img src="styles/legend/WilayahAdministrasi_0_11.png" /> KARYAPENGGAWA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_12.png" /> KEBUNTEBU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_13.png" /> LEMONG<br />\
    <img src="styles/legend/WilayahAdministrasi_0_14.png" /> LUMBOKSEMINUNG<br />\
    <img src="styles/legend/WilayahAdministrasi_0_15.png" /> NGAMBUR<br />\
    <img src="styles/legend/WilayahAdministrasi_0_16.png" /> PAGARDEWA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_17.png" /> PESISIR SELATAN<br />\
    <img src="styles/legend/WilayahAdministrasi_0_18.png" /> PESISIR TENGAH<br />\
    <img src="styles/legend/WilayahAdministrasi_0_19.png" /> PESISIR UTARA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_20.png" /> SEKINCAU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_21.png" /> SUKAU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_22.png" /> SUMBERJAYA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_23.png" /> SUOH<br />\
    <img src="styles/legend/WilayahAdministrasi_0_24.png" /> ULUBELU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_25.png" /> WARKUKRANAU SELATAN<br />\
    <img src="styles/legend/WilayahAdministrasi_0_26.png" /> WAYTENONG<br />\
    <img src="styles/legend/WilayahAdministrasi_0_27.png" /> <br />'
        });
var format_Pemukiman_1 = new ol.format.GeoJSON();
var features_Pemukiman_1 = format_Pemukiman_1.readFeatures(json_Pemukiman_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_1.addFeatures(features_Pemukiman_1);
var lyr_Pemukiman_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemukiman_1, 
                style: style_Pemukiman_1,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_1.png" /> Pemukiman'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });
var format_Danau_4 = new ol.format.GeoJSON();
var features_Danau_4 = format_Danau_4.readFeatures(json_Danau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Danau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Danau_4.addFeatures(features_Danau_4);
var lyr_Danau_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Danau_4, 
                style: style_Danau_4,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/Danau_4.png" /> Danau'
            });
var format_AgriSawah_5 = new ol.format.GeoJSON();
var features_AgriSawah_5 = format_AgriSawah_5.readFeatures(json_AgriSawah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgriSawah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgriSawah_5.addFeatures(features_AgriSawah_5);
var lyr_AgriSawah_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgriSawah_5, 
                style: style_AgriSawah_5,
                popuplayertitle: "Agri Sawah",
                interactive: true,
                title: '<img src="styles/legend/AgriSawah_5.png" /> Agri Sawah'
            });
var format_AgriKebun_6 = new ol.format.GeoJSON();
var features_AgriKebun_6 = format_AgriKebun_6.readFeatures(json_AgriKebun_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgriKebun_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgriKebun_6.addFeatures(features_AgriKebun_6);
var lyr_AgriKebun_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgriKebun_6, 
                style: style_AgriKebun_6,
                popuplayertitle: "Agri Kebun",
                interactive: true,
                title: '<img src="styles/legend/AgriKebun_6.png" /> Agri Kebun'
            });
var format_AgriLadang_7 = new ol.format.GeoJSON();
var features_AgriLadang_7 = format_AgriLadang_7.readFeatures(json_AgriLadang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgriLadang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgriLadang_7.addFeatures(features_AgriLadang_7);
var lyr_AgriLadang_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgriLadang_7, 
                style: style_AgriLadang_7,
                popuplayertitle: "Agri Ladang",
                interactive: true,
                title: '<img src="styles/legend/AgriLadang_7.png" /> Agri Ladang'
            });
var format_SPBU_8 = new ol.format.GeoJSON();
var features_SPBU_8 = format_SPBU_8.readFeatures(json_SPBU_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_8.addFeatures(features_SPBU_8);
var lyr_SPBU_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SPBU_8, 
                style: style_SPBU_8,
                popuplayertitle: "SPBU",
                interactive: true,
                title: '<img src="styles/legend/SPBU_8.png" /> SPBU'
            });
var format_Tambangan_9 = new ol.format.GeoJSON();
var features_Tambangan_9 = format_Tambangan_9.readFeatures(json_Tambangan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambangan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambangan_9.addFeatures(features_Tambangan_9);
var lyr_Tambangan_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tambangan_9, 
                style: style_Tambangan_9,
                popuplayertitle: "Tambangan",
                interactive: true,
                title: '<img src="styles/legend/Tambangan_9.png" /> Tambangan'
            });

lyr_WilayahAdministrasi_0.setVisible(true);lyr_Pemukiman_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_Danau_4.setVisible(true);lyr_AgriSawah_5.setVisible(true);lyr_AgriKebun_6.setVisible(true);lyr_AgriLadang_7.setVisible(true);lyr_SPBU_8.setVisible(true);lyr_Tambangan_9.setVisible(true);
var layersList = [lyr_WilayahAdministrasi_0,lyr_Pemukiman_1,lyr_Jalan_2,lyr_Sungai_3,lyr_Danau_4,lyr_AgriSawah_5,lyr_AgriKebun_6,lyr_AgriLadang_7,lyr_SPBU_8,lyr_Tambangan_9];
lyr_WilayahAdministrasi_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Pemukiman_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Sungai_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Danau_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AgriSawah_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AgriKebun_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AgriLadang_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SPBU_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Tambangan_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_WilayahAdministrasi_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Pemukiman_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Jalan_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_Sungai_3.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_Danau_4.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AgriSawah_5.set('fieldImages', {'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AgriKebun_6.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AgriLadang_7.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SPBU_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_Tambangan_9.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_WilayahAdministrasi_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Pemukiman_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Sungai_3.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Danau_4.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AgriSawah_5.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AgriKebun_6.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AgriLadang_7.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SPBU_8.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Tambangan_9.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Tambangan_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});