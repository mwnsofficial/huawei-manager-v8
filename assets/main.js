﻿var appVersion = "7";
var link = 'http://192.168.8.1/';
var is4G = false;
var is4Gplus = false;
var is2G = false;
var is3G = false;
var is5G = false;
var is5GPoint = false;
var isBit = true;
var isBits = false;
var isLongID = false;
var havename = false;
var haveread = false;
var nroption ='';
var rscp = 0;
var smsCount;
var intervalID;
var cid = '';
var lac = '';
var arfcn = '';
var monitor = [1,2,3,4,5,7,8,11,12,13,14,17,18,19,20,21,24,25,26,28,29,30,31,32,34,37,38,39,40,41,42,43,44,46,47,48,49,50,51,52,53];
var MC = '';
var MN = '';

// 4G Bands
var b1 = 0x1; // fdd 2100
var b2 = 0x2; // fdd 1900
var b3 = 0x4; // fdd 1800
var b4 = 0x8; // fdd 1700
var b5 = 0x10; // fdd 850
var b7 = 0x40; // fdd 2600
var b8 = 0x80; // fdd 900
var b11 = 0x400; // fdd 1500
var b12 = 0x800; // fdd 700
var b13 = 0x1000; // fdd 700
var b14 = 0x2000; // fdd 700
var b17 = 0x10000; // fdd 700
var b18 = 0x20000; // fdd 850
var b19 = 0x40000; // fdd 850
var b20 = 0x80000; // fdd 800
var b21 = 0x100000; // fdd 1500
var b24 = 0x800000; // fdd 1600
var b25 = 0x1000000; // fdd 1900
var b26 = 0x2000000; // fdd 850
var b28 = 0x8000000; // fdd 700
var b29 = 0x10000000; // sdl 700
var b30 = 0x20000000; // fdd 2300
var b31 = 0x40000000; // fdd 450
var b32 = 0x80000000; // sdl 1500
var b34 = 0x200000000; // tdd 2000
var b37 = 0x1000000000; // tdd 1900
var b38 = 0x2000000000; // tdd 2600
var b39 = 0x4000000000; // tdd 1900
var b40 = 0x8000000000; // tdd 2300
var b41 = 0x10000000000; // tdd 2500
var b42 = 0x20000000000; // tdd 3500
var b43 = 0x40000000000; // tdd 3700
var b44 = 0x80000000000; // tdd 700
var b46 = 0x200000000000; // tdd 5200
var b47 = 0x400000000000; // tdd 5900
var b48 = 0x800000000000; // tdd 3500
var b49 = 0x1000000000000; // tdd 3500
var b50 = 0x2000000000000; // tdd 1500
var b51 = 0x4000000000000; // tdd 1500
var b52 = 0x8000000000000; // tdd 3300
var b53 = 0x10000000000000; // tdd 2500

yb = 1208925819614629174706176;
zb = 1180591620717411303424;
eb = 1152921504606846976;
pb = 1125899906842624;
tb = 1099511627776;
gb = 1073741824;
mb = 1048576;
kb = 1024;


function Main(){
Status();
Signal();
DeviceInfo();
Plmn();
PlmnPh();
check_notifications();
NetMode();
Traffic();
monthlytraffic();
if (haveread == false){
ReadHardBand();
ReadBand();
haveread = true;
}
}

var find = function(xml, tag){
return $(xml).find(tag).first().text();
}

function Traffic(){
$.get(link + 'api/monitoring/traffic-statistics', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
$('#time').html(getTime($xml.find('CurrentConnectTime').text()));
if (isBit == true){
$('#CurrentRate').html(dataCon($xml.find('CurrentUploadRate').text(), '1','1') + '↑&nbsp;&nbsp;&nbsp;' + dataCon($xml.find('CurrentDownloadRate').text(), '1','1') + '↓');
$('#CurrentDownloadRate').html(dataCon($xml.find('CurrentDownloadRate').text(), '1','1') + '⇩');
CurrentDownloadRate = strA($xml.find('CurrentDownloadRate').text(), '1','1');
$("#CurrentDownloadRate").css('background', calccolorTraffic(CurrentDownloadRate, -800000, 10, 50000, 500000, 2500000, 5000000, 10000000, 22000000));
$('#CurrentUploadRate').html(dataCon($xml.find('CurrentUploadRate').text(), '1','1') + '⇧');
CurrentUploadRate = strA($xml.find('CurrentUploadRate').text(), '1','1');
$("#CurrentUploadRate").css('background', calccolorTraffic(CurrentUploadRate, -800000, 10, 50000, 500000, 2500000, 5000000, 10000000, 15000000));
} else {
$('#CurrentRate').html(dataCon($xml.find('CurrentUploadRate').text(), '1','0') + '↑&nbsp;&nbsp;&nbsp;' + dataCon($xml.find('CurrentDownloadRate').text(), '1','0') + '↓');
$('#CurrentDownloadRate').html(dataCon($xml.find('CurrentDownloadRate').text(), '1','0') + '⇩');
CurrentDownloadRate = strA($xml.find('CurrentDownloadRate').text(), '1','0');
$("#CurrentDownloadRate").css('background', calccolorTraffic(CurrentDownloadRate, -800000, 10, 50000, 500000, 2500000, 5000000, 10000000, 22000000));
$('#CurrentUploadRate').html(dataCon($xml.find('CurrentUploadRate').text(), '1','0') + '⇧');
CurrentUploadRate = strA($xml.find('CurrentUploadRate').text(), '1','0');
$("#CurrentUploadRate").css('background', calccolorTraffic(CurrentUploadRate, -800000, 10, 50000, 500000, 2500000, 5000000, 10000000, 15000000));
}
if (isBits == true){
$('#CurrentDownloadRates').html(dataCon($xml.find('CurrentDownloadRate').text(), '1','1') + '⇩');
CurrentDownloadRate = strA($xml.find('CurrentDownloadRate').text(), '1','1');
$('#CurrentUploadRates').html(dataCon($xml.find('CurrentUploadRate').text(), '1','1') + '⇧');
CurrentUploadRate = strA($xml.find('CurrentUploadRate').text(), '1','1');
} else {
$('#CurrentDownloadRates').html(dataCon($xml.find('CurrentDownloadRate').text(), '1','0') + '⇩');
CurrentDownloadRate = strA($xml.find('CurrentDownloadRate').text(), '1','0');
$('#CurrentUploadRates').html(dataCon($xml.find('CurrentUploadRate').text(), '1','0') + '⇧');
CurrentUploadRate = strA($xml.find('CurrentUploadRate').text(), '1','0');
}
$('#CurrentDownload').html(dataCon($xml.find('CurrentDownload').text(), '0','0'));
$('#CurrentUpload').html(dataCon($xml.find('CurrentUpload').text(), '0','0'));

var downs = $xml.find('CurrentDownload').text() * 1;
var ups = $xml.find('CurrentUpload').text() * 1;
$('#Tupdown').html(dataCon(ups + downs, 0, 0));
$('#TotalConnectTime').html(getTime1($xml.find('TotalConnectTime').text()));

var up = $xml.find('TotalUpload').text() * 1;
var down = $xml.find('TotalDownload').text() * 1;
$('#updown').html(dataCon(up + down, 0, 0));
window.clearTimeout(intervalID);
intervalID =  window.setTimeout(Main,300);
});
}

function monthlytraffic(){
$.get(link + 'api/monitoring/month_statistics', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
$('#CurrentMonthDownload').html(getTime1($xml.find('CurrentMonthDownload').text()));
$('#CurrentMonthUpload').html(dataCon1($xml.find('CurrentMonthUpload').text()));
$('#MonthDuration').html(getTime1($xml.find('MonthDuration').text()));
$('#MonthLastClearTime').html($xml.find('MonthLastClearTime').text());
$('#MonthLastClearTimee').html($xml.find('MonthLastClearTime').text());
$('#CurrentDayUsed').html(dataCon1($xml.find('CurrentDayUsed').text()));
$('#CurrentDayDuration').html(dataCon1($xml.find('CurrentDayDuration').text()));

var up = $xml.find('CurrentMonthUpload').text() * 1;
var down = $xml.find('CurrentMonthDownload').text() * 1;
$('#updownmonthly').html(dataCon1(up + down) + "");
window.clearTimeout(intervalID);
intervalID =  window.setTimeout(Main,300);
});
}

function Signal(){
$.get(link + 'api/net/cell-info', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
});
$.ajax({
url: link + 'api/device/signal',
headers: { "__RequestVerificationToken": Token },
success: function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
MC = $xml.find('plmn').text().slice(0, 3);
MN = $xml.find('plmn').text().slice(-2);
cid = $xml.find('cell_id').text();

var hex = Number(cid).toString(16);
var rssi, rsrp, rsrq, sinr;
//-------------------------------------4G--------------------------------------------------
if (is4G == true || is4Gplus == true){
var hex2 = hex.substring(0, hex.length - 2);
var enbid = parseInt(hex2, 16);
var hex3 = hex.substring(hex.length - 2, hex.length);
var shortcid = parseInt(hex3, 16);
if (isLongID == true){
$('#enbi').html(parseInt(hex, 16));
} else {
$('#enbi').html(enbid + '/' + shortcid);
}
$('#enbi1').html('eNBID/Cell');
$("#rfmargin").css('display','');
$('#tlac').html('TAC');
$('#set').html('4G');
$('#txt').html('4G-TxPower');
$('#rsrpt').html('4G-RSRP');
$('#rsrqt').html('4G-RSRQ');
$('#sinrt').html('4G-SINR');
$("#nei_cell").css('display','');
$("#ballow").css('display','');
$("#bband").css('display','');

if ($xml.find('sc,pci').text() == ""){
$("#pcit").css('display','none');
$("#pcit1").css('display','none');
} else {
$("#pcit").css('display','');
$("#pcit1").css('display','');
$('#pci').html(($xml.find('pci').text() == "" ? $xml.find('sc').text() : $xml.find('pci').text()));
}
if ($xml.find('cell_id').text() == ""){
$("#cid1").css('display','none');
$("#cid2").css('display','none');
$("#enbi1").css('display','none');
$("#enbi2").css('display','none');
} else {
$("#cid1").css('display','');
$("#cid2").css('display','');
$("#enbi1").css('display','');
$("#enbi2").css('display','');
$('#ceid').html($xml.find('cell_id').text());
}
if ($xml.find('tac').text() == ""){
$("#tlac").css('display','none');
$("#tlac1").css('display','none');
} else {
$("#tlac").css('display','');
$("#tlac1").css('display','');
$('#lac').html($xml.find('tac').text());
}
if ($xml.find('rsrp').text() == ""){
$("#rsrqtr1").css('display','none');
$("#rsrqtr2").css('display','none');
$("#rsrqtr3").css('display','');
$("#rsrqtr4").css('display','');
$("#rsrqtr5").css('display','');
} else {
$("#rsrqtr1").css('display','none');
$("#rsrqtr2").css('display','none');
$("#rsrqtr3").css('display','');
$("#rsrqtr4").css('display','');
$("#rsrqtr5").css('display','');
}

rssi = strA($xml.find('rssi').text().replace('dBm',''));
$('#rssi').html($xml.find('rssi').text().replace('dBm','').replace('<','').replace('=','').replace('>','') + " dBm");
$("#rssireading").css('background', calccolor1(rssi, -124, -110, -95, -85, -75, -51));
rsrp = strA($xml.find('rsrp').text().replace('dBm',''));
$('#rsrp').html($xml.find('rsrp').text().replace('dBm','').replace('<','').replace('=','').replace('>','') + " dBm");
$("#rsrpreading").css('background', calccolor5(rsrp, -124, -110, -95, -85, -75, -51));
rsrq = strA($xml.find('rsrq').text().replace('dB',''));
$('#rsrq').html($xml.find('rsrq').text().replace('dB','').replace('<','').replace('=','').replace('>','') + " dB");
$("#rsrqreading").css('background', calccolor6(rsrq, -30, -20, -15, -10, -6, 0));
sinr = strA($xml.find('sinr').text().replace('dB',''));
$('#sinr').html($xml.find('sinr').text().replace('dB','').replace('<','').replace('=','').replace('>','') + " dB");
$("#sinrreading").css('background', calccolor7(sinr, -15, 3, 10, 15, 22, 30));
$('#marginrf').html(($xml.find('rsrp').text().replace('dBm','')) - ($xml.find('rssi').text().replace('dBm','')) + " dBm");
$("#rfreading").css('background', calcFRcolor((rsrp - rssi), -30, -29, -28, -27, -26, -25, -24, 10));
}

//-------------------------------------3G--------------------------------------------------
if (is3G == true){
var hex2 = hex.substring(0, hex.length - 4);
var enbid = parseInt(hex2, 16);
var hex3 = hex.substring(hex.length - 4, hex.length);
var shortcid = parseInt(hex3, 16);
if (isLongID == true){
$('#enbi').html(parseInt(hex, 16));
} else {
$('#enbi').html(enbid + '/' + shortcid);
}
$('#enbi1').html('RNCID/Cell');
$("#rfmargin").css('display','none');
$('#tlac').html('RAC');
$('#set').html('3G');
$('#rscpt').html('3G-RSCP');
$('#eciot').html('3G-ECIO');
$('#txt').html('3G-TxPower');
$("#ballow").css('display','none');
$("#bband").css('display','none');

if ($xml.find('sc,pci').text() == ""){
$("#pcit").css('display','none');
$("#pcit1").css('display','none');
} else {
$("#pcit").css('display','');
$("#pcit1").css('display','');
$('#pci').html(($xml.find('pci').text() == "" ? $xml.find('sc').text() : $xml.find('pci').text()));
}

if ($xml.find('cell_id').text() == ""){
$("#cid1").css('display','none');
$("#cid2").css('display','none');
$("#enbi1").css('display','none');
$("#enbi2").css('display','none');
} else {
$("#cid1").css('display','');
$("#cid2").css('display','');
$("#enbi1").css('display','');
$("#enbi2").css('display','');
$('#ceid').html($xml.find('cell_id').text());
}
if ($xml.find('rac').text() == ""){
$("#tlac").css('display','none');
$("#tlac1").css('display','none');
} else {
$("#tlac").css('display','');
$("#tlac1").css('display','');
$('#lac').html($xml.find('rac').text());
}
if ($xml.find('rsrp').text() == ""){
$("#rsrqtr1").css('display','');
$("#rsrqtr2").css('display','');
$("#rsrqtr3").css('display','none');
$("#rsrqtr4").css('display','none');
$("#rsrqtr5").css('display','none');
} else {
$("#rsrqtr1").css('display','');
$("#rsrqtr2").css('display','');
$("#rsrqtr3").css('display','none');
$("#rsrqtr4").css('display','none');
$("#rsrqtr5").css('display','none');
}

rssi = strA($xml.find('rssi').text().replace('dBm',''));
$('#rssi').html($xml.find('rssi').text().replace('dBm','').replace('<','').replace('=','').replace('>','') + " dBm");
$("#rssireading").css('background', calccolor1(rssi, -124, -110, -95, -85, -75, -51));
rscp = strA($xml.find('rscp').text().replace('dBm',''));
$('#rscp').html($xml.find('rscp').text().replace('dBm','').replace('<','').replace('=','').replace('>','') + " dBm");
$("#rscpreading").css('background', calccolor3(rscp, -115, -100, -90, -80, -70, -60));
ecio = strA($xml.find('ecio').text().replace('dB',''));
$('#ecio').html($xml.find('ecio').text().replace('dB','').replace('<','').replace('=','').replace('>','') + " dB");
$("#ecioreading").css('background', calccolor4(ecio, -20, -20, -15, -10, -5, 0));
}

//-------------------------------------2G--------------------------------------------------
if (is2G == true){
$('#enbi1').html('Cell');
$('#enbi').html(cid);
$("#rfmargin").css('display','none');
$('#tlac').html('LAC');
$('#set').html('2G');
$('#txt').html('2G-TxPower');
$("#ballow").css('display','none');
$("#setna").css('display','none');
$("#bband").css('display','none');

if ($xml.find('sc,pci').text() == ""){
$("#pcit").css('display','none');
$("#pcit1").css('display','none');
} else {
$("#pcit").css('display','');
$("#pcit1").css('display','');
$('#pci').html(($xml.find('pci').text() == "" ? $xml.find('sc').text() : $xml.find('pci').text()));
}
if ($xml.find('cell_id').text() == ""){
$("#cid1").css('display','none');
$("#cid2").css('display','none');
$("#enbi1").css('display','none');
$("#enbi2").css('display','none');
} else {
$("#cid1").css('display','');
$("#cid2").css('display','');
$("#enbi1").css('display','');
$("#enbi2").css('display','');
$('#ceid').html($xml.find('cell_id').text());
}
if ($xml.find('lac').text() == ""){
$("#tlac").css('display','none');
$("#tlac1").css('display','none');
} else {
$("#tlac").css('display','');
$("#tlac1").css('display','');
$('#lac').html($xml.find('lac').text());
}
if ($xml.find('rxlev').text() == ""){
$("#rxlev2g").css('display','none');
} else {
$("#rxlev2g").css('display','');
$('#rxlev').html($xml.find('rxlev').text());
}
if ($xml.find('rsrp').text() == ""){
$("#rsrqtr1").css('display','none');
$("#rsrqtr2").css('display','none');
$("#rsrqtr3").css('display','none');
$("#rsrqtr4").css('display','none');
$("#rsrqtr5").css('display','none');
} else {
$("#rsrqtr1").css('display','none');
$("#rsrqtr2").css('display','none');
$("#rsrqtr3").css('display','none');
$("#rsrqtr4").css('display','none');
$("#rsrqtr5").css('display','none');
}

rssi = strA($xml.find('rssi').text().replace('dBm',''));
$('#rssi').html($xml.find('rssi').text().replace('dBm','').replace('<','').replace('=','').replace('>','') + " dBm");
$("#rssireading").css('background', calccolor1(rssi, -112, -100, -95, -85, -75, -51));
rxlev = strA($xml.find('rxlev').text().replace('dBm',''));
$('#rxlev').html($xml.find('rxlev').text().replace('dBm','').replace('<','').replace('=','').replace('>','') + " dBm");
$("#rxlevreading").css('background', calccolor2(rxlev, -113, -100, -90, -80, -70, -47));
}

//-------------------------------------2/3/4G--------------------------------------------------
if ($xml.find('nei_cellid').text() == ""){
$('#nei_cellid').html('N/A');
} else {
var nei = $xml.find('nei_cellid').text();
while (nei.indexOf('No') > -1){
nei = nei.replace('No',', ');
}
nei = nei.slice(1);
$('#nei_cellid').html(nei);
}

if ($xml.find('transmode').text() == ""){
$("#i27").css('display','none');
} else {
$("#i27").css('display','');
$('#tm').html($xml.find('transmode').text());
}

if ($xml.find('dlbandwidth').text() == ""){
$("#tbodybw").css('display','none');
} else {
$("#tbodybw").css('display','');

if ($xml.find('dlbandwidth').text() == "20MHz"){
$("#dlbandwidth, #arfcn").css('background','#009400');
} else if ($xml.find('dlbandwidth').text() == "15MHz"){
$("#dlbandwidth, #arfcn").css('background','#ffa500');
} else if ($xml.find('dlbandwidth').text() == "10MHz"){
$("#dlbandwidth, #arfcn").css('background','#c43232');
} else if ($xml.find('dlbandwidth').text() == "5MHz"){
$("#dlbandwidth, #arfcn").css('background','#ff0000');
} else {
$("#dlbandwidth, #arfcn").css('background','#292929');
}
$('#dlbandwidth').html($xml.find('dlbandwidth').text());

if ($xml.find('ulbandwidth').text() == "20MHz"){
$("#ulbandwidth").css('background','#009400');
} else if ($xml.find('ulbandwidth').text() == "15MHz"){
$("#ulbandwidth").css('background','#ffa500');
} else if ($xml.find('ulbandwidth').text() == "10MHz"){
$("#ulbandwidth").css('background','#c43232');
} else if ($xml.find('ulbandwidth').text() == "5MHz"){
$("#ulbandwidth").css('background','#ff0000');
} else {
$("#ulbandwidth").css('background','#292929');
}
$('#ulbandwidth').html($xml.find('ulbandwidth').text());
}

if ($xml.find('band').text() != '') {
$('#bandB').html('B'+ $xml.find('band').text());
$("#bband").css('display','');
} else {
$("#bband").css('display','none');
}

if ($xml.find('dlfrequency').text() == ""){
$("#dlfreq").css('display','none');
} else {
$("#dlfreq").css('display','');
$('#dlfrequency').html($xml.find('dlfrequency').text());
$('#ulfrequency').html($xml.find('ulfrequency').text());
}

if ($xml.find('earfcn').text() == ""){
$("#earf").css('display','none');
} else {
$("#earf").css('display','');
$('#arfcn').html($xml.find('earfcn').text());
}

var dlmcs = $xml.find('dl_mcs').text();
if (dlmcs == ''){
$('#dlmcs').html('');
$("#dulmcs").css('display','none');
} else {
$("#dulmcs").css('display','');
$('#dlmcs').html('0:'+dlmcs.slice(21, dlmcs.indexOf(' ')) + '/' + '1:'+dlmcs.slice(dlmcs.indexOf('Code1:') + 6));
$('#ulmcs').html($xml.find('ul_mcs').text().replace('mcsUpCarrier1:',''));
}

if ($xml.find('txpower').text() == ""){
$("#rsrqtrtx").css('display','none');
} else {
$("#rsrqtrtx").css('display','');
$('#tx').html($xml.find('txpower').text());
}
var tx = $xml.find('txpower').text();
if (tx == ''){
$('#tx').html('');
$("#txreading").css('background', calctxcolor('', -20, 0, 5, 10, 20, 23));
} else {
if (tx.indexOf('stxpwr') == -1){
$('#tx').html(tx.slice(7, tx.indexOf('PPucch') - 4) + ',' + tx.slice(tx.indexOf('PPucch:') + 7, tx.indexOf('PSrs:') - 4));
tx = tx.slice(tx.indexOf('PPucch:') + 7, tx.indexOf('PSrs:') - 4);
$("#txreading").css('background', calctxcolor(tx, -20, 0, 5, 10, 20, 23));
} else {
$('#tx').html(tx.replace('stxpwr:',''));
tx = tx.replace('stxpwr:','');
tx = tx.replace('dBm','');
if (is3G == true) $("#txreading").css('background', calctxcolor(tx, -20, 0, 5, 10, 15, 23));
if (is2G == true) $("#txreading").css('background', calctxcolor(tx, 0, 5, 10, 20, 25, 33));
}
}

//-------------------------------------5G--------------------------------------------------
if ($xml.find('nrrsrp').text() != ""){
is5G = true;
$("#tbodynr0").css('display','');
$("#tbodynr1").css('display','');
$("#tbodynr2").css('display','');
$("#tbodynr3").css('display','');
$('#NRtype').css(nroption);
} else {
is5G = false;
$("#tbodynr0").css('display','none');
$("#tbodynr1").css('display','none');
$("#tbodynr2").css('display','none');
$("#tbodynr3").css('display','none');
$('#NRtype').html('No service');
}

if ($xml.find('nrearfcn').text() == ""){
$("#nrearf").css('display','none');
} else {
$("#nrearf").css('display','');
$('#nrarfcn').html($xml.find('nrearfcn').text());
}

rsrp = strA($xml.find('nrrsrp').text().replace('dBm',''));
$('#nrrsrp').html($xml.find('nrrsrp').text().replace('dBm','').replace('<','').replace('=','').replace('>','') + " dBm");
$("#nrrsrpreading").css('background', calccolor8(rsrp, -124, -115, -105, -95, -85, -85));
rsrq = strA($xml.find('nrrsrq').text().replace('dB',''));
$('#nrrsrq').html($xml.find('nrrsrq').text().replace('dB','').replace('<','').replace('=','').replace('>','') + " dB");
$("#nrrsrqreading").css('background', calccolor9(rsrq, -20, -20, -15, -10, -6, 0));
sinr = strA($xml.find('nrsinr').text().replace('dB',''));
$('#nrsinr').html($xml.find('nrsinr').text().replace('dB','').replace('<','').replace('=','').replace('>','') + " dB");
$("#nrsinrreading").css('background', calccolor10(sinr, -10, 3, 10, 15, 22, 30));

var dlmcs = $xml.find('nrdlmcs').text();
if (dlmcs == ''){
$('#nrdlmcs').html('');
$("#tbodynr5").css('display','none');
} else {
$("#tbodynr5").css('display','');
$('#nrdlmcs').html(dlmcs.slice(23, dlmcs.indexOf(' ')) + ',' + dlmcs.slice(dlmcs.indexOf('Code1:') + 6));
}
$('#nrulmcs').html($xml.find('nrulmcs').text().replace('NRmcsUpCarrier1:',''));

if ($xml.find('nrdlfreq').text() == ""){
$("#tbodynr6").css('display','none');
} else {
$("#tbodynr6").css('display','');
$('#nrdlfreq').html($xml.find('nrdlfreq').text());
$('#nrulfreq').html($xml.find('nrulfreq').text());
}

if ($xml.find('nrdlbandwidth').text() == ""){
$("#tbodynr4").css('display','none');
} else {
$("#tbodynr4").css('display','');

if ($xml.find('nrdlbandwidth').text() == "100MHz"){
$("#nrdlbw, #nrarfcn").css('background','#009400');
} else if ($xml.find('nrdlbandwidth').text() == "90MHz"){
$("#nrdlbw, #nrarfcn").css('background','#ffa500');
} else if ($xml.find('nrdlbandwidth').text() == "80MHz"){
$("#nrdlbw, #nrarfcn").css('background','#c43232');
} else if ($xml.find('nrdlbandwidth').text() == "70MHz"){
$("#nrdlbw, #nrarfcn").css('background','#ff0000');
} else {
$("#nrdlbw, #nrarfcn").css('background','#292929');
}
$('#nrdlbw').html($xml.find('nrdlbandwidth').text());

if ($xml.find('nrulbandwidth').text() == "100MHz"){
$("#nrulbw").css('background','#009400');
} else if ($xml.find('nrulbandwidth').text() == "90MHz"){
$("#nrulbw").css('background','#ffa500');
} else if ($xml.find('nrulbandwidth').text() == "80MHz"){
$("#nrulbw").css('background','#c43232');
} else if ($xml.find('nrulbandwidth').text() == "70MHz"){
$("#nrulbw").css('background','#ff0000');
} else {
$("#nrulbw").css('background','#292929');
}
$('#nrulbw').html($xml.find('nrulbandwidth').text());
}

if ($xml.find('nrtxpower').text() == ""){
$("#tbodynr").css('display','none');
} else {
$("#tbodynr").css('display','');
$('#nrtx').html($xml.find('nrtxpower').text());
}
var tx = $xml.find('nrtxpower').text();
if (tx == ''){
$('#nrtx').html('');
$("#nrtxreading").css('background', calcnrtxcolor('', -20, 0, 5, 10, 20, 23));
} else {
$('#nrtx').html(tx.slice(7, tx.indexOf('PPucch') - 4) + ',' + tx.slice(tx.indexOf('PPucch:') + 7, tx.indexOf('PSrs:') - 4));
tx = tx.slice(tx.indexOf('PPucch:') + 7, tx.indexOf('PSrs:') - 4);
$("#nrtxreading").css('background', calcnrtxcolor(tx, -20, 0, 5, 10, 20, 23));
}
}
});
}

function Status(){
$.get(link + 'api/monitoring/status', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
if (conMod($xml.find('ConnectionStatus').text()) == "Terhubung"){
$("#conn").css('background','#00f600');
$("#conn").css('color','black');
$("#conne").css('background','#00f600');
$("#conne").css('color','black');
$("#home1").css('display','');
$("#home2").css('display','none');
} else if (conMod($xml.find('ConnectionStatus').text()) == "Connecting"){
$("#conn").css('background','#b87022');
$("#conn").css('color','black');
$("#conne").css('background','#b87022');
$("#conne").css('color','black');
} else {
$("#conn").css('background','#ff0000');
$("#conn").css('color','black');
$("#conne").css('background','#ff0000');
$("#conne").css('color','black');
$("#home1").css('display','none');
$("#home2").css('display','');
}
$('#conn').html(conMod($xml.find('ConnectionStatus').text()));
$('#conne').html(conMod($xml.find('ConnectionStatus').text()));

if (netType($xml.find('CurrentNetworkTypeEx').text()) == 'LTE CA (4G+)'){
$("#mode").css('color','#007dff');
} else if (netType($xml.find('CurrentNetworkTypeEx').text()) == 'LTE (4G)'){
$("#mode").css('color','#00f600');
} else {
$("#mode").css('color','#f3a5f3');
}
$('#mode').html(netType($xml.find('CurrentNetworkTypeEx').text()));
$('#RoamingStatus').html(($xml.find('RoamingStatus').text() == 0 ? "No" : "Yes"));

var signalicon = $xml.find('SignalIcon').text();
$("#signal1").css('background','#b7d9fe');
$("#signal2").css('background','#b7d9fe');
$("#signal3").css('background','#b7d9fe');
$("#signal4").css('background','#b7d9fe');
$("#signal5").css('background','#b7d9fe');
if (signalicon >= '1') $("#signal1").css('background','#ff0000');
if (signalicon >= '2') $("#signal2").css('background','#ffa500');
if (signalicon >= '3') $("#signal3").css('background','#ffff00');
if (signalicon >= '4') $("#signal4").css('background','#008000');
if (signalicon >= '5') $("#signal5").css('background','#1e90ff');
if ($xml.find('EndcStatus').text() == "1"){
is5GPoint = true;
} else {
is5GPoint = false;
}
if (is5G == true){
signalicon = $xml.find('SignalIconNr').text();
$("#nrsignal1").css('background','#b7d9fe');
$("#nrsignal2").css('background','#b7d9fe');
$("#nrsignal3").css('background','#b7d9fe');
$("#nrsignal4").css('background','#b7d9fe');
$("#nrsignal5").css('background','#b7d9fe');
if (signalicon >= '1') $("#nrsignal1").css('background','#ff0000');
if (signalicon >= '2') $("#nrsignal2").css('background','#ffa500');
if (signalicon >= '3') $("#nrsignal3").css('background','#ffff00');
if (signalicon >= '4') $("#nrsignal4").css('background','#008000');
if (signalicon >= '5') $("#nrsignal5").css('background','#1e90ff');
}

if ($xml.find('PrimaryDns').text() == ""){
$("#i28").css('display','none');
} else {
$("#i28").css('display','');
$('#wanipv4dns').html($xml.find('PrimaryDns').text() + '&nbsp;&nbsp;&nbsp;' + $xml.find('SecondaryDns').text());
}

if ($xml.find('PrimaryIPv6Dns').text() == ""){
$("#i26").css('display','none');
} else {
$("#i26").css('display','');
$('#wanipv6dns').html($xml.find('PrimaryIPv6Dns').text() + '&nbsp;&nbsp;&nbsp;' + $xml.find('SecondaryIPv6Dns').text());
}

if ($xml.find('BatteryPercent').text() == ""){
$("#Batt").css('display','none');
$("#Batt1").css('display','none');
$("#Batt2").css('display','none');
} else {
$("#Batt").css('display','');
$("#Batt1").css('display','');
$("#Batt2").css('display','');
}

if ($xml.find('SimStatus').text() == '1'){
$("#SimStatus").css('display','none');
} else {
$('#conn').html("SIM Error");
$('#conn').css('color','black');
$('#conne').html("SIM Error");
$('#conne').css('color','black');
$("#SimStatus").css('display','');
}

if (smsCount == "0"){
$('#smsCounts').html("📬&emsp;" + "0");
$('#smsCounts').css('color','red');
$('#smsCounts1').html("0");
$('#smsCounts1').css('color','red');
$('#smsCounts2').html("📬&emsp;" + "0");
$('#smsCounts2').css('color','red');
$('#smsCounts3').html("0");
$('#smsCounts3').css('color','red');
} else {
$('#smsCounts').html("📬&emsp;" + smsCount);
$('#smsCounts').css('color','green');
$('#smsCounts1').html(smsCount);
$('#smsCounts1').css('color','green');
$('#smsCounts2').html("📬&emsp;" + smsCount);
$('#smsCounts2').css('color','green');
$('#smsCounts3').html(smsCount);
$('#smsCounts3').css('color','green');
}

if ($xml.find('CurrentWifiUser').text() == "0"){
$("#wifiuser").css('background','red');
} else {
$("#wifiuser").css('background','green');
}

if ($xml.find('currenttotalwifiuser').text() == ''){
$('#wifiuser').html($xml.find('CurrentWifiUser').text());
} else {
$('#wifiuser').html($xml.find('CurrentWifiUser').text() + '/' +  $xml.find('currenttotalwifiuser').text());
}

if ($xml.find('currenttotalwifiuser').text() == "0"){
$('#wifiuser').html("Users");
$("#wifiuser").css('background','red');
}

if ($xml.find('BatteryPercent').text() != ''){
strbattery = $xml.find('BatteryPercent').text() + '%';
if ($xml.find('usbup').text() == '1'){
strbattery = strbattery + '\u26A1';
} else if ($xml.find('BatteryStatus').text() == '1'){
strbattery = strbattery + '\u26A1';
}
$("#battery").css('background', calccolor($xml.find('BatteryPercent').text(), 0, 20, 40, 60, 80, 100));
} else {
strbattery = '\u26A1';
}
$('#battery').html(strbattery);
});
}

function DeviceInfo(){
$.get(link + 'api/device/information', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
devn = $xml.find('DeviceName').text();
$('#devicename').html(devn);
havename = true;
getantennastatus();
if ($xml.find('WanIPAddress').text() == ""){
ipAddr=$xml.find('SecondWanIPAddress').text(),$xml.find('WanIPAddress').text();
} else {
ipAddr=$xml.find('WanIPAddress').text(),$xml.find('SecondWanIPAddress').text();
}
$('#ipv4').html(ipAddr);

if (ipAddr != ""){	
$('#i23').show();		
$('#ipv4').html(ipAddr);
} else {		
$('#i23').hide();			
$('#ipv4').hide();
}

if ($xml.find('WanIPv6Address').text() == ""){
ipv6Addr=$xml.find('SecondWanIPv6Address').text(),$xml.find('WanIPv6Address').text();
} else {
ipv6Addr=$xml.find('WanIPv6Address').text(),$xml.find('SecondWanIPv6Address').text();
}
$('#ipv6').html(ipv6Addr);

if (ipv6Addr != ""){
$('#i25').show();		
$('#ipv6').html(ipv6Addr);
} else {
$('#i25').hide();			
$('#ipv6').hide();
}

$('#modemmodel').html(conMod($xml.find('DeviceName').text()));

if ($xml.find('code').text() != ""){
$("#frame").attr('src', link + 'html/home.html');
}
if ($xml.find('spreadname_en').text() == ""){
$('#spreadname').html('Device Information');
} else {
$("#spreadname").css('display','');
$('#spreadname').html(conMod($xml.find('spreadname_en').text()));
}
if ($xml.find('Imei').text() == ""){
$("#i1").css('display','none');
} else {
$("#i1").css('display','');
$('#imei').html(conMod($xml.find('Imei').text()));
}
if ($xml.find('ImeiSvn').text() == ""){
$("#i2").css('display','none');
} else {
$("#i2").css('display','');
$('#Svn').html(conMod($xml.find('ImeiSvn').text()));
}
if ($xml.find('Imsi').text() == ""){
$("#i3").css('display','none');
} else {
$("#i3").css('display','');
$('#imsi').html(conMod($xml.find('Imsi').text()));
}
if ($xml.find('Serial,SerialNumber').text() == ""){
$("#i4").css('display','none');
} else {
$("#i4").css('display','');
$('#serial').html(conMod($xml.find('Serial,SerialNumber').text()));
}
if ($xml.find('Msisdn').text() == ""){
$("#i5").css('display','none');
} else {
$("#i5").css('display','');
$('#number').html(conMod($xml.find('Msisdn').text()));
}
if ($xml.find('Iccid').text() == ""){
$("#i6").css('display','none');
} else {
$("#i6").css('display','');
$('#ICCID').html(conMod($xml.find('Iccid').text()));
}
if ($xml.find('HardwareVersion').text() == ""){
$("#i7").css('display','none');
} else {
$("#i7").css('display','');
$('#hardware').html(conMod($xml.find('HardwareVersion').text()));
}
if ($xml.find('SoftwareVersion').text() == ""){
$("#i8").css('display','none');
} else {
$("#i8").css('display','');
$('#software').html(conMod($xml.find('SoftwareVersion').text()));
}
if ($xml.find('WebUIVersion').text() == ""){
$("#i9").css('display','none');
} else {
$("#i9").css('display','');
$('#webui').html(conMod($xml.find('WebUIVersion').text()));
}
if ($xml.find('iniversion').text() == ""){
$("#i10").css('display','none');
} else {
$("#i10").css('display','');
$('#iniversion').html(conMod($xml.find('iniversion').text()));
}
if ($xml.find('submask').text() == ""){
$("#i12").css('display','none');
} else {
$("#i12").css('display','');
$('#submask').html($xml.find('submask').text());
}
if ($xml.find('MacAddress1').text() == ""){
$("#i13").css('display','none');
} else {
$("#i13").css('display','');
$('#mac1').html(conMod($xml.find('MacAddress1').text()));
}
if ($xml.find('MacAddress2').text() == ""){
$("#i14").css('display','none');
} else {
$("#i14").css('display','');
$('#mac2').html(conMod($xml.find('MacAddress2').text()));
}
if ($xml.find('WifiMacAddrWl0').text() == ""){
$("#i15").css('display','none');
} else {
$("#i15").css('display','');
$('#WifiMac0').html(conMod($xml.find('WifiMacAddrWl0').text()));
}
if ($xml.find('WifiMacAddrWl1').text() == ""){
$("#i16").css('display','none');
} else {
$("#i16").css('display','');
$('#WifiMac1').html(conMod($xml.find('WifiMacAddrWl1').text()));
}
if ($xml.find('supportmode').text() == ""){
$("#i17").css('display','none');
} else {
$("#i17").css('display','');
$('#supportmode').html(conMod($xml.find('supportmode').text()));
}
if ($xml.find('ProductFamily').text() == ""){
$("#i18").css('display','none');
} else {
$("#i18").css('display','');
$('#productfam').html(conMod($xml.find('ProductFamily').text()));
}
if ($xml.find('Classify').text() == ""){
$("#i19").css('display','none');
} else {
$("#i19").css('display','');
$('#classify').html(conMod($xml.find('Classify').text()));
}
if ($xml.find('Esn').text() == ""){
$("#i20").css('display','none');
} else {
$("#i20").css('display','');
$('#Esn').html(conMod($xml.find('Esn').text()));
}
if ($xml.find('Meid').text() == ""){
$("#i21").css('display','none');
} else {
$("#i21").css('display','');
$('#Meid').html(conMod($xml.find('Meid').text()));
}
if ($xml.find('rrc_status').text() == ""){
$("#i24").css('display','none');
} else {
$("#i24").css('display','');
$('#rrc_status').html(conMod($xml.find('rrc_status').text()));
}

if (devn == "B310As-852" || devn == "B310s-518" || devn == "B315s-22" || devn == "B310s-22" || devn == "B525s-65a" || devn == "B525s-23a" || devn == "B525s-95a" || devn == "B315s-936" || devn == "B310As-938"){
$('#n1')[0].style.display = '';
$('#n4')[0].style.display = '';
$('#n6')[0].style.display = '';
} else if (devn == "B310s-927" || devn == "E5573s-606" || devn == "E5573Cs-933" || devn == "E5330Bs-2"){
$('#n5')[0].style.display = '';
$('#n7')[0].style.display = '';
}
});
}

function Plmn(){
$.get(link + 'api/net/current-plmn', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
var fullname = $xml.find('FullName').text();
$('#brand').html(fullname);
if (conMod($xml.find('FullName').text())){
$("#brand").css('background','#00f600');
$("#brand").css('color','black');
$("#namenum").css('display','');
} else if ($xml.find('FullName').text() != "902"){
$('#brand').html('Unknown');
$("#brand").css('background','#ff0000');
$("#brand").css('color','black');
$("#namenum").css('display','none');
}
if (netMod($xml.find('Rat').text()) == "LTE CA (4G+)"){
$("#netmode").css('color','#007dff');
} else if (netMod($xml.find('Rat').text()) == "LTE (4G)"){
$("#netmode").css('color','#00f600');
} else {
$("#netmode").css('color','#f3a5f3');
$('#netmode').html(netMod($xml.find('Rat').text()));
}
});
}

function B4GType(data){
{if ((data == '20800800C5')||(data=='7FFFFFFFFFFFFFFF')||(data=='1A000000001')||(data=='1A000000085')||(data=='2000000085')||(data=='20800800C5')||(data=='7E2880800D5')||(data=='7A0880800D5')||(data=='20000800C5')||(data=='20880800C5')||(data=='3E2880800D5')||(data=='1A08A0C00DF')||(data=='A0880800C1')||(data=='1E20A000095')||(data=='7E2880E00D5')||(data=='2000000680380')){ return "Auto"; } data_out = "";
for (x = 0; x < monitor.length; x++) {tb = Math.pow(2, monitor[x] - 1);
var t;
if (tb < 0x100000000){ t = parseInt(data, 16) & (tb);
} else { t = parseInt(data, 16) / 0x100000000 & (tb / 0x100000000);}
if (t != 0){ data_out += "B" + String(monitor[x]) + "+"; }}
data_out = data_out.replace(/\++$/, "");
return data_out; }
}

function NetMode(){
$.get(link + 'api/net/net-mode', function(data){
LTEBand = find(data, 'LTEBand');
NetworkBand = find(data, 'NetworkBand');
if (is4G == true){
$('#band').html(B_4GType(LTEBand));
} else {
$('#band').html(B_2G_3GType(NetworkBand));
}
});
}

function conMod(mode){
switch (mode){
case "900":
return "Menghubungkan";
break;
case "901":
return "Terhubung";
break;
case "902":
return "Tidak Konek";
break;
case "903":
return "Terputus";
break;
case "904":
return "Gagal Koneksi";
break;
case "905":
return "No service";
break;
case "906":
return "Koneksi Error";
break;
case "33":
return "Terputus";
break;
case "0":
return "Terputus";
break;
default:
return mode;
}
}

function netMod(mode) {
switch (mode) {
case "0":
is2G = true;
is3G = false;
is4G = false;
return ;
break;
case "2":
is2G = false;
is3G = true;
is4G = false;
return ;
break;
case "7":
is2G = false;
is3G = false;
is4G = true;
if (is5G == true) {
return ;
}
if (is5G == false && is5GPoint == true) {
return ;
}
if (is4Gplus == true) {
return ;
} else {
return ;
}
break;
default:
is2G = false;
is3G = false;
is4G = false;
return mode;
}
}

function getTime(totalSeconds){
var hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
var minutes = Math.floor(totalSeconds / 60);
var seconds = totalSeconds % 60;
if (minutes < 10){ minutes = "0" + minutes; }
if (seconds < 10){ seconds = "0" + seconds; }
return hours + ":" + minutes + ":" + seconds;
}

function getTime1(seconds){
var numdays = Math.floor(seconds / 86400);
var numhours = Math.floor((seconds % 86400) / 3600);
var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
var numseconds = ((seconds % 86400) % 3600) % 60;
if (numdays < 1){ numdays = ""; }
if (numdays > 0){ numdays = numdays + " Hari "; }
return numdays + numhours + ":" + numminutes + ":" + numseconds;
}

function netType(value){
var arr1 = ["No service","GSM (2G)","GPRS (2G)","EDGE (2G)","UMTS (3G)","HSDPA (3G)","HSUPA (3G)","HSPA (3G)","TDSCDMA","HSPA+ (3.5G)","EVDO rev.0","EVDO rev.A","EVDO rev.B","1xRTT","UMB","1xEVDV","3xRTT","HSPA+64QAM","HSPA+MIMO","LTE (4G)","LTE CA (4G+)","NR (5G)","IS95A","IS95B","CDMA1X","EVDO rev.0","EVDO rev.A","EVDO rev.B","Hybrid CDMA 1X","Hybrid EVDO rev.0","Hybrid EVDO rev.A","Hybrid EVDO rev.B","EHRPD rev.0","EHRPD rev.A","EHRPD rev.B","The hybrid EHRPD rev.0","The hybrid EHRPD rev.A","The hybrid EHRPD rev.B"]
var arr2 = ["UMTS (3G)","HSDPA (3G)","HSUPA (3G)","HSPA (3G)","HSPA+ (3.5G)","DC-HSPA+ (3.5G)"]
if (value == 0) return 'No service';
if (value == 1) return 'GSM (2G)';
if (value == 2) return 'GPRS (2G)';
if (value == 3) return 'EDGE (2G)';
if (value == 21) return 'IS95A';
if (value == 22) return 'IS95B';
if (value == 23) return 'CDMA 1X';
if (value == 24) return 'EVDO rev.0';
if (value == 25) return 'EVDO rev.A';
if (value == 26) return 'EVDO rev.B';
if (value == 27) return 'HYBRID CDMA 1X';
if (value == 28) return 'HYBRID EVDO rev.0';
if (value == 29) return 'HYBRID EVDO rev.A';
if (value == 30) return 'HYBRID EVDO rev.B';
if (value == 31) return 'eHRPD rel.0';
if (value == 32) return 'eHRPD rel.A';
if (value == 33) return 'eHRPD rel.B';
if (value == 34) return 'HYBRID eHRPD rel.0';
if (value == 35) return 'HYBRID eHRPD rel.A';
if (value == 36) return 'HYBRID eHRPD rel.B';
if (value == 41) return 'UMTS (3G)';
if (value == 42) return 'HSDPA (3G)';
if (value == 43) return 'HSUPA (3G)';
if (value == 44) return 'HSPA (3G)';
if (value == 45) return 'HSPA+ (3.5G)';
if (value == 46) return 'DC-HSPA+ (3.5G)';
if (value == 61) return 'TD-SCDMA (3G)';
if (value == 62) return 'TD-HSDPA (3G)';
if (value == 63) return 'TD-HSUPA (3G)';
if (value == 64) return 'TD-HSPA (3G)';
if (value == 65) return 'TD-HSPA+ (3.5G)';
if (value == 81) return '802.16E';
if (value == 101) return 'LTE (4G)';
if (value == 1011) return 'LTE CA (4G+)';
if (value == 111) return 'NR (5G)';
if (value < 37) return " " + arr1[value];
if (value < 47 && value > 40) return " " + arr2[value - 41];
if (value < 66 && value > 60) return " " + arr2[value - 61];
return ' ' + value;
}

function B_2G_3GType(value){
switch (value){
case "80":
return "2G 1800MHz";
break;
case "300":
return "2G 900MHz";
break;
case "80000":
return "2G 850MHz";
break;
case "400000":
$("#w01").css('background','green');
$("#w01").css('color','yellow');
$("#w01").css('font-weight','bold');
$("#w001").css('background','green');
$("#w001").css('color','yellow');
$("#w001").css('font-weight','bold');
return "3G 2100MHz";
break;
case "800000":
$("#w02").css('background','green');
$("#w02").css('color','yellow');
$("#w02").css('font-weight','bold');
$("#w002").css('background','green');
$("#w002").css('color','yellow');
$("#w002").css('font-weight','bold');
return "3G 1900MHz";
break;
case "2000000":
$("#w04").css('background','green');
$("#w04").css('color','yellow');
$("#w04").css('font-weight','bold');
$("#w004").css('background','green');
$("#w004").css('color','yellow');
$("#w004").css('font-weight','bold');
return "3G 1700MHz";
break;
case "4000000":
$("#w05").css('background','green');
$("#w05").css('color','yellow');
$("#w05").css('font-weight','bold');
$("#w005").css('background','green');
$("#w005").css('color','yellow');
$("#w005").css('font-weight','bold');
return "3G 850MHz";
break;
case "8000000":
$("#w06").css('background','green');
$("#w06").css('color','yellow');
$("#w06").css('font-weight','bold');
$("#w006").css('background','green');
$("#w006").css('color','yellow');
$("#w006").css('font-weight','bold');
return "3G 800MHz";
break;
case "2000000000000":
$("#w08").css('background','green');
$("#w08").css('color','yellow');
$("#w08").css('font-weight','bold');
$("#w008").css('background','green');
$("#w008").css('color','yellow');
$("#w008").css('font-weight','bold');
return "3G 900MHz";
break;
case "4000000000000":
$("#w09").css('background','green');
$("#w09").css('color','yellow');
$("#w09").css('font-weight','bold');
$("#w009").css('background','green');
$("#w009").css('color','yellow');
$("#w009").css('font-weight','bold');
return "3G 1700MHz";
break;
case "1000000000000000":
$("#w019").css('background','green');
$("#w019").css('color','yellow');
$("#w019").css('font-weight','bold');
$("#w0019").css('background','green');
$("#w0019").css('color','yellow');
$("#w0019").css('font-weight','bold');
return "3G 800MHz";
break;
case "3FFFFFFF":
return "Auto";
break;
default:
return "" + value;
}
}

function B_4GType(value) {
if (is4G == false) {
return "";
}
var lteBand = " ";
var lbm = parseInt(value, 16);
if (value == "7FFFFFFFFFFFFFFF") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "1A000000001") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "1A000000085") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "2000000085") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "20800800C5") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "7E2880800D5") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "7A0880800D5") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "20000800C5") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "20880800C5") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "3E2880800D5") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "1A08A0C00DF") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "A0880800C1") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "1E20A000095") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "7E2880E00D5") {
lteBand = "Auto";
var lbm = parseInt(value, 16);
} else if (value == "2000000680380") {
lteBand = "Auto";
} else {
if ((lbm & b1) != 0) {
lteBand = lteBand + "2100Mhz" + "\/";
$("#01").css('background','green');
$("#01").css('color','yellow');
$("#01").css('font-weight','bold');
$("#001").css('background','green');
$("#001").css('color','yellow');
$("#001").css('font-weight','bold');
}
if ((lbm & b2) != 0) {
lteBand = lteBand + "1900Mhz" + "\/";
$("#02").css('background','green');
$("#02").css('color','yellow');
$("#02").css('font-weight','bold');
$("#002").css('background','green');
$("#002").css('color','yellow');
$("#002").css('font-weight','bold');
}
if ((lbm & b3) != 0) {
lteBand = lteBand + "1800Mhz" + "\/";
$("#03").css('background','green');
$("#03").css('color','yellow');
$("#03").css('font-weight','bold');
$("#003").css('background','green');
$("#003").css('color','yellow');
$("#003").css('font-weight','bold');
}
if ((lbm & b4) != 0) {
lteBand = lteBand + "1700Mhz" + "\/";
$("#04").css('background','green');
$("#04").css('color','yellow');
$("#04").css('font-weight','bold');
$("#004").css('background','green');
$("#004").css('color','yellow');
$("#004").css('font-weight','bold');
}
if ((lbm & b5) != 0) {
lteBand = lteBand + "850Mz" + "\/";
$("#05").css('background','green');
$("#05").css('color','yellow');
$("#05").css('font-weight','bold');
$("#005").css('background','green');
$("#005").css('color','yellow');
$("#005").css('font-weight','bold');
}
if ((lbm & b7) != 0) {
lteBand = lteBand + "2600Mhz" + "\/";
$("#07").css('background','green');
$("#07").css('color','yellow');
$("#07").css('font-weight','bold');
$("#007").css('background','green');
$("#007").css('color','yellow');
$("#007").css('font-weight','bold');
}
if ((lbm & b8) != 0) {
lteBand = lteBand + "900Mhz" + "\/";
$("#08").css('background','green');
$("#08").css('color','yellow');
$("#08").css('font-weight','bold');
$("#008").css('background','green');
$("#008").css('color','yellow');
$("#008").css('font-weight','bold');
}
if ((lbm & b11) != 0) {
lteBand = lteBand + "1500Mhz" + "\/";
$("#011").css('background','green');
$("#011").css('color','yellow');
$("#011").css('font-weight','bold');
$("#0011").css('background','green');
$("#0011").css('color','yellow');
$("#0011").css('font-weight','bold');
}
if ((lbm & b12) != 0) {
lteBand = lteBand + "700Mhz" + "\/";
$("#012").css('background','green');
$("#012").css('color','yellow');
$("#012").css('font-weight','bold');
$("#0012").css('background','green');
$("#0012").css('color','yellow');
$("#0012").css('font-weight','bold');
}
if ((lbm & b13) != 0) {
lteBand = lteBand + "700Mhz" + "\/";
$("#013").css('background','green');
$("#013").css('color','yellow');
$("#013").css('font-weight','bold');
$("#0013").css('background','green');
$("#0013").css('color','yellow');
$("#0013").css('font-weight','bold');
}
if ((lbm & b14) != 0) {
lteBand = lteBand + "700Mhz" + "\/";
$("#014").css('background','green');
$("#014").css('color','yellow');
$("#014").css('font-weight','bold');
$("#0014").css('background','green');
$("#0014").css('color','yellow');
$("#0014").css('font-weight','bold');
}
if ((lbm & b17) != 0) {
lteBand = lteBand + "700Mhz" + "\/";
$("#017").css('background','green');
$("#017").css('color','yellow');
$("#017").css('font-weight','bold');
$("#0017").css('background','green');
$("#0017").css('color','yellow');
$("#0017").css('font-weight','bold');
}
if ((lbm & b18) != 0) {
lteBand = lteBand + "850Mhz" + "\/";
$("#018").css('background','green');
$("#018").css('color','yellow');
$("#018").css('font-weight','bold');
$("#0018").css('background','green');
$("#0018").css('color','yellow');
$("#0018").css('font-weight','bold');
}
if ((lbm & b19) != 0) {
lteBand = lteBand + "850Mhz" + "\/";
$("#019").css('background','green');
$("#019").css('color','yellow');
$("#019").css('font-weight','bold');
$("#0019").css('background','green');
$("#0019").css('color','yellow');
$("#0019").css('font-weight','bold');
}
if ((lbm & b20) != 0) {
lteBand = lteBand + "800Mhz" + "\/";
$("#020").css('background','green');
$("#020").css('color','yellow');
$("#020").css('font-weight','bold');
$("#0020").css('background','green');
$("#0020").css('color','yellow');
$("#0020").css('font-weight','bold');
}
if ((lbm & b21) != 0) {
lteBand = lteBand + "1500Mhz" + "\/";
$("#021").css('background','green');
$("#021").css('color','yellow');
$("#021").css('font-weight','bold');
$("#0021").css('background','green');
$("#0021").css('color','yellow');
$("#0021").css('font-weight','bold');
}
if ((lbm & b24) != 0) {
lteBand = lteBand + "1600Mhz" + "\/";
$("#024").css('background','green');
$("#024").css('color','yellow');
$("#024").css('font-weight','bold');
$("#0024").css('background','green');
$("#0024").css('color','yellow');
$("#0024").css('font-weight','bold');
}
if ((lbm & b25) != 0) {
lteBand = lteBand + "1900Mhz" + "\/";
$("#025").css('background','green');
$("#025").css('color','yellow');
$("#025").css('font-weight','bold');
$("#0025").css('background','green');
$("#0025").css('color','yellow');
$("#0025").css('font-weight','bold');
}
if ((lbm & b26) != 0) {
lteBand = lteBand + "850Mhz" + "\/";
$("#026").css('background','green');
$("#026").css('color','yellow');
$("#026").css('font-weight','bold');
$("#0026").css('background','green');
$("#0026").css('color','yellow');
$("#0026").css('font-weight','bold');
}
if ((lbm & b28) != 0) {
lteBand = lteBand + "700Mhz" + "\/";
$("#028").css('background','green');
$("#028").css('color','yellow');
$("#028").css('font-weight','bold');
$("#0028").css('background','green');
$("#0028").css('color','yellow');
$("#0028").css('font-weight','bold');
}
if ((lbm & b29) != 0) {
lteBand = lteBand + "700Mhz" + "\/";
$("#029").css('background','green');
$("#029").css('color','yellow');
$("#029").css('font-weight','bold');
$("#0029").css('background','green');
$("#0029").css('color','yellow');
$("#0029").css('font-weight','bold');
}
if ((lbm & b30) != 0) {
lteBand = lteBand + "2300Mhz" + "\/";
$("#030").css('background','green');
$("#030").css('color','yellow');
$("#030").css('font-weight','bold');
$("#0030").css('background','green');
$("#0030").css('color','yellow');
$("#0030").css('font-weight','bold');
}
if ((lbm & b31) != 0) {
lteBand = lteBand + "450Mhz" + "\/";
$("#031").css('background','green');
$("#031").css('color','yellow');
$("#031").css('font-weight','bold');
$("#0031").css('background','green');
$("#0031").css('color','yellow');
$("#0031").css('font-weight','bold');
}
if ((lbm & b32) != 0) {
lteBand = lteBand + "1500Mhz" + "\/";
$("#032").css('background','green');
$("#032").css('color','yellow');
$("#032").css('font-weight','bold');
$("#0032").css('background','green');
$("#0032").css('color','yellow');
$("#0032").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b34) != 0) {
lteBand = lteBand + "2000Mhz" + "\/";
$("#034").css('background','green');
$("#034").css('color','yellow');
$("#034").css('font-weight','bold');
$("#0034").css('background','green');
$("#0034").css('color','yellow');
$("#0034").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b37) != 0) {
lteBand = lteBand + "1900Mhz" + "\/";
$("#037").css('background','green');
$("#037").css('color','yellow');
$("#037").css('font-weight','bold');
$("#0037").css('background','green');
$("#0037").css('color','yellow');
$("#0037").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b38) != 0) {
lteBand = lteBand + "2600Mhz" + "\/";
$("#038").css('background','green');
$("#038").css('color','yellow');
$("#038").css('font-weight','bold');
$("#0038").css('background','green');
$("#0038").css('color','yellow');
$("#0038").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b39) != 0) {
lteBand = lteBand + "1900Mhz" + "\/";
$("#039").css('background','green');
$("#039").css('color','yellow');
$("#039").css('font-weight','bold');
$("#0039").css('background','green');
$("#0039").css('color','yellow');
$("#0039").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b40) != 0) {
lteBand = lteBand + "2300Mhz" + "\/";
$("#040").css('background','green');
$("#040").css('color','yellow');
$("#040").css('font-weight','bold');
$("#0040").css('background','green');
$("#0040").css('color','yellow');
$("#0040").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b41) != 0) {
lteBand = lteBand + "2500Mhz" + "\/";
$("#041").css('background','green');
$("#041").css('color','yellow');
$("#041").css('font-weight','bold');
$("#0041").css('background','green');
$("#0041").css('color','yellow');
$("#0041").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b42) != 0) {
lteBand = lteBand + "3500Mhz" + "\/";
$("#042").css('background','green');
$("#042").css('color','yellow');
$("#042").css('font-weight','bold');
$("#0042").css('background','green');
$("#0042").css('color','yellow');
$("#0042").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b43) != 0) {
lteBand = lteBand + "3700Mhz" + "\/";
$("#043").css('background','green');
$("#043").css('color','yellow');
$("#043").css('font-weight','bold');
$("#0043").css('background','green');
$("#0043").css('color','yellow');
$("#0043").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b44) != 0) {
lteBand = lteBand + "700Mhz" + "\/";
$("#044").css('background','green');
$("#044").css('color','yellow');
$("#044").css('font-weight','bold');
$("#0044").css('background','green');
$("#0044").css('color','yellow');
$("#0044").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b46) != 0) {
lteBand = lteBand + "5200Mhz" + "\/";
$("#046").css('background','green');
$("#046").css('color','yellow');
$("#046").css('font-weight','bold');
$("#0046").css('background','green');
$("#0046").css('color','yellow');
$("#0046").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b47) != 0) {
lteBand = lteBand + "5900Mhz" + "\/";
$("#047").css('background','green');
$("#047").css('color','yellow');
$("#047").css('font-weight','bold');
$("#0047").css('background','green');
$("#0047").css('color','yellow');
$("#0047").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b48) != 0) {
lteBand = lteBand + "3500Mhz" + "\/";
$("#048").css('background','green');
$("#048").css('color','yellow');
$("#048").css('font-weight','bold');
$("#0048").css('background','green');
$("#0048").css('color','yellow');
$("#0048").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b49) != 0) {
lteBand = lteBand + "3500Mhz" + "\/";
$("#049").css('background','green');
$("#049").css('color','yellow');
$("#049").css('font-weight','bold');
$("#0049").css('background','green');
$("#0049").css('color','yellow');
$("#0049").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b50) != 0) {
lteBand = lteBand + "1500Mhz" + "\/";
$("#050").css('background','green');
$("#050").css('color','yellow');
$("#050").css('font-weight','bold');
$("#0050").css('background','green');
$("#0050").css('color','yellow');
$("#0050").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b51) != 0) {
lteBand = lteBand + "1500Mhz" + "\/";
$("#051").css('background','green');
$("#051").css('color','yellow');
$("#051").css('font-weight','bold');
$("#0051").css('background','green');
$("#0051").css('color','yellow');
$("#0051").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b52) != 0) {
lteBand = lteBand + "3300Mhz" + "\/";
$("#052").css('background','green');
$("#052").css('color','yellow');
$("#052").css('font-weight','bold');
$("#0052").css('background','green');
$("#0052").css('color','yellow');
$("#0052").css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b53) != 0) {
lteBand = lteBand + "2500Mhz" + "\/";
$("#053").css('background','green');
$("#053").css('color','yellow');
$("#053").css('font-weight','bold');
$("#0053").css('background','green');
$("#0053").css('color','yellow');
$("#0053").css('font-weight','bold');
}
}
if (lteBand.substring(lteBand.length - 1, lteBand.length) == "\/") {
lteBand = lteBand.substring(0, lteBand.length - 1);
}
return lteBand;
}

function BitwiseAndLarge(val1, val2){
var shift = 0,
result = 0;
var mask = ~((~0) << 30);
var divisor = 1 << 30;
while ((val1 != 0) && (val2 != 0)){
var rs = (mask & val1) & (mask & val2);
val1 = Math.floor(val1 / divisor);
val2 = Math.floor(val2 / divisor);
var i = shift++;
for (i; i--;){
rs *= divisor;
}
result += rs;
}
return result;
}

function dataCon(bytes, isSpeed, toBit){
if (bytes <= -1) return 0;
if (toBit == '0'){
if (bytes < 1024){
bytes = bytes + 'B';
} else if (bytes < 1048576){
bytes = parseInt(bytes / 1024 * 100) / 100 + 'KB';
} else if (bytes < 1073741824){
bytes = parseInt(bytes / 1048576 * 100) / 100 + 'MB';
} else if (bytes < 1099511627776){
bytes = parseInt(bytes / 1073741824 * 100) / 100 + 'GB';
} else if (bytes < 1125899906842624){
bytes = parseInt(bytes / 1099511627776 * 100) / 100 + 'TB';
}
} else {
if (bytes < 128){
bytes = bytes * 8 + 'b';
} else if (bytes < 128000){
bytes = parseInt(bytes / 1.28) / 100 + 'Kb';
} else if (bytes < 128000000){
bytes = parseInt(bytes / 1280) / 100 + 'Mb';
} else if (bytes < 128000000000){
bytes = parseInt(bytes / 1280000) / 100 + 'Gb';
}
}
return bytes;
}

function dataCon1(bytes){
if (bytes >= yb){
bytes = (bytes / yb).toFixed(2) * 100 / 100 + " YB";
} else if (bytes >= zb){
bytes = (bytes / zb).toFixed(2) * 100 / 100 + " ZB";
} else if (bytes >= eb){
bytes = (bytes / eb).toFixed(2) * 100 / 100 + " EB";
} else if (bytes >= pb){
bytes = (bytes / pb).toFixed(2) * 100 / 100 + " PB";
} else if (bytes >= tb){
bytes = (bytes / tb).toFixed(2) * 100 / 100 + " TB";
} else if (bytes >= gb){
bytes = (bytes / gb).toFixed(2) * 100 / 100 + " GB";
} else if (bytes >= mb){
bytes = (bytes / mb).toFixed(2) * 100 / 100 + " MB";
} else if (bytes >= kb){
bytes = (bytes / kb).toFixed(2) * 100 / 100 + " KB";
} else if (bytes > 1){
bytes = bytes + " B";
} else if (bytes == 1){
bytes = bytes + " B";
} else { bytes = "0 B"; }
return bytes;
}

function dis(val){
document.getElementById("calc").value+=val
}
function solve(){
let x = document.getElementById("calc").value
let y = eval(x)
document.getElementById("calc").value = y
}
function clrr(){
document.getElementById("calc").value = ""
}
function back(){
var txt = document.getElementById("calc").value;
txt = txt.slice(0,-1);
document.getElementById("calc").value = txt;
}

function showSlider(){
$('.slide')[0].style.left = '0px';
$('.slider')[0].style.width = '100%';
$('.header')[0].style.position = 'fixed';
$('.content')[0].style.position = 'fixed';
var newData = B4A.CallSub('isVisible', true, "true");
}

function hideSlider(){
$('.slide')[0].style.left = '-255px';
$('.slider')[0].style.width = '0px';
$('.header')[0].style.position = '';
$('.content')[0].style.position = '';
var newData = B4A.CallSub('isVisible', true, "false");
}

function toggleLight(){
var image = document.getElementById('eyad');
if (image.src.match("bulbon")){
image.src = "images/pic_bulboff.png";
} else {
image.src = "images/pic_bulbon.png";
}
$('body').toggleClass('bodydark');
$('.label').toggleClass('labeldark');
$('.slide').toggleClass('slidedark');
$('.table, td').toggleClass('table, td');
$('.th').toggleClass('th');
$('.line-header').toggleClass('line-header-dark');
$('.signalRsrpcontainer').toggleClass('signalRsrpcontainerdark');
$('.dropdown1').toggleClass('dropdown1d');
$('.dropdown-content1').toggleClass('dropdown-content1d');
$('.dropdown1:hover').toggleClass('dropdown1:hoverd');
$('.dropdown2').toggleClass('dropdown2d');
$('.dropdown-content2').toggleClass('dropdown-content2d');
$('.dropdown2:hover').toggleClass('dropdown2:hoverd');
$('.dropdown4').toggleClass('dropdown4d');
$('.dropdown-content4').toggleClass('dropdown-content4d');
$('.dropdown4:hover').toggleClass('dropdown4:hoverd');
$('.lte2').toggleClass('display');
$('.lte1').toggleClass('nodisplay');
var newData = B4A.CallSub('isDark', true, $('body').attr('class'));
}

function callOnLoad(){
$('#div-parent').remove();
$("#Speed").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 0.5%;left: 0.5%;width:99%;height:88%;border: 0px;border-radius: 20px;overflow:hidden !important;\" src=\"https://www.metercustom.net/plugin\"></iframe>");
}

function update_iframe(){
$('iframe').each(function(){
$(this).attr('src', $(this).attr('src'));
});
}

function showM(){
$('.dropdown-content')[0].style.display = '';
var newData = B4A.CallSub('isVisible', true, "true");
}

function hideM(){
$('.dropdown-content')[0].style.display = 'none';
var newData = B4A.CallSub('isVisible', true, "false");
}

function openPage(url, name){
var newData = B4A.CallSub('openPage', true, url, name);
}

function showInfo(ver){
var newData = B4A.CallSub('showInfo', true, ver);
}

function showLogin(){
var newData = B4A.CallSub('login', true);
}

function showLoginn(){
var newData = B4A.CallSub('login', true);
}

function setBands(){
var val = 0;
var lbm = 0;
var hex_value = '0';
if ($("#WB1").is(':checked')){
refresh('02','400000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB2").is(':checked')){
refresh('02','800000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB4").is(':checked')){
refresh('02','2000000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB5").is(':checked')){
refresh('02','4000000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB6").is(':checked')){
refresh('02','8000000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB8").is(':checked')){
refresh('02','2000000000000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB9").is(':checked')){
refresh('02','4000000000000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB19").is(':checked')){
refresh('02','1000000000000000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#B1").is(':checked')){
val = val + 1;
lbm += b1;
}
if ($("#B2").is(':checked')){
val = val + 2;
lbm += b2;
}
if ($("#B3").is(':checked')){
val = val + 4;
lbm += b3;
}
if ($("#B4").is(':checked')){
val = val + 8;
lbm += b4;
}
if ($("#B5").is(':checked')){
val = val + 10;
lbm += b5;
}
if ($("#B8").is(':checked')){
val = val + 80;
lbm += b8;
}
if ($("#B11").is(':checked')){
val = val + 800;
lbm += b11;
}
if ($("#B12").is(':checked')){
val = val + 800;
lbm += b12;
}
if ($("#B13").is(':checked')){
val = val + 1000;
lbm += b13;
}
if ($("#B14").is(':checked')){
val = val + 2000;
lbm += b14;
}
if ($("#B17").is(':checked')){
val = val + 10000;
lbm += b17;
}
if ($("#B18").is(':checked')){
val = val + 20000;
lbm += b18;
}
if ($("#B19").is(':checked')){
val = val + 40000;
lbm += b19;
}
if ($("#B20").is(':checked')){
val = val + 80000;
lbm += b20;
}
if ($("#B21").is(':checked')){
val = val + 100000;
lbm += b21;
}
if ($("#B24").is(':checked')){
val = val + 800000;
lbm += b24;
}
if ($("#B25").is(':checked')){
val = val + 1000000;
lbm += b25;
}
if ($("#B26").is(':checked')){
val = val + 2000000;
lbm += b26;
}
if ($("#B28").is(':checked')){
val = val + 8000000;
lbm += b28;
}
if ($("#B29").is(':checked')){
val = val + 10000000;
lbm += b29;
}
if ($("#B30").is(':checked')){
val = val + 20000000;
lbm += b30;
}
if ($("#B31").is(':checked')){
val = val + 40000000;
lbm += b31;
}
if ($("#B32").is(':checked')){
val = val + 80000000;
lbm += b32;
}
if ($("#B34").is(':checked')){
val = val + 200000000;
lbm += b34;
}
if ($("#B37").is(':checked')){
val = val + 1000000000;
lbm += b37;
}
if ($("#B38").is(':checked')){
val = val + 2000000000;
lbm += b38;
}
if ($("#B39").is(':checked')){
val = val + 4000000000;
lbm += b39;
}
if ($("#B40").is(':checked')){
val = val + 8000000000;
lbm += b40;
}
if ($("#B41").is(':checked')){
val = val + 10000000000;
lbm += b41;
}
if ($("#B42").is(':checked')){
val = val + 20000000000;
lbm += b42;
}
if ($("#B43").is(':checked')){
val = val + 40000000000;
lbm += b43;
}
if ($("#B44").is(':checked')){
val = val + 80000000000;
lbm += b44;
}
if ($("#B46").is(':checked')){
val = val + 200000000000;
lbm += b46;
}
if ($("#B47").is(':checked')){
val = val + 400000000000;
lbm += b47;
}
if ($("#B48").is(':checked')){
val = val + 800000000000;
lbm += b48;
}
if ($("#B49").is(':checked')){
val = val + 1000000000000;
lbm += b49;
}
if ($("#B50").is(':checked')){
val = val + 2000000000000;
lbm += b50;
}
if ($("#B51").is(':checked')){
val = val + 4000000000000;
lbm += b51;
}
if ($("#B52").is(':checked')){
val = val + 8000000000000;
lbm += b52;
}
if ($("#B53").is(':checked')){
val = val + 10000000000000;
lbm += b53;
}
if ($("#B7").is(':checked')){
hex_value = '' + val;
val = parseInt(hex_value, 16);
val = val + 64;
lbm += b7;
hex_value = val.toString(16);
} else {
hex_value = '' + val;
}
if ($("#btnNSA").is(':checked')){
nroption = '0';
}
if ($("#btnSA").is(':checked')){
nroption = '1';
}
if ($("#btnSANSA").is(':checked')){
nroption = '2';
}
if (hex_value + nroption == '0'){
msg("Silakan pilih frekuensi apa pun sebelum Selesai");
setTimeout(function(){window.location.reload();}, 1000);
return;
}
if (hex_value == '0'){
if ($("#btnNSA").is(':checked')){
refresh('00','00000000','7FFFFFFFFFFFFFFF','0');
msg("Mengaktifkan 5G NSA");
setTimeout(function(){msgok();},4000);
}
if ($("#btnSA").is(':checked')){
refresh('00','00000000','7FFFFFFFFFFFFFFF','1');
msg("Mengaktifkan 5G SA");
setTimeout(function(){msgok();},4000);
}
if ($("#btnSANSA").is(':checked')){
refresh('00','00000000','7FFFFFFFFFFFFFFF','2');
msg("Mengaktifkan 5G SA+NSA");
setTimeout(function(){msgok();},4000);
}
return;   
}
if ($('#btnNR').is(':checked')){
refresh('00','00000000','' + hex_value, '' + nroption);
msg("4G sedang diaktifkan dengan 5G");
setTimeout(function(){msgok();},4000);
} else {
refresh('03','3FFFFFFF','' + hex_value, '' + nroption);
msg("4G anda sudah aktif");
setTimeout(function(){msgok();},4000);
}
return;
}

function setBandsa(){
var val = 0;
var lbm = 0;
var hex_value = '0';
if ($("#WB01").is(':checked')){
refresh('02','400000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB02").is(':checked')){
refresh('02','800000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB04").is(':checked')){
refresh('02','2000000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB05").is(':checked')){
refresh('02','4000000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB06").is(':checked')){
refresh('02','8000000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB08").is(':checked')){
refresh('02','2000000000000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB09").is(':checked')){
refresh('02','4000000000000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#WB019").is(':checked')){
refresh('02','1000000000000000','7FFFFFFFFFFFFFFF');
msg("3G anda sudah aktif");
setTimeout(function(){msgok();},4000);
return;
}
if ($("#B01").is(':checked')){
val = val + 1;
lbm += b1;
}
if ($("#B02").is(':checked')){
val = val + 2;
lbm += b2;
}
if ($("#B03").is(':checked')){
val = val + 4;
lbm += b3;
}
if ($("#B04").is(':checked')){
val = val + 8;
lbm += b4;
}
if ($("#B05").is(':checked')){
val = val + 10;
lbm += b5;
}
if ($("#B08").is(':checked')){
val = val + 80;
lbm += b8;
}
if ($("#B011").is(':checked')){
val = val + 800;
lbm += b11;
}
if ($("#B012").is(':checked')){
val = val + 800;
lbm += b12;
}
if ($("#B013").is(':checked')){
val = val + 1000;
lbm += b13;
}
if ($("#B014").is(':checked')){
val = val + 2000;
lbm += b14;
}
if ($("#B017").is(':checked')){
val = val + 10000;
lbm += b17;
}
if ($("#B018").is(':checked')){
val = val + 20000;
lbm += b18;
}
if ($("#B019").is(':checked')){
val = val + 40000;
lbm += b19;
}
if ($("#B020").is(':checked')){
val = val + 80000;
lbm += b20;
}
if ($("#B021").is(':checked')){
val = val + 100000;
lbm += b21;
}
if ($("#B024").is(':checked')){
val = val + 800000;
lbm += b24;
}
if ($("#B025").is(':checked')){
val = val + 1000000;
lbm += b25;
}
if ($("#B026").is(':checked')){
val = val + 2000000;
lbm += b26;
}
if ($("#B028").is(':checked')){
val = val + 8000000;
lbm += b28;
}
if ($("#B029").is(':checked')){
val = val + 10000000;
lbm += b29;
}
if ($("#B030").is(':checked')){
val = val + 20000000;
lbm += b30;
}
if ($("#B031").is(':checked')){
val = val + 40000000;
lbm += b31;
}
if ($("#B032").is(':checked')){
val = val + 80000000;
lbm += b32;
}
if ($("#B034").is(':checked')){
val = val + 200000000;
lbm += b34;
}
if ($("#B037").is(':checked')){
val = val + 1000000000;
lbm += b37;
}
if ($("#B038").is(':checked')){
val = val + 2000000000;
lbm += b38;
}
if ($("#B039").is(':checked')){
val = val + 4000000000;
lbm += b39;
}
if ($("#B040").is(':checked')){
val = val + 8000000000;
lbm += b40;
}
if ($("#B041").is(':checked')){
val = val + 10000000000;
lbm += b41;
}
if ($("#B042").is(':checked')){
val = val + 20000000000;
lbm += b42;
}
if ($("#B043").is(':checked')){
val = val + 40000000000;
lbm += b43;
}
if ($("#B044").is(':checked')){
val = val + 80000000000;
lbm += b44;
}
if ($("#B046").is(':checked')){
val = val + 200000000000;
lbm += b46;
}
if ($("#B047").is(':checked')){
val = val + 400000000000;
lbm += b47;
}
if ($("#B048").is(':checked')){
val = val + 800000000000;
lbm += b48;
}
if ($("#B049").is(':checked')){
val = val + 1000000000000;
lbm += b49;
}
if ($("#B050").is(':checked')){
val = val + 2000000000000;
lbm += b50;
}
if ($("#B051").is(':checked')){
val = val + 4000000000000;
lbm += b51;
}
if ($("#B052").is(':checked')){
val = val + 8000000000000;
lbm += b52;
}
if ($("#B053").is(':checked')){
val = val + 10000000000000;
lbm += b53;
}
if ($("#B07").is(':checked')){
hex_value = '' + val;
val = parseInt(hex_value, 16);
val = val + 64;
lbm += b7;
hex_value = val.toString(16);
} else {
hex_value = '' + val;
}
if ($("#btnNSAa").is(':checked')){
nroption = '0';
}
if ($("#btnSAa").is(':checked')){
nroption = '1';
}
if ($("#btnSANSAa").is(':checked')){
nroption = '2';
}
if (hex_value + nroption == '0'){
msg("Silakan pilih frekuensi apa pun sebelum Selesai");
setTimeout(function(){window.location.reload();}, 1000);
return;
}
if (hex_value == '0'){
if ($("#btnNSAa").is(':checked')){
refresh('00','00000000','7FFFFFFFFFFFFFFF','0');
msg("Mengaktifkan 5G NSA");
setTimeout(function(){msgok();},4000);
}
if ($("#btnSAa").is(':checked')){
refresh('00','00000000','7FFFFFFFFFFFFFFF','1');
msg("Mengaktifkan 5G SA");
setTimeout(function(){msgok();},4000);
}
if ($("#btnSANSAa").is(':checked')){
refresh('00','00000000','7FFFFFFFFFFFFFFF','2');
msg("Mengaktifkan 5G SA+NSA");
setTimeout(function(){msgok();},4000);
}
return;   
}
if ($('#btnNRa').is(':checked')){
refresh('00','00000000','' + hex_value, '' + nroption);
msg("4G sedang diaktifkan dengan 5G");
setTimeout(function(){msgok();},4000);
} else {
refresh('03','3FFFFFFF','' + hex_value, '' + nroption);
msg("4G anda sudah aktif");
setTimeout(function(){msgok();},4000);
}
return;
}

function msgok(){
getTok();
}

function calccolor1(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
rssitxStr = "Sangat Bagus";
color = '#3d7e00';
} else if (cur >= l4){
rssitxStr = "Bagus Sekali";
color = '#81c332';
} else if (cur >= l3){
rssitxStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l2){
rssitxStr = "Lumayan";
color = '#b87022';
} else if (cur >= l1){
rssitxStr = "Lemah Sekali";
color = '#ff4500';
} else {
rssitxStr = "Sangat Lemah";
color = '#b82222';
}
$('#rssiIndicator').html(rssitxStr);
$('#rssiIndicator').css('color', color);
$('#rssipercent').css('color', color);
$('#rssipercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calccolor2(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
rxlevtxStr = "Sangat Bagus";
color = '#3d7e00';
} else if (cur >= l4){
rxlevtxStr = "Bagus Sekali";
color = '#81c332';
} else if (cur >= l3){
rxlevtxStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l2){
rxlevtxStr = "Lumayan";
color = '#b87022';
} else if (cur >= l1){
rxlevtxStr = "Lemah Sekali";
color = '#ff4500';
} else {
rxlevtxStr = "Sangat Lemah";
color = '#b82222';
}
$('#rxlevIndicator').html(rxlevtxStr);
$('#rxlevIndicator').css('color', color);
$('#rxlevpercent').css('color', color);
$('#rxlevpercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calccolor3(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
rscptxStr = "Sangat Bagus";
color = '#3d7e00';
} else if (cur >= l4){
rscptxStr = "Bagus Sekali";
color = '#81c332';
} else if (cur >= l3){
rscptxStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l2){
rscptxStr = "Lumayan";
color = '#b87022';
} else if (cur >= l1){
rscptxStr = "Lemah Sekali";
color = '#ff4500';
} else {
rscptxStr = "Sangat Lemah";
color = '#b82222';
}
$('#rscpIndicator').html(rscptxStr);
$('#rscpIndicator').css('color', color);
$('#rscppercent').css('color', color);
$('#rscppercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calccolor4(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
eciotxStr = "Sangat Bagus";
color = '#3d7e00';
} else if (cur >= l4){
eciotxStr = "Bagus Sekali";
color = '#81c332';
} else if (cur >= l3){
eciotxStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l2){
eciotxStr = "Lumayan";
color = '#b87022';
} else if (cur >= l1){
eciotxStr = "Lemah Sekali";
color = '#ff4500';
} else {
eciotxStr = "Sangat Lemah";
color = '#b82222';
}
$('#ecioIndicator').html(eciotxStr);
$('#ecioIndicator').css('color', color);
$('#eciopercent').css('color', color);
$('#eciopercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calccolor5(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
rsrptxStr = "Sangat Bagus";
color = '#3d7e00';
} else if (cur >= l4){
rsrptxStr = "Bagus Sekali";
color = '#81c332';
} else if (cur >= l3){
rsrptxStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l2){
rsrptxStr = "Lumayan";
color = '#b87022';
} else if (cur >= l1){
rsrptxStr = "Lemah Sekali";
color = '#ff4500';
} else {
rsrptxStr = "Sangat Lemah";
color = '#b82222';
}
$('#rsrpIndicator').html(rsrptxStr);
$('#rsrpIndicator').css('color', color);
$('#rsrppercent').css('color', color);
$('#rsrppercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calccolor6(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
rsrqtxStr = "Sangat Bagus";
color = '#3d7e00';
} else if (cur >= l4){
rsrqtxStr = "Bagus Sekali";
color = '#81c332';
} else if (cur >= l3){
rsrqtxStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l2){
rsrqtxStr = "Lumayan";
color = '#b87022';
} else if (cur >= l1){
rsrqtxStr = "Lemah Sekali";
color = '#ff4500';
} else {
rsrqtxStr = "Sangat Lemah";
color = '#b82222';
}
$('#rsrqIndicator').html(rsrqtxStr);
$('#rsrqIndicator').css('color', color);
$('#rsrqpercent').css('color', color);
$('#rsrqpercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calccolor7(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
sinrtxStr = "Sangat Bagus";
color = '#3d7e00';
} else if (cur >= l4){
sinrtxStr = "Bagus Sekali";
color = '#81c332';
} else if (cur >= l3){
sinrtxStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l2){
sinrtxStr = "Lumayan";
color = '#b87022';
} else if (cur >= l1){
sinrtxStr = "Lemah Sekali";
color = '#ff4500';
} else {
sinrtxStr = "Sangat Lemah";
color = '#b82222';
}
$('#sinrIndicator').html(sinrtxStr);
$('#sinrIndicator').css('color', color);
$('#sinrpercent').css('color', color);
$('#sinrpercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calccolor8(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
nrrsrptxStr = "Sangat Bagus";
color = '#049d1b';
} else if (cur >= l4){
nrrsrptxStr = "Bagus Sekali";
color = '#81c332';
} else if (cur >= l3){
nrrsrptxStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l2){
nrrsrptxStr = "Lumayan";
color = '#b87022';
} else if (cur >= l1){
nrrsrptxStr = "Lemah Sekali";
color = '#ff4500';
} else {
nrrsrptxStr = "Sangat Lemah";
color = '#b82222';
}
$('#nrrsrpIndicator').html(nrrsrptxStr);
$('#nrrsrpIndicator').css('color', color);
$('#nrrsrppercent').css('color', color);
$('#nrrsrppercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calccolor9(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
nrrsrqtxStr = "Sangat Bagus";
color = '#049d1b';
} else if (cur >= l4){
nrrsrqtxStr = "Bagus Sekali";
color = '#81c332';
} else if (cur >= l3){
nrrsrqtxStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l2){
nrrsrqtxStr = "Lumayan";
color = '#b87022';
} else if (cur >= l1){
nrrsrqtxStr = "Lemah Sekali";
color = '#ff4500';
} else {
nrrsrqtxStr = "Sangat Lemah";
color = '#b82222';
}
$('#nrrsrqIndicator').html(nrrsrqtxStr);
$('#nrrsrqIndicator').css('color', color);
$('#nrrsrqpercent').css('color', color);
$('#nrrsrqpercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calccolor10(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
nrsinrtxStr = "Sangat Bagus";
color = '#049d1b';
} else if (cur >= l4){
nrsinrtxStr = "Bagus Sekali";
color = '#81c332';
} else if (cur >= l3){
nrsinrtxStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l2){
nrsinrtxStr = "Lumayan";
color = '#b87022';
} else if (cur >= l1){
nrsinrtxStr = "Lemah Sekali";
color = '#ff4500';
} else {
nrsinrtxStr = "Sangat Lemah";
color = '#b82222';
}
$('#nrsinrIndicator').html(nrsinrtxStr);
$('#nrsinrIndicator').css('color', color);
$('#nrsinrpercent').css('color', color);
$('#nrsinrpercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calcFRcolor(cur, l0, l1, l2, l3, l4, l5, l6){
if (cur < l0) cur = l0;
if (cur > l6) cur = l6;
var percent = parseInt((cur - l0) * 100 / (l6 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l6){
rftxStr = "Sangat Bagus";
color = '#049d1b';
} else if (cur >= l5){
rftxStr = "Bagus Sekali";
color = '#81c332';
} else if (cur >= l4){
rftxStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l3){
rftxStr = "lumayan";
color = '#b87022';
} else if (cur >= l2){
rftxStr = "Lemah Sekali";
color = '#ff4500';
} else if (cur >= l1){
rftxStr = "Sangat Lemah";
color = '#A71206';
} else {
rftxStr = "Sangat Lemah";
color = '#b82222';
}
$('#rfIndicator').html(rftxStr);
$('#rfIndicator').css('color', color);
$('#rfpercent').css('color', color);
$('#rfpercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calctxcolor(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
if (percent < 10) percent = 10;
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
txStr = "Sangat Lemah";
color = '#b82222';
} else if (cur >= l4){
txStr = "Lemah Sekali";
color = '#ff4500';
} else if (cur >= l3){
txStr = "Lumayan";
color = '#b87022';
} else if (cur >= l2){
txStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l1){
txStr = "Bagus Sekali";
color = '#81c332';
} else {
txStr = "Sangat Bagus";
color = '#049d1b';
}
$('#txIndicator').html(txStr);
$('#txIndicator').css('color', color);
$('#txpercent').css('color', color);
$('#txpercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calcnrtxcolor(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
if (percent < 10) percent = 10;
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
nrtxStr = "Sangat Lemah";
color = '#b82222';
} else if (cur >= l4){
nrtxStr = "Lumayan";
color = '#b87022';
} else if (cur >= l3){
nrtxStr = "Lumayan";
color = '#b87022';
} else if (cur >= l2){
nrtxStr = "Bagus";
color = '#cbdf1b';
} else if (cur >= l1){
nrtxStr = "Bagus Sekali";
color = '#81c332';
} else {
nrtxStr = "Sangat Bagus";
color = '#049d1b';
}
$('#nrtxIndicator').html(nrtxStr);
$('#nrtxIndicator').css('color', color);
$('#nrtxpercent').css('color', color);
$('#nrtxpercent').html(whitepercent + "%");
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calccolor(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5){
color = '#049d1b';
} else if (cur >= l4){
color = '#09f12c';
} else if (cur >= l3){
color = '#C88008';
} else if (cur >= l2){
color = '#E9B60F';
} else if (cur >= l1){
color = '#E31b0b';
} else {
color = '#A71206';
}
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calcqcolor(cur, l0, l1, l2, l3, l4, l5){
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l4){
color = 'rgba(0,255,0,0.8)';
} else if (cur >= l3){
color = 'rgba(0,200,0,0.8)';
} else if (cur >= l2){
color = 'rgba(50,100,0,0.8)';
} else if (cur >= l1){
color = 'rgba(250, 190, 88, 1)';
} else {
color = 'rgba(255,0,0,0.8)';
}
return 'linear-gradient(to left, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function calccolorTraffic(cur, l0, l1, l2, l3, l4, l5, l6, l7){
if (cur < l0) cur = l0;
if (cur > l7) cur = l7;
var percent = parseInt((cur - l0) * 100 / (l7 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l6){
color = '#00e000';
} else if (cur >= l5){
color = '#a0e600';
} else if (cur >= l4){
color = '#e6e600';
} else if (cur >= l3){
color = '#FFFF00';
} else if (cur >= l2){
color = '#ffa500';
} else if (cur >= l1){
color = '#FF0000';
} else {
color = '#f04040';
}
return 'linear-gradient(to right, ' + color + ' ' + percent + '%' + whitepercent + '%)';
}

function bin_to_hex(str){
var hex_array = [{ key: 0, val: "0000" }, { key: 1, val: "0001" }, { key: 2, val: "0010" }, { key: 3, val: "0011" }, { key: 4, val: "0100" }, { key: 5, val: "0101" }, { key: 6, val: "0110" }, { key: 7, val: "0111" },
{ key: 8, val: "1000" }, { key: 9, val: "1001" }, { key: 'a', val: "1010" }, { key: 'b', val: "1011" }, { key: 'c', val: "1100" }, { key: 'd', val: "1101" }, { key: 'e', val: "1110" }, { key: 'f', val: "1111" }
];
var value = '';
var list = [];
if (str.length % 4 !== 0){
var a = "0000";
var b = a.substring(0, 4 - str.length % 4);
str = b.concat(str);
}
while (str.length > 4){
list.push(str.substring(0, 4));
str = str.substring(4);
}
list.push(str);
for (var i = 0; i < list.length; i++){
for (var j = 0; j < hex_array.length; j++){
if (list[i] == hex_array[j].val){
value = value.concat(hex_array[j].key);
break;
}
}
}
value = value.replace(/\b(0+)/gi, "");
if (value == '') value = '0';
return value;
}

function hex_to_bin(str){
var hex_array = [{ key: 0, val: "0000" }, { key: 1, val: "0001" }, { key: 2, val: "0010" }, { key: 3, val: "0011" }, { key: 4, val: "0100" }, { key: 5, val: "0101" }, { key: 6, val: "0110" }, { key: 7, val: "0111" },
{ key: 8, val: "1000" }, { key: 9, val: "1001" }, { key: 'a', val: "1010" }, { key: 'b', val: "1011" }, { key: 'c', val: "1100" }, { key: 'd', val: "1101" }, { key: 'e', val: "1110" }, { key: 'f', val: "1111" }
];
str = str.toLowerCase();
var value = "";
for (var i = 0; i < str.length; i++){
for (var j = 0; j < hex_array.length; j++){
if (str.charAt(i) == hex_array[j].key){
value = value.concat(hex_array[j].val);
break;
}
}
}
return value;
}

function strA(val){
val = val.replace('&gt;=','');
val = val.replace('&amp;lt;=','');
val = val.replace('&lt;','');
val = val.replace('>','');
val = val.replace('<','');
val = val.replace('=','');
val = val.replace('NaN','0');
return val;
}

function check_notifications(){
$.get(link + 'api/monitoring/check-notifications', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
if ($xml.find('UnreadMessage').text() == "0"){
smsCount = "0";
} else {
smsCount = $xml.find('UnreadMessage').text();
}
});
}

function refresh(val,val2,val3,nroption){
$('.btn').prop("disabled",true);
$.ajax({
url: link + 'api/net/net-mode',
type: 'post',
data: '<?xml version="1.0" encoding="UTF-8"?><request><NetworkMode>'+val+'</NetworkMode><NetworkBand>'+val2+'</NetworkBand><LTEBand>'+val3+'</LTEBand><networkOption>'+nroption+'</networkOption></request>',
headers: { "__RequestVerificationToken": Token },
});
}

function Restart(val1){
$.ajax({
url: link + 'api/device/control',
type: 'post',
data: '<?xml version="1.0" encoding="UTF-8"?><request><Control>' + val1 + '</Control></request>',
headers: { "__RequestVerificationToken": Token },
dataType: 'xml',
success: function(data, textStatus, request){
$('.btn').prop("disabled", false);
var res = data;
if (data.firstChild.textContent == "OK"){
msg("Restarting");
setTimeout(function(){window.location.reload();},30000);
} else {
msg("Restart Error");
}
},
error: function(request, textStatus, errorThrown){
$('.btn').prop("disabled", false);
msg("Error, Updating");
setTimeout(function(){window.location.reload();},3000);
}
});
}

function Poweroff(val1){
$.ajax({
url: link + 'api/device/control',
type: 'post',
data: '<?xml version="1.0" encoding="UTF-8"?><request><Control>' + val1 + '</Control></request>',
headers: { "__RequestVerificationToken": Token },
dataType: 'xml',
success: function(data, textStatus, request){
$('.btn').prop("disabled", false);
var res = data;
if (data.firstChild.textContent == "OK"){
msg("Shutdown");
setTimeout(function(){window.location.reload();},5000);
} else {
msg("Shutdown Error");
}
},
error: function(request, textStatus, errorThrown){
$('.btn').prop("disabled", false);
msg("Error, Updating");
setTimeout(function(){window.location.reload();},3000);
}
});
}

function changeip(){
$.get(link + 'api/net/plmn-list', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
var sp = '';
while (xml.indexOf('<Network>') > -1){
sp = xml.slice(xml.indexOf('<Network>'), xml.indexOf('</Network>') + 1);
var tr = document.createElement("tr");
tr.innerHTML = "<td style=font-size:smaller>"
table_body.appendChild(tr);
xml = xml.replace(sp, '');
}
});
$.ajax({
url: link + 'api/net/net-mode',
type: 'post',
data: '<?xml version="1.0" encoding="UTF-8"?>',
headers: { "__RequestVerificationToken": Token },
dataType: 'xml',
success: function(data, textStatus, request){
$('.btn').prop("disabled", false);
var res = data;
if (data.firstChild.textContent == "OK"){
msg("");
} else {
msg("The IP Address Is Refresh");
setTimeout(function(){window.location.reload();},5000);
}
},
error: function(request, textStatus, errorThrown){
$('.btn').prop("disabled", false);
msg("Error, Updating");
setTimeout(function(){window.location.reload();},3000);
}
});
}

function clearStats(){
$.ajax({
url: link + 'api/monitoring/clear-traffic',
type: 'post',
data: '<?xml version="1.0" encoding="UTF-8"?><request><ClearTraffic>1</ClearTraffic></request>',
headers: { "__RequestVerificationToken": Token },
dataType: 'xml',
success: function(data, textStatus, request){
$('.btn').prop("disabled", false);
var res = data;
if (data.firstChild.textContent == "OK"){
msg("Done Clear Data");
setTimeout(function(){window.location.reload();},3000);
} else {
msg("Error Clear Data");
}
},
error: function(request, textStatus, errorThrown){
$('.btn').prop("disabled", false);
msg("Error, Updating");
setTimeout(function(){window.location.reload();},3000);
}
});
}

function DataConnectOn(){
$.ajax({
url: link + 'api/dialup/mobile-dataswitch',
type: 'post',
data: '<?xml version="1.0" encoding="UTF-8"?><request><dataswitch>1</dataswitch></request>',
headers: { "__RequestVerificationToken": Token },
dataType: 'xml',
success: function(data, textStatus, request){
$('.btn').prop("disabled", false);
var res = data;
if (data.firstChild.textContent == "OK"){
msg("Reconnected Done");
setTimeout(function(){window.location.reload();},3000);
} else {
msg("Reconnected Error");
}
},
error: function(request, textStatus, errorThrown){
$('.btn').prop("disabled", false);
msg("Error, Updating");
setTimeout(function(){window.location.reload();},3000);
}
});
}

function DataConnectOff(){ 
$.ajax({
url: link + 'api/dialup/mobile-dataswitch',
type: 'post',
data: '<?xml version="1.0" encoding="UTF-8"?><request><dataswitch>0</dataswitch></request>',
headers: { "__RequestVerificationToken": Token },
dataType: 'xml',
success: function(data, textStatus, request){
$('.btn').prop("disabled", false);
var res = data;
if (data.firstChild.textContent == "OK"){
msg("Disconnected Done");
setTimeout(function(){window.location.reload();},3000);
} else {
msg("Disconnected Error");
}
},
error: function(request, textStatus, errorThrown){
$('.btn').prop("disabled", false);
msg("Error, Updating");
setTimeout(function(){window.location.reload();},3000);
}
});
}

function ReadAntenna(){
$.get(link + 'api/device/antenna_type', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
if (xml == ''){
msg("Device not support antenna");
return 0;
}
var antennastatus;
antennastatus = $xml.find('antenna1type').text();
if (antennastatus == '') antennastatus = $xml.find('antennatype').text();
if (antennastatus == '0'){
antennastatus = 'Internal';
} else {
antennastatus = 'External';
}
$('#antenna1').html(antennastatus);
antennastatus = $xml.find('antenna2type').text();
if (antennastatus == '0'){
antennastatus = 'Internal';
} else if (antennastatus == '1'){
antennastatus = 'External';
} else {
antennastatus = 'Unknown';
}
$('#antenna2').html(antennastatus);
});
$.get(link + 'api/device/antenna_set_type', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
$("#antenna").val($xml.find('antennasettype').text());
});
}

function getantennastatus(){
$.get(link + 'api/device/antenna_type', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
if (xml == ''){
$('#antennastatus').html('Unknown');
$('#antennastatuss').html('Unknown');
return;
}
var ant1 = $xml.find('antenna1type').text();
if (ant1 == '' && $xml.find('antennatype').text() != '') ant1 = $xml.find('antennatype').text();
var ant2 = $xml.find('antenna2type').text();
var ant1i = $xml.find('antenna1insertstatus').text();
var ant2i = $xml.find('antenna2insertstatus').text();
if (ant1 == '0' && ant2 == '0'){
$('#antennastatus').html('Internal');
$('#antennastatuss').html('Internal');
$("#antennastatus").css('background','#0d10b4');
$("#antennastatuss").css('background','#0d10b4');
} else if (ant1 == '0' && ant2 == ''){
$('#antennastatus').html('1 Internal');
$('#antennastatuss').html('1 Internal');
$("#antennastatus").css('background','#0206fc');
$("#antennastatuss").css('background','#0206fc');
} else if (ant1 == '' && ant2 == '0'){
$('#antennastatus').html('2 Internal');
$('#antennastatuss').html('2 Internal');
$("#antennastatus").css('background','#5e61f8');
$("#antennastatuss").css('background','#5e61f8');
} else if (ant1 == '1' && ant2 == '1'){
$('#antennastatus').html('External');
$('#antennastatuss').html('External');
$("#antennastatus").css('background','#b4710d');
$("#antennastatuss").css('background','#b4710d');
} else if (ant1 == '1' && ant2 == ''){
$('#antennastatus').html('1 External');
$('#antennastatuss').html('1 External');
$("#antennastatus").css('background','#f8b100');
$("#antennastatuss").css('background','#f8b100');
} else if (ant1 == '' && ant2 == '1'){
$('#antennastatus').html('2 External');
$('#antennastatuss').html('2 External');
$("#antennastatus").css('background','#f8b55e');
$("#antennastatuss").css('background','#f8b55e');
} else if (ant1 == '0' && ant2 == '1'){
$('#antennastatus').html('Mixed');
$('#antennastatuss').html('Mixed');
$("#antennastatus").css('background','#f80099');
$("#antennastatuss").css('background','#f80099');
} else if (ant1 == '1' && ant2 == '0'){
$('#antennastatus').html('Mixed');
$('#antennastatuss').html('Mixed');
$("#antennastatus").css('background','#f80099');
$("#antennastatuss").css('background','#f80099');
}
});
}

function SaveAntenna(){
$.ajax({
url: link + 'api/device/antenna_set_type',
type: 'post',
data: '<?xml version="1.0" encoding="UTF-8"?><request><antennasettype>' + $("#antenna").val() + '</antennasettype></request>',
headers: { "__RequestVerificationToken": Token },
dataType: 'xml',
success: function(data, textStatus, request){
$('.btn').prop("disabled", false);
var res = data;
if (data.firstChild.textContent == "OK"){
msg("Antenna has been switched");
setTimeout(function(){window.location.reload();},3000);
} else {
msg("Antenna Not Switched");
}
},
error: function(request, textStatus, errorThrown){
$('.btn').prop("disabled", false);
msg("Error, Updating");
setTimeout(function(){window.location.reload();},3000);
}
});
}

function ReadBand(){
$.get(link + 'api/net/net-mode', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
nroption = $xml.find('networkOption').text();
if (nroption != ''){
if (nroption == '0'){
$('#NRtype').html('5G NSA');
$("#NRtype").css('color','#f3a5f3');
$('#btnNSA').prop('checked', false);
$("#nsacol").css('color','yellow');
$("#nsacol").css('background','green');
$("#nsacol").css('font-weight','bold');
$('#btnNSAa').prop('checked', false);
$("#nsacola").css('color','yellow');
$("#nsacola").css('background','green');
$("#nsacola").css('font-weight','bold');
} else if (nroption == '1'){
$('#NRtype').html('5G SA');
$("#NRtype").css('color','#00f600');
$('#btnSA').prop('checked', false);
$("#sacol").css('color','yellow');
$("#sacol").css('background','green');
$("#sacol").css('font-weight','bold');
$('#btnSAa').prop('checked', false);
$("#sacola").css('color','yellow');
$("#sacola").css('background','green');
$("#sacola").css('font-weight','bold');
} else if (nroption == '2'){
$('#NRtype').html('5G SA+NSA');
$("#NRtype").css('color','#007dff');
$('#btnSANSA').prop('checked', false);
$("#sansacol").css('color','yellow');
$("#sansacol").css('background','green');
$("#sansacol").css('font-weight','bold');
$('#btnSANSAa').prop('checked', false);
$("#sansacola").css('color','yellow');
$("#sansacola").css('background','green');
$("#sansacola").css('font-weight','bold');
}
nroption = "<networkOption>" + nroption + "</networkOption>";
}
var nroption = $xml.find('networkOption').text();
$('#NRMode').html($xml.find('networkOption').text());
var NetMode = $xml.find('NetworkMode').text();
$('#LNetMode').html($xml.find('NetworkMode').text());
var NetworkBand = $xml.find('NetworkBand').text();
$('#LNetworkBand').html($xml.find('NetworkBand').text());
var LTEBand = $xml.find('LTEBand').text();
$('#LLTEBand').html($xml.find('LTEBand').text());
if(is4G == true || is4Gplus == true || is3G == false){
var lteband=$xml.find('LTEBand').text();
$('#allowed').html(B4GType(lteband));
}
switch (NetMode){
case '00':
$('#btnAuto').prop('checked', false);
break;
case '01':
$('#btn2G').prop('checked', false);
break;
case '02':
$('#btn3G').prop('checked', false);
break;
case '03':
$('#btnLTE').prop('checked', false);
break;
case '08':
$('#btnNR').prop("checked", false);
break;
}
(NetworkBand);
(LTEBand);
});
}

function ReadHardBand(){
$.get(link + 'api/net/net-mode-list', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
var NetMode = $xml.find('Access').text();
if (NetMode.indexOf("00") > -1){
$("#sAuto").css('display','');
} else {
$("#sAuto").css('display','none');
}
if (NetMode.indexOf("01") > -1){
$("#s2G").css('display','');
} else {
$("#s2G").css('display','none');
}
if (NetMode.indexOf("02") > -1){
$("#s3G").css('display','');
$("#ss3G").css('display','');
} else {
$("#s3G").css('display','none');
$("#ss3G").css('display','none');
}
if (NetMode.indexOf("03") > -1){
$("#s4G").css('display','');
$("#ss4G").css('display','');
} else {
$("#s4G").css('display','none');
$("#ss4G").css('display','none');
}
if (NetMode.indexOf("08") > -1){
$("#s5G").css('display','');
$("#ss5G").css('display','');
$("#nricon").css('display','');
$("#NRModefn").css('display','');
} else {
$("#s5G").css('display','none');
$("#ss5G").css('display','none');
$("#nricon").css('display','none');
$("#NRModefn").css('display','none');
}

if ($xml.find('Access').text() == "", passType == 0){
setTimeout(function(){window.location.reload();},1000);
} else {
}
var BandList = $xml.find('BandList').text();
$('#BandList').html($xml.find('BandList').text());
var xmlt = xml.slice(xml.indexOf("<BandList>"), xml.indexOf("</BandList>"));
if (xmlt.indexOf("All bands") > -1){
xmlt = xmlt.slice(0, xmlt.indexOf("All bands"));
}
var val = '';
while (xmlt.indexOf("<Value>") > -1){
val = xmlt.slice(xmlt.indexOf("<Value>") + 7, xmlt.indexOf("</Value>"));
show3G(val);
xmlt = xmlt.replace('<Value>' + val + '</Value>', "");
}
xmlt = xml.slice(xml.indexOf("<LTEBand>"), xml.indexOf("</LTEBand>"));
val = xmlt.slice(xmlt.indexOf("<Value>") + 7, xmlt.indexOf("</Value>"));
show4G(val);
(BandList);
});
}

function show3G(val){
var x = hex_to_bin(val);
x = x.split("").reverse().join("");
if (x.charAt(22) == '1'){
$("#WB1").css('display','');
$("#sWB1").css('display','');
} else {
$("#WB1").css('display','none');
$("#sWB1").css('display','none');
}
if (x.charAt(23) == '1'){
$("#WB2").css('display','');
$("#sWB2").css('display','');
} else {
$("#WB2").css('display','none');
$("#sWB2").css('display','none');
}
if (x.charAt(25) == '1'){
$("#WB4").css('display','');
$("#sWB4").css('display','');
} else {
$("#WB4").css('display','none');
$("#sWB4").css('display','none');
}
if (x.charAt(26) == '1'){
$("#WB5").css('display','');
$("#sWB5").css('display','');
} else {
$("#WB5").css('display','none');
$("#sWB5").css('display','none');
}
if (x.charAt(27) == '1'){
$("#WB6").css('display','');
$("#sWB6").css('display','');
} else {
$("#WB6").css('display','none');
$("#sWB6").css('display','none');
}
if (x.charAt(49) == '1'){
$("#WB8").css('display','');
$("#sWB8").css('display','');
} else {
$("#WB8").css('display','none');
$("#sWB8").css('display','none');
}
if (x.charAt(50) == '1'){
$("#WB9").css('display','');
$("#sWB9").css('display','');
} else {
$("#WB9").css('display','none');
$("#sWB9").css('display','none');
}
if (x.charAt(60) == '1'){
$("#WB19").css('display','');
$("#sWB19").css('display','');
} else {
$("#WB19").css('display','none');
$("#sWB19").css('display','none');
}
}

function show4G(val){
var x = hex_to_bin(val);
x = '2' + x.split("").reverse().join("");
if (x.charAt(1) == '1'){
$("#B1").css('display','');
$("#sB1").css('display','');
} else {
$("#B1").css('display','none');
$("#sB1").css('display','none');
}
if (x.charAt(2) == '1'){
$("#B2").css('display','');
$("#sB2").css('display','');
} else {
$("#B2").css('display','none');
$("#sB2").css('display','none');
}
if (x.charAt(3) == '1'){
$("#B3").css('display','');
$("#sB3").css('display','');
} else {
$("#B3").css('display','none');
$("#sB3").css('display','none');
}
if (x.charAt(4) == '1'){
$("#B4").css('display','');
$("#sB4").css('display','');
} else {
$("#B4").css('display','none');
$("#sB4").css('display','none');
}
if (x.charAt(5) == '1'){
$("#B5").css('display','');
$("#sB5").css('display','');
} else {
$("#B5").css('display','none');
$("#sB5").css('display','none');
}
if (x.charAt(7) == '1'){
$("#B7").css('display','');
$("#sB7").css('display','');
} else {
$("#B7").css('display','none');
$("#sB7").css('display','none');
}
if (x.charAt(8) == '1'){
$("#B8").css('display','');
$("#sB8").css('display','');
} else {
$("#B8").css('display','none');
$("#sB8").css('display','none');
}
if (x.charAt(12) == '1'){
$("#B12").css('display','');
$("#sB12").css('display','');
} else {
$("#B12").css('display','none');
$("#sB12").css('display','none');
}
if (x.charAt(13) == '1'){
$("#B13").css('display','');
$("#sB13").css('display','');
} else {
$("#B13").css('display','none');
$("#sB13").css('display','none');
}
if (x.charAt(17) == '1'){
$("#B17").css('display','');
$("#sB17").css('display','');
} else {
$("#B17").css('display','none');
$("#sB17").css('display','none');
}
if (x.charAt(18) == '1'){
$("#B18").css('display','');
$("#sB18").css('display','');
} else {
$("#B18").css('display','none');
$("#sB18").css('display','none');
}
if (x.charAt(19) == '1'){
$("#B19").css('display','');
$("#sB19").css('display','');
} else {
$("#B19").css('display','none');
$("#sB19").css('display','none');
}
if (x.charAt(20) == '1'){
$("#B20").css('display','');
$("#sB20").css('display','');
} else {
$("#B20").css('display','none');
$("#sB20").css('display','none');
}
if (x.charAt(25) == '1'){
$("#B25").css('display','');
$("#sB25").css('display','');
} else {
$("#B25").css('display','none');
$("#sB25").css('display','none');
}
if (x.charAt(26) == '1'){
$("#B26").css('display','');
$("#sB26").css('display','');
} else {
$("#B26").css('display','none');
$("#sB26").css('display','none');
}
if (x.charAt(27) == '1'){
$("#B27").css('display','');
$("#sB27").css('display','');
} else {
$("#B27").css('display','none');
$("#sB27").css('display','none');
}
if (x.charAt(28) == '1'){
$("#B28").css('display','');
$("#sB28").css('display','');
} else {
$("#B28").css('display','none');
$("#sB28").css('display','none');
}
if (x.charAt(29) == '1'){
$("#B29").css('display','');
$("#sB29").css('display','');
} else {
$("#B29").css('display','none');
$("#sB29").css('display','none');
}
if (x.charAt(30) == '1'){
$("#B30").css('display','');
$("#sB30").css('display','');
} else {
$("#B30").css('display','none');
$("#sB30").css('display','none');
}
if (x.charAt(32) == '1'){
$("#B32").css('display','');
$("#sB32").css('display','');
} else {
$("#B32").css('display','none');
$("#sB32").css('display','none');
}
if (x.charAt(34) == '1'){
$("#B34").css('display','');
$("#sB34").css('display','');
} else {
$("#B34").css('display','none');
$("#sB34").css('display','none');
}
if (x.charAt(38) == '1'){
$("#B38").css('display','');
$("#sB38").css('display','');
} else {
$("#B38").css('display','none');
$("#sB38").css('display','none');
}
if (x.charAt(39) == '1'){
$("#B39").css('display','');
$("#sB39").css('display','');
} else {
$("#B39").css('display','none');
$("#sB39").css('display','none');
}
if (x.charAt(40) == '1'){
$("#B40").css('display','');
$("#sB40").css('display','');
} else {
$("#B40").css('display','none');
$("#sB40").css('display','none');
}
if (x.charAt(41) == '1'){
$("#B41").css('display','');
$("#sB41").css('display','');
} else {
$("#B41").css('display','none');
$("#sB41").css('display','none');
}
if (x.charAt(42) == '1'){
$("#B42").css('display','');
$("#sB42").css('display','');
} else {
$("#B42").css('display','none');
$("#sB42").css('display','none');
}
if (x.charAt(43) == '1'){
$("#B43").css('display','');
$("#sB43").css('display','');
} else {
$("#B43").css('display','none');
$("#sB43").css('display','none');
}
if (x.charAt(44) == '1'){
$("#B44").css('display','');
$("#sB44").css('display','');
} else {
$("#B44").css('display','none');
$("#sB44").css('display','none');
}
if (x.charAt(46) == '1'){
$("#B46").css('display','');
$("#sB46").css('display','');
} else {
$("#B46").css('display','none');
$("#sB46").css('display','none');
}
if (x.charAt(47) == '1'){
$("#B47").css('display','');
$("#sB47").css('display','');
} else {
$("#B47").css('display','none');
$("#sB47").css('display','none');
}
if (x.charAt(48) == '1'){
$("#B48").css('display','');
$("#sB48").css('display','');
} else {
$("#B48").css('display','none');
$("#sB48").css('display','none');
}
if (x.charAt(49) == '1'){
$("#B49").css('display','');
$("#sB49").css('display','');
} else {
$("#B49").css('display','none');
$("#sB49").css('display','none');
}
if (x.charAt(50) == '1'){
$("#B50").css('display','');
$("#sB50").css('display','');
} else {
$("#B50").css('display','none');
$("#sB50").css('display','none');
}
if (x.charAt(51) == '1'){
$("#B51").css('display','');
$("#sB51").css('display','');
} else {
$("#B51").css('display','none');
$("#sB51").css('display','none');
}
if (x.charAt(52) == '1'){
$("#B52").css('display','');
$("#sB52").css('display','');
} else {
$("#B52").css('display','none');
$("#sB52").css('display','none');
}
if (x.charAt(53) == '1'){
$("#B53").css('display','');
$("#sB53").css('display','');
} else {
$("#B53").css('display','none');
$("#sB53").css('display','none');
}
}

function doConfirm(msg, yesFn, noFn){
var confirmBox = $("#confirmBox");
confirmBox.find(".message").text(msg);
confirmBox.find(".yes,.no").unbind().click(function(){
confirmBox.hide();
});
confirmBox.find(".yes").click(yesFn);
confirmBox.find(".no").click(noFn);
confirmBox.show();
}
$(function(){
$("form").submit(function(e){
e.preventDefault();
var form = this;
doConfirm("Do You Want To Restart The Device ⚠", function yes(){
Restart(1);
}, function no(){
msg("Reboot Canceled");
showM();
});
});
});

$(document).ready(function(){

$('#ReadAntenna').click(function(){
ReadAntenna();
});
$('#SaveAntenna').click(function(){
SaveAntenna();
});
$('#refreship').click(function(){
changeip();
});
$('#speedrun').click(function(){
callOnLoad();
});
$('#speedrun1').click(function(){
callOnLoad();
});
$('#ClearStats').click(function(){
clearStats();
});
$('#ClearStats1').click(function(){
clearStats();
});
$('#accept').click(function(){
setBands();
});
$('#accept1').click(function(){
setBandsa();
});
$('#Reboot').click(function(){
Restart(1);
});
$('#Reboot1').click(function(){
Restart(1);
});
$('#Shutdown').click(function(){
Poweroff(4);
});
$('#Shutdown1').click(function(){
Poweroff(4);
});
$('#dataon').click(function(){
DataConnectOn();
});
$('#dataoff').click(function(){
DataConnectOff();
});
$('#btnAuto').click(function(){
refresh('00','3FFFFFFF','7FFFFFFFFFFFFFFF');
msg("Activating automatic mode");
setTimeout(function(){msgok();},4000);
});
$('#btn2G').click(function(){
refresh('01','3FFFFFFF','7FFFFFFFFFFFFFFF');
msg("The 2G automatic mode is being activated");
setTimeout(function(){msgok();},4000);
});
$('#btn3G').click(function(){
refresh('02','3FFFFFFF','7FFFFFFFFFFFFFFF');
msg("The 3G automatic mode is being activated");
setTimeout(function(){msgok();},4000);
});
$('#btnLTE').click(function(){
refresh('03','3FFFFFFF','7FFFFFFFFFFFFFFF');
msg("The 4G automatic mode is being activated");
setTimeout(function(){msgok();},4000);
});
$('#btn5G').click(function(){
refresh('00','00000000','7FFFFFFFFFFFFFFF');
msg("The 5G automatic mode is being activated");
setTimeout(function(){msgok();},4000);
});

$('#RefreshClient').click(function(){
var table_body = document.getElementById("tbclient");
if (table_body !== "undefined"){
while (table_body.hasChildNodes()){
table_body.removeChild(table_body.lastChild);
}
}
var thead = document.createElement("thead");
thead.innerHTML = "<td class=\"labeldev\" style=\"font-size:smaller\" colspan=\"2\">Networked Devices</td>";
table_body.appendChild(thead);
$.get(link + 'api/wlan/host-list', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
var s1 = '';
while (xml.indexOf('<Host>') > -1){
s1 = xml.slice(xml.indexOf('<Host>'), xml.indexOf('</Host>') + 7);
var tr = document.createElement("tr");
var time = s1.slice(s1.indexOf('<AssociatedTime>') + 16, s1.indexOf('</AssociatedTime>'));
if(time!=''){
time = getTime(time);
}
tr.innerHTML = "<td style=font-size:7px;color:#00f7ff>WIFI" + "<br/>" + "<span style=font-weight:bold;font-size:10px;color:#ff0000;text-align:center>" + s1.slice(s1.indexOf('<HostName>') + 10, s1.indexOf('</HostName>')) + "</td>" +
"<td style=font-weight:bold;font-size:8px;text-align:left;color:#10df10>" +
"<span style=font-weight:bold;font-size:9px;text-align:left;color:#cad809>&nbsp;IP:&nbsp;</span>" + s1.slice(s1.indexOf('<IpAddress>') + 10, s1.indexOf('</IpAddress>')).replace('>','').replace(';','<br>&nbsp;IPv6:&nbsp;') + "<br/>" +
"<span style=font-weight:bold;font-size:9px;text-align:left;color:#cad809>&nbsp;MAC:&nbsp;</span>" + s1.slice(s1.indexOf('<MacAddress>') + 12, s1.indexOf('</MacAddress>')) + "<br/>" +
"<span style=font-weight:bold;font-size:9px;text-align:left;color:#cad809>&nbsp;Time:&nbsp;</span>" + time + "</td>";
table_body.appendChild(tr);
xml = xml.replace(s1, '');
}
});
var thead = document.createElement("thead");
thead.innerHTML = "";
table_body.appendChild(thead);
$.get(link + 'api/lan/HostInfo', function(data){
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
var s1 = '';
while (xml.indexOf('<Host>') > -1){
s1 = xml.slice(xml.indexOf('<Host>'), xml.indexOf('</Host>') + 7);
var time = s1.slice(s1.indexOf('<AssociatedTime>') + 16, s1.indexOf('</AssociatedTime>'));
if (time != ''){
time = getTime(time);
}
var tr = document.createElement("tr");
var tActiv = '';
if (s1.indexOf('<Active>1') !== -1){
tActiv = s1.slice(s1.indexOf('<Active>1') + 1, s1.indexOf('</Active>'));
var tInterface = '';
if (s1.indexOf('<InterfaceType>Ethernet') !== -1){
tInterface = s1.slice(s1.indexOf('<InterfaceType>') + 1, s1.indexOf('</InterfaceType>'));
tr.innerHTML = "<td style=font-size:7px;color:#00f7ff>LAN" + "<br/>" + "<span style=font-weight:bold;font-size:10px;color:#ff0000;text-align:center>" + s1.slice(s1.indexOf('<HostName>') + 10, s1.indexOf('</HostName>')) + "</td>" +
"<td style=font-weight:bold;font-size:8px;text-align:left;color:#10df10>" +
"<span style=font-weight:bold;font-size:9px;text-align:left;color:#cad809>&nbsp;IP:&nbsp;</span>" + s1.slice(s1.indexOf('<IpAddress>') + 10, s1.indexOf('</IpAddress>')).replace('>','').replace(';','<br>&nbsp;IPv6:&nbsp;') + "<br/>" +
"<span style=font-weight:bold;font-size:9px;text-align:left;color:#cad809>&nbsp;MAC:&nbsp;</span>" + s1.slice(s1.indexOf('<MacAddress>') + 12, s1.indexOf('</MacAddress>')) + "<br/>" +
"<span style=font-weight:bold;font-size:9px;text-align:left;color:#cad809>&nbsp;Time:&nbsp;</span>" + time + "</td>";
}
}
table_body.appendChild(tr);
xml = xml.replace(s1, '');
}
});
});
});
