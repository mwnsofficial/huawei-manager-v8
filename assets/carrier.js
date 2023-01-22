function PlmnPh() {
$.get(link + 'api/net/current-plmn', function(data) {
var xml = data,
xmlDoc = $.parseXML(xml),
$xml = $(xmlDoc);
var numeric = $xml.find('Numeric').text();
$('#num').html(numeric);
$("#photo").css('display', '');
if ($xml.find('Numeric').text() == "41201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/afghanistan/afghan-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Afghanistan');
$("#flag").html('🇦🇫');
$("#photo").css('background', 'url(carriers/1.png)');
} else if ($xml.find('Numeric').text() == "41250") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/afghanistan/etisalat/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Afghanistan');
$("#flag").html('🇦🇫');
$("#photo").css('background', 'url(carriers/2.png)');
} else if ($xml.find('Numeric').text() == "41240") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/afghanistan/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Afghanistan');
$("#flag").html('🇦🇫');
$("#photo").css('background', 'url(carriers/3.png)');
} else if ($xml.find('Numeric').text() == "41220") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/afghanistan/roshan/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Afghanistan');
$("#flag").html('🇦🇫');
$("#photo").css('background', 'url(carriers/4.png)');
} else if ($xml.find('Numeric').text() == "41280") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/afghanistan/salaam/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Afghanistan');
$("#flag").html('🇦🇫');
$("#photo").css('background', 'url(carriers/5.png)');
} else if ($xml.find('Numeric').text() == "41255") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/afghanistan/wasel-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Afghanistan');
$("#flag").html('🇦🇫');
$("#photo").css('background', 'url(carriers/6.png)');

} else if ($xml.find('Numeric').text() == "27603") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/albania/albtelecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Albania');
$("#flag").html('🇦🇱');
$("#photo").css('background', 'url(carriers/7.png)');
} else if ($xml.find('Numeric').text() == "27601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/albania/telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Albania');
$("#flag").html('🇦🇱');
$("#photo").css('background', 'url(carriers/8.png)');
} else if ($xml.find('Numeric').text() == "27602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/albania/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Albania');
$("#flag").html('🇦🇱');
$("#photo").css('background', 'url(carriers/9.png)');

} else if ($xml.find('Numeric').text() == "60302") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/algeria/djezzy/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Algeria');
$("#flag").html('🇩🇿');
$("#photo").css('background', 'url(carriers/10.png)');
} else if ($xml.find('Numeric').text() == "60301") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/algeria/mobilis/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Algeria');
$("#flag").html('🇩🇿');
$("#photo").css('background', 'url(carriers/11.png)');
} else if ($xml.find('Numeric').text() == "60303") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/algeria/ooredoo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Algeria');
$("#flag").html('🇩🇿');
$("#photo").css('background', 'url(carriers/12.png)');

} else if ($xml.find('Numeric').text() == "54411") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/american-samoa/bluesky/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('American Samoa');
$("#flag").html('🇦🇸');
$("#photo").css('background', 'url(carriers/13.png)');

} else if ($xml.find('Numeric').text() == "21303") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/andorra/andorra-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Andorra');
$("#flag").html('🇦🇩');
$("#photo").css('background', 'url(carriers/14.png)');

} else if ($xml.find('Numeric').text() == "63104") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/angola/movicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Angola');
$("#flag").html('🇦🇴');
$("#photo").css('background', 'url(carriers/15.png)');
} else if ($xml.find('Numeric').text() == "63102") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/angola/unitel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Angola');
$("#flag").html('🇦🇴');
$("#photo").css('background', 'url(carriers/16.png)');

} else if ($xml.find('Numeric').text() == "365010") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/anguilla/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Anguilla');
$("#flag").html('🇦🇮');
$("#photo").css('background', 'url(carriers/17.png)');
} else if ($xml.find('Numeric').text() == "365840") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/anguilla/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Anguilla');
$("#flag").html('🇦🇮');
$("#photo").css('background', 'url(carriers/18.png)');

} else if ($xml.find('Numeric').text() == "344030") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/antigua-and-barbuda/apua/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Antigua and Barbuda');
$("#flag").html('🇦🇬');
$("#photo").css('background', 'url(carriers/19.png)');
} else if ($xml.find('Numeric').text() == "344050") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/antigua-and-barbuda/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Antigua and Barbuda');
$("#flag").html('🇦🇬');
$("#photo").css('background', 'url(carriers/20.png)');
} else if ($xml.find('Numeric').text() == "344920") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/antigua-and-barbuda/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Antigua and Barbuda');
$("#flag").html('🇦🇬');
$("#photo").css('background', 'url(carriers/21.png)');

} else if ($xml.find('Numeric').text() == "722310") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/argentina/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Argentina');
$("#flag").html('🇦🇷');
$("#photo").css('background', 'url(carriers/22.png)');
} else if ($xml.find('Numeric').text() == "722010") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/argentina/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Argentina');
$("#flag").html('🇦🇷');
$("#photo").css('background', 'url(carriers/23.png)');
} else if ($xml.find('Numeric').text() == "722020") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/argentina/nextel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Argentina');
$("#flag").html('🇦🇷');
$("#photo").css('background', 'url(carriers/24.png)');
} else if ($xml.find('Numeric').text() == "722034") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/argentina/personal/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Argentina');
$("#flag").html('🇦🇷');
$("#photo").css('background', 'url(carriers/25.png)');

} else if ($xml.find('Numeric').text() == "28301") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/armenia/beeline/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Armenia');
$("#flag").html('🇦🇲');
$("#photo").css('background', 'url(carriers/26.png)');
} else if ($xml.find('Numeric').text() == "28304") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/armenia/karabakh-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Armenia');
$("#flag").html('🇦🇲');
$("#photo").css('background', 'url(carriers/27.png)');
} else if ($xml.find('Numeric').text() == "28310") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/armenia/ucom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Armenia');
$("#flag").html('🇦🇲');
$("#photo").css('background', 'url(carriers/28.png)');
} else if ($xml.find('Numeric').text() == "28305") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/armenia/vivacell-mts/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Armenia');
$("#flag").html('🇦🇲');
$("#photo").css('background', 'url(carriers/29.png)');

} else if ($xml.find('Numeric').text() == "36302") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/aruba/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Aruba');
$("#flag").html('🇦🇼');
$("#photo").css('background', 'url(carriers/30.png)');
} else if ($xml.find('Numeric').text() == "36301") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/aruba/setar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Aruba');
$("#flag").html('🇦🇼');
$("#photo").css('background', 'url(carriers/31.png)');

} else if ($xml.find('Numeric').text() == "50506") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/australia/3/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Australia');
$("#flag").html('🇦🇺');
$("#photo").css('background', 'url(carriers/32.png)');
} else if ($xml.find('Numeric').text() == "50514") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/australia/aapt/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Australia');
$("#flag").html('🇦🇺');
$("#photo").css('background', 'url(carriers/33.png)');
} else if ($xml.find('Numeric').text() == "50524") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/australia/advanced-communications-technologies/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Australia');
$("#flag").html('🇦🇺');
$("#photo").css('background', 'url(carriers/34.png)');
} else if ($xml.find('Numeric').text() == "50504") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/australia/department-of-defence/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Australia');
$("#flag").html('🇦🇺');
$("#photo").css('background', 'url(carriers/35.png)');
} else if ($xml.find('Numeric').text() == "50510") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/australia/norfolk-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Australia');
$("#flag").html('🇦🇺');
$("#photo").css('background', 'url(carriers/36.png)');
} else if ($xml.find('Numeric').text() == "50508") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/australia/one-tel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Australia');
$("#flag").html('🇦🇺');
$("#photo").css('background', 'url(carriers/37.png)');
} else if ($xml.find('Numeric').text() == "50536") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/australia/optus/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Australia');
$("#flag").html('🇦🇺');
$("#photo").css('background', 'url(carriers/38.png)');
} else if ($xml.find('Numeric').text() == "50521") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/australia/soul/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Australia');
$("#flag").html('🇦🇺');
$("#photo").css('background', 'url(carriers/39.png)');
} else if ($xml.find('Numeric').text() == "50501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/australia/telstra/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Australia');
$("#flag").html('🇦🇺');
$("#photo").css('background', 'url(carriers/40.png)');
} else if ($xml.find('Numeric').text() == "50538") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/australia/crazy-johns/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Australia');
$("#flag").html('🇦🇺');
$("#photo").css('background', 'url(carriers/41.png)');
} else if ($xml.find('Numeric').text() == "50502") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/australia/virgin-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Australia');
$("#flag").html('🇦🇺');
$("#photo").css('background', 'url(carriers/42.png)');
} else if ($xml.find('Numeric').text() == "50503") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/australia/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Australia');
$("#flag").html('🇦🇺');
$("#photo").css('background', 'url(carriers/43.png)');

} else if ($xml.find('Numeric').text() == "23205") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/austria/3/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Alnamsa');
$("#flag").html('🇦🇹');
$("#photo").css('background', 'url(carriers/44.png)');
} else if ($xml.find('Numeric').text() == "23201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/austria/a1/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Alnamsa');
$("#flag").html('🇦🇹');
$("#photo").css('background', 'url(carriers/45.png)');
} else if ($xml.find('Numeric').text() == "23211") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/austria/bob/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Alnamsa');
$("#flag").html('🇦🇹');
$("#photo").css('background', 'url(carriers/46.png)');
} else if ($xml.find('Numeric').text() == "23208") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/austria/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Alnamsa');
$("#flag").html('🇦🇹');
$("#photo").css('background', 'url(carriers/47.png)');
} else if ($xml.find('Numeric').text() == "23206") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/austria/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Alnamsa');
$("#flag").html('🇦🇹');
$("#photo").css('background', 'url(carriers/48.png)');
} else if ($xml.find('Numeric').text() == "23203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/austria/t-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Alnamsa');
$("#flag").html('🇦🇹');
$("#photo").css('background', 'url(carriers/49.png)');
} else if ($xml.find('Numeric').text() == "23207") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/austria/telering/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Alnamsa');
$("#flag").html('🇦🇹');
$("#photo").css('background', 'url(carriers/50.png)');
} else if ($xml.find('Numeric').text() == "23215") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/austria/vectone-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Alnamsa');
$("#flag").html('🇦🇹');
$("#photo").css('background', 'url(carriers/51.png)');
} else if ($xml.find('Numeric').text() == "23212") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/austria/yesss/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Alnamsa');
$("#flag").html('🇦🇹');
$("#photo").css('background', 'url(carriers/52.png)');

} else if ($xml.find('Numeric').text() == "40001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/azerbaijan/azercell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Azerbaijan');
$("#flag").html('🇦🇿');
$("#photo").css('background', 'url(carriers/53.png)');
} else if ($xml.find('Numeric').text() == "40002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/azerbaijan/bakcell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Azerbaijan');
$("#flag").html('🇦🇿');
$("#photo").css('background', 'url(carriers/54.png)');
} else if ($xml.find('Numeric').text() == "40004") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/azerbaijan/nar-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Azerbaijan');
$("#flag").html('🇦🇿');
$("#photo").css('background', 'url(carriers/55.png)');
} else if ($xml.find('Numeric').text() == "40006") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/azerbaijan/naxtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Azerbaijan');
$("#flag").html('🇦🇿');
$("#photo").css('background', 'url(carriers/56.png)');

} else if ($xml.find('Numeric').text() == "36449") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bahamas/aliv/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bahamas');
$("#flag").html('🇧🇸');
$("#photo").css('background', 'url(carriers/57.png)');
} else if ($xml.find('Numeric').text() == "36439") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bahamas/btc/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bahamas');
$("#flag").html('🇧🇸');
$("#photo").css('background', 'url(carriers/58.png)');

} else if ($xml.find('Numeric').text() == "42601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bahrain/batelco/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bahrain');
$("#flag").html('🇧🇭');
$("#photo").css('background', 'url(carriers/59.png)');
} else if ($xml.find('Numeric').text() == "42604") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bahrain/viva/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bahrain');
$("#flag").html('🇧🇭');
$("#photo").css('background', 'url(carriers/60.png)');
} else if ($xml.find('Numeric').text() == "42602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bahrain/zain/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bahrain');
$("#flag").html('🇧🇭');
$("#photo").css('background', 'url(carriers/61.png)');

} else if ($xml.find('Numeric').text() == "47007") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bangladesh/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bangladesh');
$("#flag").html('🇧🇩');
$("#photo").css('background', 'url(carriers/62.png)');
} else if ($xml.find('Numeric').text() == "47003") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bangladesh/banglalink/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bangladesh');
$("#flag").html('🇧🇩');
$("#photo").css('background', 'url(carriers/63.png)');
} else if ($xml.find('Numeric').text() == "47010") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bangladesh/banglalion/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bangladesh');
$("#flag").html('🇧🇩');
$("#photo").css('background', 'url(carriers/64.png)');
} else if ($xml.find('Numeric').text() == "47001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bangladesh/grameenphone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bangladesh');
$("#flag").html('🇧🇩');
$("#photo").css('background', 'url(carriers/65.png)');
} else if ($xml.find('Numeric').text() == "47009") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bangladesh/ollo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bangladesh');
$("#flag").html('🇧🇩');
$("#photo").css('background', 'url(carriers/66.png)');
} else if ($xml.find('Numeric').text() == "47002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bangladesh/robi/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bangladesh');
$("#flag").html('🇧🇩');
$("#photo").css('background', 'url(carriers/67.png)');
} else if ($xml.find('Numeric').text() == "47004") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bangladesh/teletalk/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bangladesh');
$("#flag").html('🇧🇩');
$("#photo").css('background', 'url(carriers/68.png)');

} else if ($xml.find('Numeric').text() == "342750") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/barbados/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Barbados');
$("#flag").html('🇧🇧');
$("#photo").css('background', 'url(carriers/69.png)');
} else if ($xml.find('Numeric').text() == "342600") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/barbados/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Barbados');
$("#flag").html('🇧🇧');
$("#photo").css('background', 'url(carriers/70.png)');
} else if ($xml.find('Numeric').text() == "342800") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/barbados/ozone-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Barbados');
$("#flag").html('🇧🇧');
$("#photo").css('background', 'url(carriers/71.png)');

} else if ($xml.find('Numeric').text() == "25701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/belarus/a1/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Belarus');
$("#flag").html('🇧🇾');
$("#photo").css('background', 'url(carriers/72.png)');
} else if ($xml.find('Numeric').text() == "25706") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/belarus/becloud/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Belarus');
$("#flag").html('🇧🇾');
$("#photo").css('background', 'url(carriers/73.png)');
} else if ($xml.find('Numeric').text() == "25704") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/belarus/life/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Belarus');
$("#flag").html('🇧🇾');
$("#photo").css('background', 'url(carriers/74.png)');
} else if ($xml.find('Numeric').text() == "25702") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/belarus/mts/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Belarus');
$("#flag").html('🇧🇾');
$("#photo").css('background', 'url(carriers/75.png)');

} else if ($xml.find('Numeric').text() == "20620") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/belgium/base/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Belgium');
$("#flag").html('🇧🇪');
$("#photo").css('background', 'url(carriers/76.png)');
} else if ($xml.find('Numeric').text() == "20606") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/belgium/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Belgium');
$("#flag").html('🇧🇪');
$("#photo").css('background', 'url(carriers/77.png)');
} else if ($xml.find('Numeric').text() == "20630") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/belgium/mobile-vikings/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Belgium');
$("#flag").html('🇧🇪');
$("#photo").css('background', 'url(carriers/78.png)');
} else if ($xml.find('Numeric').text() == "20610") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/belgium/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Belgium');
$("#flag").html('🇧🇪');
$("#photo").css('background', 'url(carriers/79.png)');
} else if ($xml.find('Numeric').text() == "20601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/belgium/proximus/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Belgium');
$("#flag").html('🇧🇪');
$("#photo").css('background', 'url(carriers/80.png)');
} else if ($xml.find('Numeric').text() == "20605") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/belgium/telenet/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Belgium');
$("#flag").html('🇧🇪');
$("#photo").css('background', 'url(carriers/81.png)');

} else if ($xml.find('Numeric').text() == "70267") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/belize/digicell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Belize');
$("#flag").html('🇧🇿');
$("#photo").css('background', 'url(carriers/82.png)');
} else if ($xml.find('Numeric').text() == "70269") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/belize/smart/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Belize');
$("#flag").html('🇧🇿');
$("#photo").css('background', 'url(carriers/83.png)');

} else if ($xml.find('Numeric').text() == "61601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/benin/benin-telecoms/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Benin');
$("#flag").html('🇧🇯');
$("#photo").css('background', 'url(carriers/84.png)');
} else if ($xml.find('Numeric').text() == "61605") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/benin/glo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Benin');
$("#flag").html('🇧🇯');
$("#photo").css('background', 'url(carriers/85.png)');
} else if ($xml.find('Numeric').text() == "61602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/benin/moov/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Benin');
$("#flag").html('🇧🇯');
$("#photo").css('background', 'url(carriers/86.png)');
} else if ($xml.find('Numeric').text() == "61603") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/benin/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Benin');
$("#flag").html('🇧🇯');
$("#photo").css('background', 'url(carriers/87.png)');

} else if ($xml.find('Numeric').text() == "35000") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bermudas/cellone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bermuda');
$("#flag").html('🇧🇲');
$("#photo").css('background', 'url(carriers/88.png)');
} else if ($xml.find('Numeric').text() == "338050") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bermudas/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bermuda');
$("#flag").html('🇧🇲');
$("#photo").css('background', 'url(carriers/89.png)');

} else if ($xml.find('Numeric').text() == "40211") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bhutan/bhutan-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bhutan');
$("#flag").html('🇧🇹');
$("#photo").css('background', 'url(carriers/90.png)');
} else if ($xml.find('Numeric').text() == "40177") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bhutan/tashi-cell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bhutan');
$("#flag").html('🇧🇹');
$("#photo").css('background', 'url(carriers/91.png)');

} else if ($xml.find('Numeric').text() == "73602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bolivia/entel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bolivia');
$("#flag").html('🇧🇴');
$("#photo").css('background', 'url(carriers/92.png)');
} else if ($xml.find('Numeric').text() == "73603") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bolivia/tigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bolivia');
$("#flag").html('🇧🇴');
$("#photo").css('background', 'url(carriers/93.png)');
} else if ($xml.find('Numeric').text() == "73601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bolivia/viva/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bolivia');
$("#flag").html('🇧🇴');
$("#photo").css('background', 'url(carriers/94.png)');

} else if ($xml.find('Numeric').text() == "21890") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bosnia-and-herzegovina/bh-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bosnia-and-herzegovina');
$("#flag").html('🇧🇦');
$("#photo").css('background', 'url(carriers/95.png)');
} else if ($xml.find('Numeric').text() == "21803") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bosnia-and-herzegovina/ht-eronet/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bosnia-and-herzegovina');
$("#flag").html('🇧🇦');
$("#photo").css('background', 'url(carriers/96.png)');
} else if ($xml.find('Numeric').text() == "21805") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bosnia-and-herzegovina/mtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bosnia-and-herzegovina');
$("#flag").html('🇧🇦');
$("#photo").css('background', 'url(carriers/97.png)');

} else if ($xml.find('Numeric').text() == "65204") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/botswana/btc-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Botswana');
$("#flag").html('🇧🇼');
$("#photo").css('background', 'url(carriers/98.png)');
} else if ($xml.find('Numeric').text() == "65201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/botswana/mascom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Botswana');
$("#flag").html('🇧🇼');
$("#photo").css('background', 'url(carriers/99.png)');
} else if ($xml.find('Numeric').text() == "65202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/botswana/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Botswana');
$("#flag").html('🇧🇼');
$("#photo").css('background', 'url(carriers/100.png)');

} else if ($xml.find('Numeric').text() == "72432") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brazil/algar-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brazil');
$("#flag").html('🇧🇷');
$("#photo").css('background', 'url(carriers/101.png)');
} else if ($xml.find('Numeric').text() == "72424") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brazil/amazonia-celular/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brazil');
$("#flag").html('🇧🇷');
$("#photo").css('background', 'url(carriers/102.png)');
} else if ($xml.find('Numeric').text() == "72416") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brazil/brasil-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brazil');
$("#flag").html('🇧🇷');
$("#photo").css('background', 'url(carriers/103.png)');
} else if ($xml.find('Numeric').text() == "72405") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brazil/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brazil');
$("#flag").html('🇧🇷');
$("#photo").css('background', 'url(carriers/104.png)');
} else if ($xml.find('Numeric').text() == "72417") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brazil/correios/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brazil');
$("#flag").html('🇧🇷');
$("#photo").css('background', 'url(carriers/105.png)');
} else if ($xml.find('Numeric').text() == "72418") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brazil/datora/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brazil');
$("#flag").html('🇧🇷');
$("#photo").css('background', 'url(carriers/106.png)');
} else if ($xml.find('Numeric').text() == "72400") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brazil/nextel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brazil');
$("#flag").html('🇧🇷');
$("#photo").css('background', 'url(carriers/107.png)');
} else if ($xml.find('Numeric').text() == "72430") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brazil/oi/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brazil');
$("#flag").html('🇧🇷');
$("#photo").css('background', 'url(carriers/108.png)');
} else if ($xml.find('Numeric').text() == "72415") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brazil/sercomtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brazil');
$("#flag").html('🇧🇷');
$("#photo").css('background', 'url(carriers/109.png)');
} else if ($xml.find('Numeric').text() == "72402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brazil/tim/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brazil');
$("#flag").html('🇧🇷');
$("#photo").css('background', 'url(carriers/110.png)');
} else if ($xml.find('Numeric').text() == "72406") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brazil/vivo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brazil');
$("#flag").html('🇧🇷');
$("#photo").css('background', 'url(carriers/111.png)');

} else if ($xml.find('Numeric').text() == "348570") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/british-virgin-islands/cct/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('British-virgin-islands');
$("#flag").html('🇻🇬');
$("#photo").css('background', 'url(carriers/112.png)');
} else if ($xml.find('Numeric').text() == "348770") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/british-virgin-islands/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('British-virgin-islands');
$("#flag").html('🇻🇬');
$("#photo").css('background', 'url(carriers/113.png)');
} else if ($xml.find('Numeric').text() == "348170") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/british-virgin-islands/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('British-virgin-islands');
$("#flag").html('🇻🇬');
$("#photo").css('background', 'url(carriers/114.png)');

} else if ($xml.find('Numeric').text() == "52811") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brunei/dst/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brunei');
$("#flag").html('🇧🇳');
$("#photo").css('background', 'url(carriers/115.png)');
} else if ($xml.find('Numeric').text() == "52802") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brunei/progresif/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brunei');
$("#flag").html('🇧🇳');
$("#photo").css('background', 'url(carriers/116.png)');
} else if ($xml.find('Numeric').text() == "52801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/brunei/telekom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Brunei');
$("#flag").html('🇧🇳');
$("#photo").css('background', 'url(carriers/117.png)');

} else if ($xml.find('Numeric').text() == "28401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bulgaria/a1/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bulgaria');
$("#flag").html('🇧🇬');
$("#photo").css('background', 'url(carriers/118.png)');
} else if ($xml.find('Numeric').text() == "28411") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bulgaria/bulsatcom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bulgaria');
$("#flag").html('🇧🇬');
$("#photo").css('background', 'url(carriers/119.png)');
} else if ($xml.find('Numeric').text() == "28413") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bulgaria/max-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bulgaria');
$("#flag").html('🇧🇬');
$("#photo").css('background', 'url(carriers/120.png)');
} else if ($xml.find('Numeric').text() == "28405") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bulgaria/telenor/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bulgaria');
$("#flag").html('🇧🇬');
$("#photo").css('background', 'url(carriers/121.png)');
} else if ($xml.find('Numeric').text() == "28403") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/bulgaria/vivacom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Bulgaria');
$("#flag").html('🇧🇬');
$("#photo").css('background', 'url(carriers/122.png)');

} else if ($xml.find('Numeric').text() == "61301") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/burkina-faso/onatel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Burkina-faso');
$("#flag").html('🇧🇫');
$("#photo").css('background', 'url(carriers/123.png)');
} else if ($xml.find('Numeric').text() == "61302") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/burkina-faso/zain/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Burkina-faso');
$("#flag").html('🇧🇫');
$("#photo").css('background', 'url(carriers/124.png)');
} else if ($xml.find('Numeric').text() == "61303") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/burkina-faso/telecel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Burkina-faso');
$("#flag").html('🇧🇫');
$("#photo").css('background', 'url(carriers/125.png)');

} else if ($xml.find('Numeric').text() == "64201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/burundi/econet/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Burundi');
$("#flag").html('🇧🇮');
$("#photo").css('background', 'url(carriers/126.png)');
} else if ($xml.find('Numeric').text() == "64208") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/burundi/telecel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Burundi');
$("#flag").html('🇧🇮');
$("#photo").css('background', 'url(carriers/127.png)');
} else if ($xml.find('Numeric').text() == "64203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/burundi/onatel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Burundi');
$("#flag").html('🇧🇮');
$("#photo").css('background', 'url(carriers/128.png)');
} else if ($xml.find('Numeric').text() == "64207") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/burundi/smart/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Burundi');
$("#flag").html('🇧🇮');
$("#photo").css('background', 'url(carriers/129.png)');

} else if ($xml.find('Numeric').text() == "45601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cambodia/cellcard/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cambodia');
$("#flag").html('🇰🇭');
$("#photo").css('background', 'url(carriers/130.png)');
} else if ($xml.find('Numeric').text() == "45608") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cambodia/metfone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cambodia');
$("#flag").html('🇰🇭');
$("#photo").css('background', 'url(carriers/131.png)');
} else if ($xml.find('Numeric').text() == "45603") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cambodia/qb/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cambodia');
$("#flag").html('🇰🇭');
$("#photo").css('background', 'url(carriers/132.png)');
} else if ($xml.find('Numeric').text() == "45611") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cambodia/seatel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cambodia');
$("#flag").html('🇰🇭');
$("#photo").css('background', 'url(carriers/133.png)');
} else if ($xml.find('Numeric').text() == "45602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cambodia/smart/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cambodia');
$("#flag").html('🇰🇭');
$("#photo").css('background', 'url(carriers/134.png)');

} else if ($xml.find('Numeric').text() == "62401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cameroon/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cameroon');
$("#flag").html('🇨🇲');
$("#photo").css('background', 'url(carriers/135.png)');
} else if ($xml.find('Numeric').text() == "62404") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cameroon/nexttel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cameroon');
$("#flag").html('🇨🇲');
$("#photo").css('background', 'url(carriers/136.png)');
} else if ($xml.find('Numeric').text() == "62402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cameroon/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cameroon');
$("#flag").html('🇨🇲');
$("#photo").css('background', 'url(carriers/137.png)');

} else if ($xml.find('Numeric').text() == "302290") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/airtel-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/138.png)');
} else if ($xml.find('Numeric').text() == "302610") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/bell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/139.png)');
} else if ($xml.find('Numeric').text() == "302270") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/eastlink/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/140.png)');
} else if ($xml.find('Numeric').text() == "302370") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/fido/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/141.png)');
} else if ($xml.find('Numeric').text() == "302490") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/freedom-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/142.png)');
} else if ($xml.find('Numeric').text() == "302710") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/globalstar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/143.png)');
} else if ($xml.find('Numeric').text() == "302620") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/ice-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/144.png)');
} else if ($xml.find('Numeric').text() == "302380") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/k-net-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/145.png)');
} else if ($xml.find('Numeric').text() == "302220") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/koodo-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/146.png)');
} else if ($xml.find('Numeric').text() == "302660") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/mts/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/147.png)');
} else if ($xml.find('Numeric').text() == "302320") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/rogers-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/148.png)');
} else if ($xml.find('Numeric').text() == "302680") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/sasktel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/149.png)');
} else if ($xml.find('Numeric').text() == "302650") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/tbay-mobility/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/150.png)');
} else if ($xml.find('Numeric').text() == "302220") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/telus/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/151.png)');
} else if ($xml.find('Numeric').text() == "302500") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/videotron/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/152.png)');
} else if ($xml.find('Numeric').text() == "302610") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/virgin-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/153.png)');
} else if ($xml.find('Numeric').text() == "302130") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/canada/xplornet/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Canada');
$("#flag").html('🇨🇦');
$("#photo").css('background', 'url(carriers/154.png)');

} else if ($xml.find('Numeric').text() == "62501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cape-verde/cvmovel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cape-verde');
$("#flag").html('🇨🇻');
$("#photo").css('background', 'url(carriers/155.png)');
} else if ($xml.find('Numeric').text() == "62502") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cape-verde/unitel-t/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cape-verde');
$("#flag").html('🇨🇻');
$("#photo").css('background', 'url(carriers/156.png)');

} else if ($xml.find('Numeric').text() == "346050") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cayman-islands/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cayman-islands');
$("#flag").html('🇰🇾');
$("#photo").css('background', 'url(carriers/157.png)');
} else if ($xml.find('Numeric').text() == "346140") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cayman-islands/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cayman-islands');
$("#flag").html('🇰🇾');
$("#photo").css('background', 'url(carriers/158.png)');

} else if ($xml.find('Numeric').text() == "62304") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/central-african-republic/azur/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Central-african-republic');
$("#flag").html('🇨🇫');
$("#photo").css('background', 'url(carriers/159.png)');
} else if ($xml.find('Numeric').text() == "62301") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/central-african-republic/moov/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Central-african-republic');
$("#flag").html('🇨🇫');
$("#photo").css('background', 'url(carriers/160.png)');
} else if ($xml.find('Numeric').text() == "62303") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/central-african-republic/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Central-african-republic');
$("#flag").html('🇨🇫');
$("#photo").css('background', 'url(carriers/161.png)');
} else if ($xml.find('Numeric').text() == "62302") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/central-african-republic/telecel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Central-african-republic');
$("#flag").html('🇨🇫');
$("#photo").css('background', 'url(carriers/162.png)');

} else if ($xml.find('Numeric').text() == "66201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/chad/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Chad');
$("#flag").html('🇹🇩');
$("#photo").css('background', 'url(carriers/163.png)');
} else if ($xml.find('Numeric').text() == "66207") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/chad/salaam/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Chad');
$("#flag").html('🇹🇩');
$("#photo").css('background', 'url(carriers/164.png)');
} else if ($xml.find('Numeric').text() == "66203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/chad/tigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Chad');
$("#flag").html('🇹🇩');
$("#photo").css('background', 'url(carriers/165.png)');

} else if ($xml.find('Numeric').text() == "73003") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/chile/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Chile');
$("#flag").html('🇨🇱');
$("#photo").css('background', 'url(carriers/166.png)');
} else if ($xml.find('Numeric').text() == "73001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/chile/entel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Chile');
$("#flag").html('🇨🇱');
$("#photo").css('background', 'url(carriers/167.png)');
} else if ($xml.find('Numeric').text() == "73019") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/chile/falabella/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Chile');
$("#flag").html('🇨🇱');
$("#photo").css('background', 'url(carriers/168.png)');
} else if ($xml.find('Numeric').text() == "73002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/chile/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Chile');
$("#flag").html('🇨🇱');
$("#photo").css('background', 'url(carriers/169.png)');
} else if ($xml.find('Numeric').text() == "73004") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/chile/nextel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Chile');
$("#flag").html('🇨🇱');
$("#photo").css('background', 'url(carriers/170.png)');
} else if ($xml.find('Numeric').text() == "73006") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/chile/telsur/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Chile');
$("#flag").html('🇨🇱');
$("#photo").css('background', 'url(carriers/171.png)');
} else if ($xml.find('Numeric').text() == "73013") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/chile/virgin-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Chile');
$("#flag").html('🇨🇱');
$("#photo").css('background', 'url(carriers/172.png)');
} else if ($xml.find('Numeric').text() == "73008") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/chile/vtr-movil/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Chile');
$("#flag").html('🇨🇱');
$("#photo").css('background', 'url(carriers/173.png)');
} else if ($xml.find('Numeric').text() == "73004") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/chile/wom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Chile');
$("#flag").html('🇨🇱');
$("#photo").css('background', 'url(carriers/174.png)');

} else if ($xml.find('Numeric').text() == "46000") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/china/china-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('China');
$("#flag").html('🇨🇳');
$("#photo").css('background', 'url(carriers/175.png)');
} else if ($xml.find('Numeric').text() == "46003") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/china/china-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('China');
$("#flag").html('🇨🇳');
$("#photo").css('background', 'url(carriers/176.png)');
} else if ($xml.find('Numeric').text() == "46020") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/china/china-tietong/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('China');
$("#flag").html('🇨🇳');
$("#photo").css('background', 'url(carriers/177.png)');
} else if ($xml.find('Numeric').text() == "46001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/china/china-unicom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('China');
$("#flag").html('🇨🇳');
$("#photo").css('background', 'url(carriers/178.png)');

} else if ($xml.find('Numeric').text() == "732130") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/colombia/avantel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Colombia');
$("#flag").html('🇨🇴');
$("#photo").css('background', 'url(carriers/179.png)');
} else if ($xml.find('Numeric').text() == "732101") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/colombia/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Colombia');
$("#flag").html('🇨🇴');
$("#photo").css('background', 'url(carriers/180.png)');
} else if ($xml.find('Numeric').text() == "732101") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/colombia/comcel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Colombia');
$("#flag").html('🇨🇴');
$("#photo").css('background', 'url(carriers/181.png)');
} else if ($xml.find('Numeric').text() == "732176") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/colombia/directv/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Colombia');
$("#flag").html('🇨🇴');
$("#photo").css('background', 'url(carriers/182.png)');
} else if ($xml.find('Numeric').text() == "732002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/colombia/edatel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Colombia');
$("#flag").html('🇨🇴');
$("#photo").css('background', 'url(carriers/183.png)');
} else if ($xml.find('Numeric').text() == "732187") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/colombia/etb/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Colombia');
$("#flag").html('🇨🇴');
$("#photo").css('background', 'url(carriers/184.png)');
} else if ($xml.find('Numeric').text() == "732101") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/colombia/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Colombia');
$("#flag").html('🇨🇴');
$("#photo").css('background', 'url(carriers/185.png)');
} else if ($xml.find('Numeric').text() == "732020") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/colombia/tigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Colombia');
$("#flag").html('🇨🇴');
$("#photo").css('background', 'url(carriers/186.png)');
} else if ($xml.find('Numeric').text() == "732154") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/colombia/virgin-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Colombia');
$("#flag").html('🇨🇴');
$("#photo").css('background', 'url(carriers/187.png)');

} else if ($xml.find('Numeric').text() == "65401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/comoros/telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Comoros');
$("#flag").html('🇰🇲');
$("#photo").css('background', 'url(carriers/188.png)');
} else if ($xml.find('Numeric').text() == "65402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/comoros/telma/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Comoros');
$("#flag").html('🇰🇲');
$("#photo").css('background', 'url(carriers/189.png)');

} else if ($xml.find('Numeric').text() == "54801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cook-islands/telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cook-islands');
$("#flag").html('🇨🇰');
$("#photo").css('background', 'url(carriers/190.png)');

} else if ($xml.find('Numeric').text() == "71203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/costa-rica/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Costa-rica');
$("#flag").html('🇨🇷');
$("#photo").css('background', 'url(carriers/191.png)');
} else if ($xml.find('Numeric').text() == "71220") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/costa-rica/fullmovil/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Costa-rica');
$("#flag").html('🇨🇷');
$("#photo").css('background', 'url(carriers/192.png)');
} else if ($xml.find('Numeric').text() == "71201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/costa-rica/kolbi/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Costa-rica');
$("#flag").html('🇨🇷');
$("#photo").css('background', 'url(carriers/193.png)');
} else if ($xml.find('Numeric').text() == "71204") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/costa-rica/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Costa-rica');
$("#flag").html('🇨🇷');
$("#photo").css('background', 'url(carriers/194.png)');

} else if ($xml.find('Numeric').text() == "21910") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/croatia/a1/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Croatia');
$("#flag").html('🇭🇷');
$("#photo").css('background', 'url(carriers/195.png)');
} else if ($xml.find('Numeric').text() == "21912") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/croatia/bonbon/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Croatia');
$("#flag").html('🇭🇷');
$("#photo").css('background', 'url(carriers/196.png)');
} else if ($xml.find('Numeric').text() == "21902") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/croatia/tele2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Croatia');
$("#flag").html('🇭🇷');
$("#photo").css('background', 'url(carriers/197.png)');
} else if ($xml.find('Numeric').text() == "21901") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/croatia/Telekom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Croatia');
$("#flag").html('🇭🇷');
$("#photo").css('background', 'url(carriers/198.png)');

} else if ($xml.find('Numeric').text() == "36801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cuba/etecsa/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cuba');
$("#flag").html('🇨🇺');
$("#photo").css('background', 'url(carriers/199.png)');

} else if ($xml.find('Numeric').text() == "28001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cyprus/cytamobile-vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cyprus');
$("#flag").html('🇨🇾');
$("#photo").css('background', 'url(carriers/200.png)');
} else if ($xml.find('Numeric').text() == "28010") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cyprus/epic/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cyprus');
$("#flag").html('🇨🇾');
$("#photo").css('background', 'url(carriers/201.png)');
} else if ($xml.find('Numeric').text() == "28022") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cyprus/lemontel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cyprus');
$("#flag").html('🇨🇾');
$("#photo").css('background', 'url(carriers/202.png)');
} else if ($xml.find('Numeric').text() == "28020") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/cyprus/primetel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Cyprus');
$("#flag").html('🇨🇾');
$("#photo").css('background', 'url(carriers/203.png)');

} else if ($xml.find('Numeric').text() == "23004") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/czech-republic/ufon/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Czech-republic');
$("#flag").html('🇨🇿');
$("#photo").css('background', 'url(carriers/204.png)');
} else if ($xml.find('Numeric').text() == "23002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/czech-republic/o2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Czech-republic');
$("#flag").html('🇨🇿');
$("#photo").css('background', 'url(carriers/205.png)');
} else if ($xml.find('Numeric').text() == "23098") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/czech-republic/szdc/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Czech-republic');
$("#flag").html('🇨🇿');
$("#photo").css('background', 'url(carriers/206.png)');
} else if ($xml.find('Numeric').text() == "23001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/czech-republic/t-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Czech-republic');
$("#flag").html('🇨🇿');
$("#photo").css('background', 'url(carriers/207.png)');
} else if ($xml.find('Numeric').text() == "23003") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/czech-republic/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Czech-republic');
$("#flag").html('🇨🇿');
$("#photo").css('background', 'url(carriers/208.png)');

} else if ($xml.find('Numeric').text() == "63090") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/democratic-republic-of-congo/africell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Democratic-republic-of-congo');
$("#flag").html('🇨🇩');
$("#photo").css('background', 'url(carriers/209.png)');
} else if ($xml.find('Numeric').text() == "63002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/democratic-republic-of-congo/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Democratic-republic-of-congo');
$("#flag").html('🇨🇩');
$("#photo").css('background', 'url(carriers/210.png)');
} else if ($xml.find('Numeric').text() == "63086") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/democratic-republic-of-congo/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Democratic-republic-of-congo');
$("#flag").html('🇨🇩');
$("#photo").css('background', 'url(carriers/211.png)');
} else if ($xml.find('Numeric').text() == "63001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/democratic-republic-of-congo/vodacom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Democratic-republic-of-congo');
$("#flag").html('🇨🇩');
$("#photo").css('background', 'url(carriers/212.png)');

} else if ($xml.find('Numeric').text() == "23806") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/denmark/3/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Denmark');
$("#flag").html('🇩🇰');
$("#photo").css('background', 'url(carriers/213.png)');
} else if ($xml.find('Numeric').text() == "23812") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/denmark/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Denmark');
$("#flag").html('🇩🇰');
$("#photo").css('background', 'url(carriers/214.png)');
} else if ($xml.find('Numeric').text() == "23801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/denmark/tdc/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Denmark');
$("#flag").html('🇩🇰');
$("#photo").css('background', 'url(carriers/215.png)');
} else if ($xml.find('Numeric').text() == "23802") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/denmark/telenor/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Denmark');
$("#flag").html('🇩🇰');
$("#photo").css('background', 'url(carriers/216.png)');
} else if ($xml.find('Numeric').text() == "23820") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/denmark/telia/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Denmark');
$("#flag").html('🇩🇰');
$("#photo").css('background', 'url(carriers/217.png)');
} else if ($xml.find('Numeric').text() == "23807") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/denmark/vectone-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Denmark');
$("#flag").html('🇩🇰');
$("#photo").css('background', 'url(carriers/218.png)');

} else if ($xml.find('Numeric').text() == "63801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/djibouti/evatis/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Djibouti');
$("#flag").html('🇩🇯');
$("#photo").css('background', 'url(carriers/219.png)');

} else if ($xml.find('Numeric').text() == "366020") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/dominica/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Dominica');
$("#flag").html('🇩🇲');
$("#photo").css('background', 'url(carriers/220.png)');
} else if ($xml.find('Numeric').text() == "366110") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/dominica/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Dominica');
$("#flag").html('🇩🇲');
$("#photo").css('background', 'url(carriers/221.png)');

} else if ($xml.find('Numeric').text() == "37001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/dominican-republic/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Dominican-republic');
$("#flag").html('🇩🇴');
$("#photo").css('background', 'url(carriers/222.png)');
} else if ($xml.find('Numeric').text() == "37002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/dominican-republic/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Dominican-republic');
$("#flag").html('🇩🇴');
$("#photo").css('background', 'url(carriers/223.png)');
} else if ($xml.find('Numeric').text() == "37004") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/dominican-republic/viva/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Dominican-republic');
$("#flag").html('🇩🇴');
$("#photo").css('background', 'url(carriers/224.png)');
} else if ($xml.find('Numeric').text() == "37005") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/dominican-republic/tricom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Dominican-republic');
$("#flag").html('🇩🇴');
$("#photo").css('background', 'url(carriers/225.png)');

} else if ($xml.find('Numeric').text() == "51403") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/east-timor/telemor/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('East-timor');
$("#flag").html('🇹🇱');
$("#photo").css('background', 'url(carriers/226.png)');
} else if ($xml.find('Numeric').text() == "51401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/east-timor/telkomcel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('East-timor');
$("#flag").html('🇹🇱');
$("#photo").css('background', 'url(carriers/227.png)');
} else if ($xml.find('Numeric').text() == "51402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/east-timor/timor-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('East-timor');
$("#flag").html('🇹🇱');
$("#photo").css('background', 'url(carriers/228.png)');

} else if ($xml.find('Numeric').text() == "74001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ecuador/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ecuador');
$("#flag").html('🇪🇨');
$("#photo").css('background', 'url(carriers/229.png)');
} else if ($xml.find('Numeric').text() == "74002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ecuador/cnt/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ecuador');
$("#flag").html('🇪🇨');
$("#photo").css('background', 'url(carriers/230.png)');
} else if ($xml.find('Numeric').text() == "74000") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ecuador/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ecuador');
$("#flag").html('🇪🇨');
$("#photo").css('background', 'url(carriers/231.png)');
} else if ($xml.find('Numeric').text() == "74003") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ecuador/tuenti/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ecuador');
$("#flag").html('🇪🇨');
$("#photo").css('background', 'url(carriers/232.png)');

} else if ($xml.find('Numeric').text() == "60203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/egypt/etisalat/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Egypt');
$("#flag").html('🇪🇬');
$("#photo").css('background', 'url(carriers/233.png)');
} else if ($xml.find('Numeric').text() == "60201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/egypt/mobinil/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Egypt');
$("#flag").html('🇪🇬');
$("#photo").css('background', 'url(carriers/234.png)');
} else if ($xml.find('Numeric').text() == "60202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/egypt/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Egypt');
$("#flag").html('🇪🇬');
$("#photo").css('background', 'url(carriers/235.png)');
} else if ($xml.find('Numeric').text() == "60204") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/egypt/we/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Egypt');
$("#flag").html('🇪🇬');
$("#photo").css('background', 'url(carriers/236.png)');

} else if ($xml.find('Numeric').text() == "70601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/el-salvador/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('El-salvador');
$("#flag").html('🇸🇻');
$("#photo").css('background', 'url(carriers/237.png)');
} else if ($xml.find('Numeric').text() == "70602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/el-salvador/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('El-salvador');
$("#flag").html('🇸🇻');
$("#photo").css('background', 'url(carriers/238.png)');
} else if ($xml.find('Numeric').text() == "70604") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/el-salvador/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('El-salvador');
$("#flag").html('🇸🇻');
$("#photo").css('background', 'url(carriers/239.png)');
} else if ($xml.find('Numeric').text() == "70603") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/el-salvador/tigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('El-salvador');
$("#flag").html('🇸🇻');
$("#photo").css('background', 'url(carriers/240.png)');

} else if ($xml.find('Numeric').text() == "62703") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/equatorial-guinea/muni/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Equatorial-guinea');
$("#flag").html('🇬🇶');
$("#photo").css('background', 'url(carriers/241.png)');
} else if ($xml.find('Numeric').text() == "62701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/equatorial-guinea/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Equatorial-guinea');
$("#flag").html('🇬🇶');
$("#photo").css('background', 'url(carriers/242.png)');

} else if ($xml.find('Numeric').text() == "65701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/eritrea/eritel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Eritrea');
$("#flag").html('🇪🇷');
$("#photo").css('background', 'url(carriers/243.png)');

} else if ($xml.find('Numeric').text() == "24802") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/estonia/elisa/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Estonia');
$("#flag").html('🇪🇪');
$("#photo").css('background', 'url(carriers/244.png)');
} else if ($xml.find('Numeric').text() == "24803") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/estonia/tele2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Estonia');
$("#flag").html('🇪🇪');
$("#photo").css('background', 'url(carriers/245.png)');
} else if ($xml.find('Numeric').text() == "24801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/estonia/emt/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Estonia');
$("#flag").html('🇪🇪');
$("#photo").css('background', 'url(carriers/246.png)');

} else if ($xml.find('Numeric').text() == "63601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ethiopia/ethio-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ethiopia');
$("#flag").html('🇪🇹');
$("#photo").css('background', 'url(carriers/247.png)');

} else if ($xml.find('Numeric').text() == "28801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/faroe-islands/foroya-tele/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Faroe-islands');
$("#flag").html('🇫🇴');
$("#photo").css('background', 'url(carriers/248.png)');
} else if ($xml.find('Numeric').text() == "28802") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/faroe-islands/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Faroe-islands');
$("#flag").html('🇫🇴');
$("#photo").css('background', 'url(carriers/249.png)');

} else if ($xml.find('Numeric').text() == "54202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/fiji/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Fiji');
$("#flag").html('🇫🇯');
$("#photo").css('background', 'url(carriers/250.png)');
} else if ($xml.find('Numeric').text() == "54203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/fiji/telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Fiji');
$("#flag").html('🇫🇯');
$("#photo").css('background', 'url(carriers/251.png)');
} else if ($xml.find('Numeric').text() == "54201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/fiji/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Fiji');
$("#flag").html('🇫🇯');
$("#photo").css('background', 'url(carriers/252.png)');

} else if ($xml.find('Numeric').text() == "24414") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/finland/alcom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Finland');
$("#flag").html('🇫🇮');
$("#photo").css('background', 'url(carriers/253.png)');
} else if ($xml.find('Numeric').text() == "24403") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/finland/dna/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Finland');
$("#flag").html('🇫🇮');
$("#photo").css('background', 'url(carriers/254.png)');
} else if ($xml.find('Numeric').text() == "24405") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/finland/elisa/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Finland');
$("#flag").html('🇫🇮');
$("#photo").css('background', 'url(carriers/255.png)');
} else if ($xml.find('Numeric').text() == "24420") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/finland/telia/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Finland');
$("#flag").html('🇫🇮');
$("#photo").css('background', 'url(carriers/256.png)');
} else if ($xml.find('Numeric').text() == "24435") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/finland/ukkoverkot/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Finland');
$("#flag").html('🇫🇮');
$("#photo").css('background', 'url(carriers/257.png)');
} else if ($xml.find('Numeric').text() == "24433") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/finland/virve/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Finland');
$("#flag").html('🇫🇮');
$("#photo").css('background', 'url(carriers/258.png)');

} else if ($xml.find('Numeric').text() == "20820") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/france/bouygues/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('France');
$("#flag").html('🇫🇷');
$("#photo").css('background', 'url(carriers/259.png)');
} else if ($xml.find('Numeric').text() == "20815") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/france/free-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('France');
$("#flag").html('🇫🇷');
$("#photo").css('background', 'url(carriers/260.png)');
} else if ($xml.find('Numeric').text() == "20805") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/france/globalstar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('France');
$("#flag").html('🇫🇷');
$("#photo").css('background', 'url(carriers/261.png)');
} else if ($xml.find('Numeric').text() == "20810") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/france/la-poste-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('France');
$("#flag").html('🇫🇷');
$("#photo").css('background', 'url(carriers/262.png)');
} else if ($xml.find('Numeric').text() == "20826") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/france/nrj-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('France');
$("#flag").html('🇫🇷');
$("#photo").css('background', 'url(carriers/263.png)');
} else if ($xml.find('Numeric').text() == "20801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/france/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('France');
$("#flag").html('🇫🇷');
$("#photo").css('background', 'url(carriers/264.png)');
} else if ($xml.find('Numeric').text() == "20808") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/france/sfr/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('France');
$("#flag").html('🇫🇷');
$("#photo").css('background', 'url(carriers/265.png)');
} else if ($xml.find('Numeric').text() == "20822") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/france/transatel-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('France');
$("#flag").html('🇫🇷');
$("#photo").css('background', 'url(carriers/266.png)');
} else if ($xml.find('Numeric').text() == "20810") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/france/virgin-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('France');
$("#flag").html('🇫🇷');
$("#photo").css('background', 'url(carriers/267.png)');

} else if ($xml.find('Numeric').text() == "54720") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/french-polynesia/vini/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('French-polynesia');
$("#flag").html('🇵🇫');
$("#photo").css('background', 'url(carriers/268.png)');
} else if ($xml.find('Numeric').text() == "54705") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/french-polynesia/viti/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('French-polynesia');
$("#flag").html('🇵🇫');
$("#photo").css('background', 'url(carriers/269.png)');
} else if ($xml.find('Numeric').text() == "54715") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/french-polynesia/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('French-polynesia');
$("#flag").html('🇵🇫');
$("#photo").css('background', 'url(carriers/270.png)');

} else if ($xml.find('Numeric').text() == "62803") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/gabon/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Gabon');
$("#flag").html('🇬🇦');
$("#photo").css('background', 'url(carriers/271.png)');
} else if ($xml.find('Numeric').text() == "62804") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/gabon/azur/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Gabon');
$("#flag").html('🇬🇦');
$("#photo").css('background', 'url(carriers/272.png)');
} else if ($xml.find('Numeric').text() == "62801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/gabon/gabon-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Gabon');
$("#flag").html('🇬🇦');
$("#photo").css('background', 'url(carriers/273.png)');
} else if ($xml.find('Numeric').text() == "62802") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/gabon/moov/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Gabon');
$("#flag").html('🇬🇦');
$("#photo").css('background', 'url(carriers/274.png)');

} else if ($xml.find('Numeric').text() == "60702") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/gambia/africell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Gambia');
$("#flag").html('🇬🇲');
$("#photo").css('background', 'url(carriers/275.png)');
} else if ($xml.find('Numeric').text() == "60703") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/gambia/comium/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Gambia');
$("#flag").html('🇬🇲');
$("#photo").css('background', 'url(carriers/276.png)');
} else if ($xml.find('Numeric').text() == "60701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/gambia/gamcel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Gambia');
$("#flag").html('🇬🇲');
$("#photo").css('background', 'url(carriers/277.png)');
} else if ($xml.find('Numeric').text() == "60706") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/gambia/netpage/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Gambia');
$("#flag").html('🇬🇲');
$("#photo").css('background', 'url(carriers/278.png)');
} else if ($xml.find('Numeric').text() == "60704") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/gambia/qcell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Gambia');
$("#flag").html('🇬🇲');
$("#photo").css('background', 'url(carriers/279.png)');

} else if ($xml.find('Numeric').text() == "28204") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/georgia/beeline/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Georgia');
$("#flag").html('🇬🇪');
$("#photo").css('background', 'url(carriers/280.png)');
} else if ($xml.find('Numeric').text() == "28201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/georgia/geocell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Georgia');
$("#flag").html('🇬🇪');
$("#photo").css('background', 'url(carriers/281.png)');
} else if ($xml.find('Numeric').text() == "28202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/georgia/magti/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Georgia');
$("#flag").html('🇬🇪');
$("#photo").css('background', 'url(carriers/282.png)');
} else if ($xml.find('Numeric').text() == "28205") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/georgia/silknet/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Georgia');
$("#flag").html('🇬🇪');
$("#photo").css('background', 'url(carriers/283.png)');

} else if ($xml.find('Numeric').text() == "26215") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/germany/airdata/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Germany');
$("#flag").html('🇩🇪');
$("#photo").css('background', 'url(carriers/284.png)');
} else if ($xml.find('Numeric').text() == "26213") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/germany/congstar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Germany');
$("#flag").html('🇩🇪');
$("#photo").css('background', 'url(carriers/285.png)');
} else if ($xml.find('Numeric').text() == "26212") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/germany/dolphin-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Germany');
$("#flag").html('🇩🇪');
$("#photo").css('background', 'url(carriers/286.png)');
} else if ($xml.find('Numeric').text() == "26243") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/germany/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Germany');
$("#flag").html('🇩🇪');
$("#photo").css('background', 'url(carriers/287.png)');
} else if ($xml.find('Numeric').text() == "26292") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/germany/nash-technologies/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Germany');
$("#flag").html('🇩🇪');
$("#photo").css('background', 'url(carriers/288.png)');
} else if ($xml.find('Numeric').text() == "26203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/germany/o2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Germany');
$("#flag").html('🇩🇪');
$("#photo").css('background', 'url(carriers/289.png)');
} else if ($xml.find('Numeric').text() == "26233") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/germany/simquadrat/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Germany');
$("#flag").html('🇩🇪');
$("#photo").css('background', 'url(carriers/290.png)');
} else if ($xml.find('Numeric').text() == "26201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/germany/t-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Germany');
$("#flag").html('🇩🇪');
$("#photo").css('background', 'url(carriers/291.png)');
} else if ($xml.find('Numeric').text() == "26202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/germany/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Germany');
$("#flag").html('🇩🇪');
$("#photo").css('background', 'url(carriers/292.png)');

} else if ($xml.find('Numeric').text() == "62003") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ghana/tigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ghana');
$("#flag").html('🇬🇭');
$("#photo").css('background', 'url(carriers/293.png)');
} else if ($xml.find('Numeric').text() == "62010") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ghana/blu/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ghana');
$("#flag").html('🇬🇭');
$("#photo").css('background', 'url(carriers/294.png)');
} else if ($xml.find('Numeric').text() == "62007") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ghana/glo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ghana');
$("#flag").html('🇬🇭');
$("#photo").css('background', 'url(carriers/295.png)');
} else if ($xml.find('Numeric').text() == "62001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ghana/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ghana');
$("#flag").html('🇬🇭');
$("#photo").css('background', 'url(carriers/296.png)');
} else if ($xml.find('Numeric').text() == "62008") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ghana/surfline/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ghana');
$("#flag").html('🇬🇭');
$("#photo").css('background', 'url(carriers/297.png)');
} else if ($xml.find('Numeric').text() == "62002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ghana/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ghana');
$("#flag").html('🇬🇭');
$("#photo").css('background', 'url(carriers/298.png)');

} else if ($xml.find('Numeric').text() == "26601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/gibraltar/gibtelecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Gibraltar');
$("#flag").html('🇬🇮');
$("#photo").css('background', 'url(carriers/299.png)');

} else if ($xml.find('Numeric').text() == "20201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/greece/cosmote/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ghana');
$("#flag").html('🇬🇭');
$("#photo").css('background', 'url(carriers/300.png)');
} else if ($xml.find('Numeric').text() == "20214") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/greece/cyta/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ghana');
$("#flag").html('🇬🇭');
$("#photo").css('background', 'url(carriers/301.png)');
} else if ($xml.find('Numeric').text() == "20205") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/greece/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ghana');
$("#flag").html('🇬🇭');
$("#photo").css('background', 'url(carriers/302.png)');
} else if ($xml.find('Numeric').text() == "20209") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/greece/wind/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Greece');
$("#flag").html('🇬🇷');
$("#photo").css('background', 'url(carriers/303.png)');

} else if ($xml.find('Numeric').text() == "29002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/greenland/nanoq-net/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Greenland');
$("#flag").html('🇬🇱');
$("#photo").css('background', 'url(carriers/304.png)');
} else if ($xml.find('Numeric').text() == "29001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/greenland/tele-post/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Greenland');
$("#flag").html('🇬🇱');
$("#photo").css('background', 'url(carriers/305.png)');

} else if ($xml.find('Numeric').text() == "352030") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/grenada/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Grenada');
$("#flag").html('🇬🇩');
$("#photo").css('background', 'url(carriers/306.png)');
} else if ($xml.find('Numeric').text() == "352110") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/grenada/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Grenada');
$("#flag").html('🇬🇩');
$("#photo").css('background', 'url(carriers/307.png)');

} else if ($xml.find('Numeric').text() == "34020") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guadeloupe/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guadeloupe');
$("#flag").html('🇬🇵');
$("#photo").css('background', 'url(carriers/308.png)');
} else if ($xml.find('Numeric').text() == "34001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guadeloupe/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guadeloupe');
$("#flag").html('🇬🇵');
$("#photo").css('background', 'url(carriers/309.png)');

} else if ($xml.find('Numeric').text() == "310140") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guam/gta/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guam');
$("#flag").html('🇬🇺');
$("#photo").css('background', 'url(carriers/310.png)');
} else if ($xml.find('Numeric').text() == "310400") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guam/iconnect/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guam');
$("#flag").html('🇬🇺');
$("#photo").css('background', 'url(carriers/311.png)');
} else if ($xml.find('Numeric').text() == "310032") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guam/ite/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guam');
$("#flag").html('🇬🇺');
$("#photo").css('background', 'url(carriers/312.png)');
} else if ($xml.find('Numeric').text() == "310370") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guam/ntt-docomo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guam');
$("#flag").html('🇬🇺');
$("#photo").css('background', 'url(carriers/313.png)');

} else if ($xml.find('Numeric').text() == "70401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guatemala/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guatemala');
$("#flag").html('🇬🇹');
$("#photo").css('background', 'url(carriers/314.png)');
} else if ($xml.find('Numeric').text() == "70403") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guatemala/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guatemala');
$("#flag").html('🇬🇹');
$("#photo").css('background', 'url(carriers/315.png)');
} else if ($xml.find('Numeric').text() == "70402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guatemala/tigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guatemala');
$("#flag").html('🇬🇹');
$("#photo").css('background', 'url(carriers/316.png)');

} else if ($xml.find('Numeric').text() == "73801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guiana/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guiana');
$("#flag").html('🇬🇫');
$("#photo").css('background', 'url(carriers/317.png)');
} else if ($xml.find('Numeric').text() == "738002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guiana/gtt/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guiana');
$("#flag").html('🇬🇫');
$("#photo").css('background', 'url(carriers/318.png)');

} else if ($xml.find('Numeric').text() == "61105") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guinea/cellcom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guinea');
$("#flag").html('🇬🇳');
$("#photo").css('background', 'url(carriers/319.png)');
} else if ($xml.find('Numeric').text() == "61104") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guinea/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guinea');
$("#flag").html('🇬🇳');
$("#photo").css('background', 'url(carriers/320.png)');
} else if ($xml.find('Numeric').text() == "61101") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guinea/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guinea');
$("#flag").html('🇬🇳');
$("#photo").css('background', 'url(carriers/321.png)');
} else if ($xml.find('Numeric').text() == "61103") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guinea/telecel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guinea');
$("#flag").html('🇬🇳');
$("#photo").css('background', 'url(carriers/322.png)');

} else if ($xml.find('Numeric').text() == "63202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guinea-bissau/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guinea-bissau');
$("#flag").html('🇬🇼');
$("#photo").css('background', 'url(carriers/323.png)');
} else if ($xml.find('Numeric').text() == "63203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/guinea-bissau/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Guinea-bissau');
$("#flag").html('🇬🇼');
$("#photo").css('background', 'url(carriers/324.png)');

} else if ($xml.find('Numeric').text() == "37202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/haiti/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Haiti');
$("#flag").html('🇭🇹');
$("#photo").css('background', 'url(carriers/325.png)');
} else if ($xml.find('Numeric').text() == "37203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/haiti/natcom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Haiti');
$("#flag").html('🇭🇹');
$("#photo").css('background', 'url(carriers/326.png)');

} else if ($xml.find('Numeric').text() == "708001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/honduras/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Honduras');
$("#flag").html('🇭🇳');
$("#photo").css('background', 'url(carriers/327.png)');
} else if ($xml.find('Numeric').text() == "708040") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/honduras/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Honduras');
$("#flag").html('🇭🇳');
$("#photo").css('background', 'url(carriers/328.png)');
} else if ($xml.find('Numeric').text() == "708030") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/honduras/hondutel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Honduras');
$("#flag").html('🇭🇳');
$("#photo").css('background', 'url(carriers/329.png)');
} else if ($xml.find('Numeric').text() == "708002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/honduras/tigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Honduras');
$("#flag").html('🇭🇳');
$("#photo").css('background', 'url(carriers/330.png)');

} else if ($xml.find('Numeric').text() == "45403") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hong-kong/3/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hong-kong');
$("#flag").html('🇭🇰');
$("#photo").css('background', 'url(carriers/331.png)');
} else if ($xml.find('Numeric').text() == "45412") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hong-kong/china-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hong-kong');
$("#flag").html('🇭🇰');
$("#photo").css('background', 'url(carriers/332.png)');
} else if ($xml.find('Numeric').text() == "45407") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hong-kong/china-unicom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hong-kong');
$("#flag").html('🇭🇰');
$("#photo").css('background', 'url(carriers/333.png)');
} else if ($xml.find('Numeric').text() == "45411") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hong-kong/china-hongkong-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hong-kong');
$("#flag").html('🇭🇰');
$("#photo").css('background', 'url(carriers/334.png)');
} else if ($xml.find('Numeric').text() == "45401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hong-kong/citic-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hong-kong');
$("#flag").html('🇭🇰');
$("#photo").css('background', 'url(carriers/335.png)');
} else if ($xml.find('Numeric').text() == "45400") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hong-kong/csl/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hong-kong');
$("#flag").html('🇭🇰');
$("#photo").css('background', 'url(carriers/336.png)');
} else if ($xml.find('Numeric').text() == "45414") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hong-kong/hutchison-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hong-kong');
$("#flag").html('🇭🇰');
$("#photo").css('background', 'url(carriers/337.png)');
} else if ($xml.find('Numeric').text() == "45416") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hong-kong/pccw/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hong-kong');
$("#flag").html('🇭🇰');
$("#photo").css('background', 'url(carriers/338.png)');
} else if ($xml.find('Numeric').text() == "45415") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hong-kong/smartone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hong-kong');
$("#flag").html('🇭🇰');
$("#photo").css('background', 'url(carriers/339.png)');

} else if ($xml.find('Numeric').text() == "21602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hungary/mvm-net/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hungary');
$("#flag").html('🇭🇺');
$("#photo").css('background', 'url(carriers/340.png)');
} else if ($xml.find('Numeric').text() == "21630") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hungary/t-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hungary');
$("#flag").html('🇭🇺');
$("#photo").css('background', 'url(carriers/341.png)');
} else if ($xml.find('Numeric').text() == "21601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hungary/telenor/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hungary');
$("#flag").html('🇭🇺');
$("#photo").css('background', 'url(carriers/342.png)');
} else if ($xml.find('Numeric').text() == "21670") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/hungary/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Hungary');
$("#flag").html('🇭🇺');
$("#photo").css('background', 'url(carriers/343.png)');

} else if ($xml.find('Numeric').text() == "27411") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iceland/nova/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iceland');
$("#flag").html('🇮🇸');
$("#photo").css('background', 'url(carriers/344.png)');
} else if ($xml.find('Numeric').text() == "27408") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iceland/on-waves/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iceland');
$("#flag").html('🇮🇸');
$("#photo").css('background', 'url(carriers/345.png)');
} else if ($xml.find('Numeric').text() == "27401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iceland/siminn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iceland');
$("#flag").html('🇮🇸');
$("#photo").css('background', 'url(carriers/346.png)');
} else if ($xml.find('Numeric').text() == "27402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iceland/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iceland');
$("#flag").html('🇮🇸');
$("#photo").css('background', 'url(carriers/347.png)');

} else if ($xml.find('Numeric').text() == "40417") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/india/aircel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('India');
$("#flag").html('🇮🇳');
$("#photo").css('background', 'url(carriers/348.png)');
} else if ($xml.find('Numeric').text() == "40406") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/india/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('India');
$("#flag").html('🇮🇳');
$("#photo").css('background', 'url(carriers/349.png)');
} else if ($xml.find('Numeric').text() == "40421") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/india/bpl-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('India');
$("#flag").html('🇮🇳');
$("#photo").css('background', 'url(carriers/350.png)');
} else if ($xml.find('Numeric').text() == "40434") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/india/bsnl/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('India');
$("#flag").html('🇮🇳');
$("#photo").css('background', 'url(carriers/351.png)');
} else if ($xml.find('Numeric').text() == "40404") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/india/idea/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('India');
$("#flag").html('🇮🇳');
$("#photo").css('background', 'url(carriers/352.png)');
} else if ($xml.find('Numeric').text() == "405840") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/india/jio/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('India');
$("#flag").html('🇮🇳');
$("#photo").css('background', 'url(carriers/353.png)');
} else if ($xml.find('Numeric').text() == "40409") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/india/reliance/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('India');
$("#flag").html('🇮🇳');
$("#photo").css('background', 'url(carriers/354.png)');
} else if ($xml.find('Numeric').text() == "405025") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/india/tata-docomo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('India');
$("#flag").html('🇮🇳');
$("#photo").css('background', 'url(carriers/355.png)');
} else if ($xml.find('Numeric').text() == "40401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/india/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('India');
$("#flag").html('🇮🇳');
$("#photo").css('background', 'url(carriers/356.png)');

} else if ($xml.find('Numeric').text() == "51089") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/indonesia/3/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Indonesia');
$("#flag").html('🇮🇩');
$("#photo").css('background', 'url(carriers/357.png)');
} else if ($xml.find('Numeric').text() == "51008") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/indonesia/axis/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Indonesia');
$("#flag").html('🇮🇩');
$("#photo").css('background', 'url(carriers/358.png)');
} else if ($xml.find('Numeric').text() == "51088") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/indonesia/bolt/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Indonesia');
$("#flag").html('🇮🇩');
$("#photo").css('background', 'url(carriers/359.png)');
} else if ($xml.find('Numeric').text() == "51001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/indonesia/im3-ooredoo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Indonesia');
$("#flag").html('🇮🇩');
$("#photo").css('background', 'url(carriers/360.png)');
} else if ($xml.find('Numeric').text() == "51000") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/indonesia/psn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Indonesia');
$("#flag").html('🇮🇩');
$("#photo").css('background', 'url(carriers/361.png)');
} else if ($xml.find('Numeric').text() == "51009") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/indonesia/smartfren/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Indonesia');
$("#flag").html('🇮🇩');
$("#photo").css('background', 'url(carriers/362.png)');
} else if ($xml.find('Numeric').text() == "51007") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/indonesia/telkom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Indonesia');
$("#flag").html('🇮🇩');
$("#photo").css('background', 'url(carriers/363.png)');
} else if ($xml.find('Numeric').text() == "51010") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/indonesia/telkomsel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Indonesia');
$("#flag").html('🇮🇩');
$("#photo").css('background', 'url(carriers/364.png)');
} else if ($xml.find('Numeric').text() == "51011") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/indonesia/xl-axiata/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Indonesia');
$("#flag").html('🇮🇩');
$("#photo").css('background', 'url(carriers/365.png)');

} else if ($xml.find('Numeric').text() == "43211") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iran/hamrahe-aval-mci/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iran');
$("#flag").html('🇮🇷');
$("#photo").css('background', 'url(carriers/366.png)');
} else if ($xml.find('Numeric').text() == "43212") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iran/hiweb/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iran');
$("#flag").html('🇮🇷');
$("#photo").css('background', 'url(carriers/367.png)');
} else if ($xml.find('Numeric').text() == "43235") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iran/mtn-irancell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iran');
$("#flag").html('🇮🇷');
$("#photo").css('background', 'url(carriers/368.png)');
} else if ($xml.find('Numeric').text() == "43220") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iran/rightel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iran');
$("#flag").html('🇮🇷');
$("#photo").css('background', 'url(carriers/369.png)');
} else if ($xml.find('Numeric').text() == "43232") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iran/taliya-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iran');
$("#flag").html('🇮🇷');
$("#photo").css('background', 'url(carriers/370.png)');
} else if ($xml.find('Numeric').text() == "43270") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iran/tci/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iran');
$("#flag").html('🇮🇷');
$("#photo").css('background', 'url(carriers/371.png)');

} else if ($xml.find('Numeric').text() == "41800") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iraq/asiacell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iraq');
$("#flag").html('🇮🇶');
$("#photo").css('background', 'url(carriers/372.png)');
} else if ($xml.find('Numeric').text() == "41840") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iraq/korek-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iraq');
$("#flag").html('🇮🇶');
$("#photo").css('background', 'url(carriers/373.png)');
} else if ($xml.find('Numeric').text() == "41845") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iraq/mobitel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iraq');
$("#flag").html('🇮🇶');
$("#photo").css('background', 'url(carriers/374.png)');
} else if ($xml.find('Numeric').text() == "41892") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iraq/omnnea/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iraq');
$("#flag").html('🇮🇶');
$("#photo").css('background', 'url(carriers/375.png)');
} else if ($xml.find('Numeric').text() == "41820") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/iraq/zain/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Iraq');
$("#flag").html('🇮🇶');
$("#photo").css('background', 'url(carriers/376.png)');

} else if ($xml.find('Numeric').text() == "27202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ireland/3/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ireland');
$("#flag").html('🇮🇪');
$("#photo").css('background', 'url(carriers/377.png)');
} else if ($xml.find('Numeric').text() == "27203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ireland/eir/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ireland');
$("#flag").html('🇮🇪');
$("#photo").css('background', 'url(carriers/378.png)');
} else if ($xml.find('Numeric').text() == "27213") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ireland/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ireland');
$("#flag").html('🇮🇪');
$("#photo").css('background', 'url(carriers/379.png)');
} else if ($xml.find('Numeric').text() == "27203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ireland/meteor/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ireland');
$("#flag").html('🇮🇪');
$("#photo").css('background', 'url(carriers/380.png)');
} else if ($xml.find('Numeric').text() == "27202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ireland/o2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ireland');
$("#flag").html('🇮🇪');
$("#photo").css('background', 'url(carriers/381.png)');
} else if ($xml.find('Numeric').text() == "27211") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ireland/tesco-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ireland');
$("#flag").html('🇮🇪');
$("#photo").css('background', 'url(carriers/382.png)');
} else if ($xml.find('Numeric').text() == "27201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ireland/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ireland');
$("#flag").html('🇮🇪');
$("#photo").css('background', 'url(carriers/383.png)');

} else if ($xml.find('Numeric').text() == "42509") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/israel/018-xphone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Israel');
$("#flag").html('🇮🇱');
$("#photo").css('background', 'url(carriers/384.png)');
} else if ($xml.find('Numeric').text() == "42502") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/israel/cellcom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Israel');
$("#flag").html('🇮🇱');
$("#photo").css('background', 'url(carriers/385.png)');
} else if ($xml.find('Numeric').text() == "42508") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/israel/golan-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Israel');
$("#flag").html('🇮🇱');
$("#photo").css('background', 'url(carriers/386.png)');
} else if ($xml.find('Numeric').text() == "42507") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/israel/hot-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Israel');
$("#flag").html('🇮🇱');
$("#photo").css('background', 'url(carriers/387.png)');
} else if ($xml.find('Numeric').text() == "42501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/israel/partner/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Israel');
$("#flag").html('🇮🇱');
$("#photo").css('background', 'url(carriers/388.png)');
} else if ($xml.find('Numeric').text() == "42503") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/israel/pelephone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Israel');
$("#flag").html('🇮🇱');
$("#photo").css('background', 'url(carriers/389.png)');
} else if ($xml.find('Numeric').text() == "42516") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/israel/rami-levy/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Israel');
$("#flag").html('🇮🇱');
$("#photo").css('background', 'url(carriers/390.png)');

} else if ($xml.find('Numeric').text() == "22237") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/italy/3/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Italy');
$("#flag").html('🇮🇹');
$("#photo").css('background', 'url(carriers/391.png)');
} else if ($xml.find('Numeric').text() == "22250") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/italy/iliad/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Italy');
$("#flag").html('🇮🇹');
$("#photo").css('background', 'url(carriers/392.png)');
} else if ($xml.find('Numeric').text() == "22201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/italy/tim/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Italy');
$("#flag").html('🇮🇹');
$("#photo").css('background', 'url(carriers/393.png)');
} else if ($xml.find('Numeric').text() == "22206") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/italy/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Italy');
$("#flag").html('🇮🇹');
$("#photo").css('background', 'url(carriers/394.png)');
} else if ($xml.find('Numeric').text() == "22288") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/italy/wind/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Italy');
$("#flag").html('🇮🇹');
$("#photo").css('background', 'url(carriers/395.png)');

} else if ($xml.find('Numeric').text() == "61202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ivory-coast/moov/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ivory-coast');
$("#flag").html('🇨🇮');
$("#photo").css('background', 'url(carriers/396.png)');
} else if ($xml.find('Numeric').text() == "61205") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ivory-coast/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ivory-coast');
$("#flag").html('🇨🇮');
$("#photo").css('background', 'url(carriers/397.png)');
} else if ($xml.find('Numeric').text() == "61203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ivory-coast/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ivory-coast');
$("#flag").html('🇨🇮');
$("#photo").css('background', 'url(carriers/398.png)');

} else if ($xml.find('Numeric').text() == "338040") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/jamaica/caricel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Jamaica');
$("#flag").html('🇯🇲');
$("#photo").css('background', 'url(carriers/399.png)');
} else if ($xml.find('Numeric').text() == "338050") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/jamaica/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Jamaica');
$("#flag").html('🇯🇲');
$("#photo").css('background', 'url(carriers/400.png)');
} else if ($xml.find('Numeric').text() == "338020") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/jamaica/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Jamaica');
$("#flag").html('🇯🇲');
$("#photo").css('background', 'url(carriers/401.png)');

} else if ($xml.find('Numeric').text() == "44000") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/japan/emobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Japan');
$("#flag").html('🇯🇵');
$("#photo").css('background', 'url(carriers/402.png)');
} else if ($xml.find('Numeric').text() == "44050") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/japan/kddi/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Japan');
$("#flag").html('🇯🇵');
$("#photo").css('background', 'url(carriers/403.png)');
} else if ($xml.find('Numeric').text() == "44010") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/japan/ntt-docomo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Japan');
$("#flag").html('🇯🇵');
$("#photo").css('background', 'url(carriers/404.png)');
} else if ($xml.find('Numeric').text() == "44020") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/japan/softbank/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Japan');
$("#flag").html('🇯🇵');
$("#photo").css('background', 'url(carriers/405.png)');

} else if ($xml.find('Numeric').text() == "41677") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/jordan/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Jordan');
$("#flag").html('🇯🇴');
$("#photo").css('background', 'url(carriers/406.png)');
} else if ($xml.find('Numeric').text() == "41603") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/jordan/umniah/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Jordan');
$("#flag").html('🇯🇴');
$("#photo").css('background', 'url(carriers/407.png)');
} else if ($xml.find('Numeric').text() == "41601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/jordan/zain/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Jordan');
$("#flag").html('🇯🇴');
$("#photo").css('background', 'url(carriers/408.png)');

} else if ($xml.find('Numeric').text() == "40107") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kazakhstan/altel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kazakhstan');
$("#flag").html('🇰🇿');
$("#photo").css('background', 'url(carriers/409.png)');
} else if ($xml.find('Numeric').text() == "40101") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kazakhstan/beeline/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kazakhstan');
$("#flag").html('🇰🇿');
$("#photo").css('background', 'url(carriers/410.png)');
} else if ($xml.find('Numeric').text() == "40108") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kazakhstan/kazakhtelecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kazakhstan');
$("#flag").html('🇰🇿');
$("#photo").css('background', 'url(carriers/411.png)');
} else if ($xml.find('Numeric').text() == "40102") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kazakhstan/kcell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kazakhstan');
$("#flag").html('🇰🇿');
$("#photo").css('background', 'url(carriers/412.png)');
} else if ($xml.find('Numeric').text() == "40177") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kazakhstan/tele2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kazakhstan');
$("#flag").html('🇰🇿');
$("#photo").css('background', 'url(carriers/413.png)');

} else if ($xml.find('Numeric').text() == "63903") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kenya/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kenya');
$("#flag").html('🇰🇪');
$("#photo").css('background', 'url(carriers/414.png)');
} else if ($xml.find('Numeric').text() == "63910") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kenya/faiba/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kenya');
$("#flag").html('🇰🇪');
$("#photo").css('background', 'url(carriers/415.png)');
} else if ($xml.find('Numeric').text() == "63901") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kenya/safaricom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kenya');
$("#flag").html('🇰🇪');
$("#photo").css('background', 'url(carriers/416.png)');
} else if ($xml.find('Numeric').text() == "63907") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kenya/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kenya');
$("#flag").html('🇰🇪');
$("#photo").css('background', 'url(carriers/417.png)');

} else if ($xml.find('Numeric').text() == "54501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kiribati/athkl/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kiribati');
$("#flag").html('🇰🇮');
$("#photo").css('background', 'url(carriers/418.png)');

} else if ($xml.find('Numeric').text() == "41903") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kuwait/ooredoo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kuwait');
$("#flag").html('🇰🇼');
$("#photo").css('background', 'url(carriers/419.png)');
} else if ($xml.find('Numeric').text() == "41904") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kuwait/viva/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kuwait');
$("#flag").html('🇰🇼');
$("#photo").css('background', 'url(carriers/420.png)');
} else if ($xml.find('Numeric').text() == "41902") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kuwait/zain/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kuwait');
$("#flag").html('🇰🇼');
$("#photo").css('background', 'url(carriers/421.png)');

} else if ($xml.find('Numeric').text() == "43701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kyrgyzstan/beeline/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kyrgyzstan');
$("#flag").html('🇰🇬');
$("#photo").css('background', 'url(carriers/422.png)');
} else if ($xml.find('Numeric').text() == "43705") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kyrgyzstan/megacom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kyrgyzstan');
$("#flag").html('🇰🇬');
$("#photo").css('background', 'url(carriers/423.png)');
} else if ($xml.find('Numeric').text() == "43709") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/kyrgyzstan/o/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kyrgyzstan');
$("#flag").html('🇰🇬');
$("#photo").css('background', 'url(carriers/424.png)');

} else if ($xml.find('Numeric').text() == "45708") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/laos/tigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Laos');
$("#flag").html('🇱🇦');
$("#photo").css('background', 'url(carriers/425.png)');
} else if ($xml.find('Numeric').text() == "45702") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/laos/etl/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Laos');
$("#flag").html('🇱🇦');
$("#photo").css('background', 'url(carriers/426.png)');
} else if ($xml.find('Numeric').text() == "45701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/laos/laotel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Laos');
$("#flag").html('🇱🇦');
$("#photo").css('background', 'url(carriers/427.png)');
} else if ($xml.find('Numeric').text() == "45703") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/laos/unitel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Laos');
$("#flag").html('🇱🇦');
$("#photo").css('background', 'url(carriers/428.png)');

} else if ($xml.find('Numeric').text() == "24705") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/latvia/bite/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Latvia');
$("#flag").html('🇱🇻');
$("#photo").css('background', 'url(carriers/429.png)');
} else if ($xml.find('Numeric').text() == "24701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/latvia/lmt/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Latvia');
$("#flag").html('🇱🇻');
$("#photo").css('background', 'url(carriers/430.png)');
} else if ($xml.find('Numeric').text() == "24706") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/latvia/rigatta/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Latvia');
$("#flag").html('🇱🇻');
$("#photo").css('background', 'url(carriers/431.png)');
} else if ($xml.find('Numeric').text() == "24702") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/latvia/tele2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Latvia');
$("#flag").html('🇱🇻');
$("#photo").css('background', 'url(carriers/432.png)');
} else if ($xml.find('Numeric').text() == "24703") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/latvia/triatel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Latvia');
$("#flag").html('🇱🇻');
$("#photo").css('background', 'url(carriers/433.png)');

} else if ($xml.find('Numeric').text() == "41501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/lebanon/alfa/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Lebanon');
$("#flag").html('🇱🇧');
$("#photo").css('background', 'url(carriers/434.png)');
} else if ($xml.find('Numeric').text() == "41505") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/lebanon/ogero-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Lebanon');
$("#flag").html('🇱🇧');
$("#photo").css('background', 'url(carriers/435.png)');
} else if ($xml.find('Numeric').text() == "41503") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/lebanon/touch/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Lebanon');
$("#flag").html('🇱🇧');
$("#photo").css('background', 'url(carriers/436.png)');

} else if ($xml.find('Numeric').text() == "65102") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/lesotho/econet-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Lesotho');
$("#flag").html('🇱🇸');
$("#photo").css('background', 'url(carriers/437.png)');
} else if ($xml.find('Numeric').text() == "65101") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/lesotho/vodacom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Lesotho');
$("#flag").html('🇱🇸');
$("#photo").css('background', 'url(carriers/438.png)');

} else if ($xml.find('Numeric').text() == "61820") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/liberia/libtelco/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Liberia');
$("#flag").html('🇱🇷');
$("#photo").css('background', 'url(carriers/439.png)');
} else if ($xml.find('Numeric').text() == "61801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/liberia/lonestar-cell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Liberia');
$("#flag").html('🇱🇷');
$("#photo").css('background', 'url(carriers/440.png)');
} else if ($xml.find('Numeric').text() == "61804") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/liberia/novafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Liberia');
$("#flag").html('🇱🇷');
$("#photo").css('background', 'url(carriers/441.png)');
} else if ($xml.find('Numeric').text() == "61807") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/liberia/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Liberia');
$("#flag").html('🇱🇷');
$("#photo").css('background', 'url(carriers/442.png)');

} else if ($xml.find('Numeric').text() == "60601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/libya/al-madar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Libya');
$("#flag").html('🇱🇾');
$("#photo").css('background', 'url(carriers/443.png)');
} else if ($xml.find('Numeric').text() == "60602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/libya/aljeel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Libya');
$("#flag").html('🇱🇾');
$("#photo").css('background', 'url(carriers/444.png)');
} else if ($xml.find('Numeric').text() == "60606") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/libya/hatif/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Libya');
$("#flag").html('🇱🇾');
$("#photo").css('background', 'url(carriers/445.png)');
} else if ($xml.find('Numeric').text() == "60600") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/libya/libyana/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Libya');
$("#flag").html('🇱🇾');
$("#photo").css('background', 'url(carriers/446.png)');

} else if ($xml.find('Numeric').text() == "29502") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/liechtenstein/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Liechtenstein');
$("#flag").html('🇱🇮');
$("#photo").css('background', 'url(carriers/447.png)');
} else if ($xml.find('Numeric').text() == "29506") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/liechtenstein/cubic-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Liechtenstein');
$("#flag").html('🇱🇮');
$("#photo").css('background', 'url(carriers/448.png)');
} else if ($xml.find('Numeric').text() == "29505") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/liechtenstein/fl1/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Liechtenstein');
$("#flag").html('🇱🇮');
$("#photo").css('background', 'url(carriers/449.png)');
} else if ($xml.find('Numeric').text() == "29501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/liechtenstein/swisscom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Liechtenstein');
$("#flag").html('🇱🇮');
$("#photo").css('background', 'url(carriers/450.png)');

} else if ($xml.find('Numeric').text() == "24602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/lithuania/bite/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Lithuania');
$("#flag").html('🇱🇹');
$("#photo").css('background', 'url(carriers/451.png)');
} else if ($xml.find('Numeric').text() == "24606") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/lithuania/mediafon/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Lithuania');
$("#flag").html('🇱🇹');
$("#photo").css('background', 'url(carriers/452.png)');
} else if ($xml.find('Numeric').text() == "24603") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/lithuania/tele-2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Lithuania');
$("#flag").html('🇱🇹');
$("#photo").css('background', 'url(carriers/453.png)');
} else if ($xml.find('Numeric').text() == "24601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/lithuania/telia/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Lithuania');
$("#flag").html('🇱🇹');
$("#photo").css('background', 'url(carriers/454.png)');

} else if ($xml.find('Numeric').text() == "27099") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/luxembourg/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Luxembourg');
$("#flag").html('🇱🇺');
$("#photo").css('background', 'url(carriers/455.png)');
} else if ($xml.find('Numeric').text() == "27001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/luxembourg/post/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Luxembourg');
$("#flag").html('🇱🇺');
$("#photo").css('background', 'url(carriers/456.png)');
} else if ($xml.find('Numeric').text() == "27077") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/luxembourg/tango/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Luxembourg');
$("#flag").html('🇱🇺');
$("#photo").css('background', 'url(carriers/457.png)');

} else if ($xml.find('Numeric').text() == "45503") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/macao/3/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Macao');
$("#flag").html('🇲🇴');
$("#photo").css('background', 'url(carriers/458.png)');
} else if ($xml.find('Numeric').text() == "45507") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/macao/china-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Macao');
$("#flag").html('🇲🇴');
$("#photo").css('background', 'url(carriers/459.png)');
} else if ($xml.find('Numeric').text() == "45504") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/macao/ctm/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Macao');
$("#flag").html('🇲🇴');
$("#photo").css('background', 'url(carriers/460.png)');
} else if ($xml.find('Numeric').text() == "45506") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/macao/smartone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Macao');
$("#flag").html('🇲🇴');
$("#photo").css('background', 'url(carriers/461.png)');

} else if ($xml.find('Numeric').text() == "29404") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/macedonia/cosmofon/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Macedonia');
$("#flag").html('🇲🇰');
$("#photo").css('background', 'url(carriers/462.png)');
} else if ($xml.find('Numeric').text() == "29401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/macedonia/t-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Macedonia');
$("#flag").html('🇲🇰');
$("#photo").css('background', 'url(carriers/463.png)');
} else if ($xml.find('Numeric').text() == "29402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/macedonia/vip/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Macedonia');
$("#flag").html('🇲🇰');
$("#photo").css('background', 'url(carriers/464.png)');

} else if ($xml.find('Numeric').text() == "64601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/madagascar/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Madagascar');
$("#flag").html('🇲🇬');
$("#photo").css('background', 'url(carriers/465.png)');
} else if ($xml.find('Numeric').text() == "64602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/madagascar/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Madagascar');
$("#flag").html('🇲🇬');
$("#photo").css('background', 'url(carriers/466.png)');
} else if ($xml.find('Numeric').text() == "64604") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/madagascar/telma/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Madagascar');
$("#flag").html('🇲🇬');
$("#photo").css('background', 'url(carriers/467.png)');

} else if ($xml.find('Numeric').text() == "65002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malawi/access/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malawi');
$("#flag").html('🇲🇼');
$("#photo").css('background', 'url(carriers/468.png)');
} else if ($xml.find('Numeric').text() == "65010") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malawi/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malawi');
$("#flag").html('🇲🇼');
$("#photo").css('background', 'url(carriers/469.png)');
} else if ($xml.find('Numeric').text() == "65001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malawi/tnm/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malawi');
$("#flag").html('🇲🇼');
$("#photo").css('background', 'url(carriers/470.png)');

} else if ($xml.find('Numeric').text() == "50213") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malaysia/celcom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malaysia');
$("#flag").html('🇲🇾');
$("#photo").css('background', 'url(carriers/471.png)');
} else if ($xml.find('Numeric').text() == "50216") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malaysia/digi/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malaysia');
$("#flag").html('🇲🇾');
$("#photo").css('background', 'url(carriers/472.png)');
} else if ($xml.find('Numeric').text() == "50220") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malaysia/electcoms/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malaysia');
$("#flag").html('🇲🇾');
$("#photo").css('background', 'url(carriers/473.png)');
} else if ($xml.find('Numeric').text() == "50212") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malaysia/maxis/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malaysia');
$("#flag").html('🇲🇾');
$("#photo").css('background', 'url(carriers/474.png)');
} else if ($xml.find('Numeric').text() == "502153") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malaysia/p1/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malaysia');
$("#flag").html('🇲🇾');
$("#photo").css('background', 'url(carriers/475.png)');
} else if ($xml.find('Numeric').text() == "50201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malaysia/telekom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malaysia');
$("#flag").html('🇲🇾');
$("#photo").css('background', 'url(carriers/476.png)');
} else if ($xml.find('Numeric').text() == "502150") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malaysia/tune-talk/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malaysia');
$("#flag").html('🇲🇾');
$("#photo").css('background', 'url(carriers/477.png)');
} else if ($xml.find('Numeric').text() == "50218") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malaysia/u-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malaysia');
$("#flag").html('🇲🇾');
$("#photo").css('background', 'url(carriers/478.png)');
} else if ($xml.find('Numeric').text() == "502152") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malaysia/yes/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malaysia');
$("#flag").html('🇲🇾');
$("#photo").css('background', 'url(carriers/479.png)');

} else if ($xml.find('Numeric').text() == "47201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/maldives/dhiraagu/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Maldives');
$("#flag").html('🇲🇻');
$("#photo").css('background', 'url(carriers/480.png)');
} else if ($xml.find('Numeric').text() == "47202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/maldives/ooredoo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Maldives');
$("#flag").html('🇲🇻');
$("#photo").css('background', 'url(carriers/481.png)');

} else if ($xml.find('Numeric').text() == "61002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mali/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mali');
$("#flag").html('🇲🇱');
$("#photo").css('background', 'url(carriers/482.png)');
} else if ($xml.find('Numeric').text() == "61001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mali/malitel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mali');
$("#flag").html('🇲🇱');
$("#photo").css('background', 'url(carriers/483.png)');

} else if ($xml.find('Numeric').text() == "27821") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malta/go/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malta');
$("#flag").html('🇲🇹');
$("#photo").css('background', 'url(carriers/484.png)');
} else if ($xml.find('Numeric').text() == "27877") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malta/melita/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malta');
$("#flag").html('🇲🇹');
$("#photo").css('background', 'url(carriers/485.png)');
} else if ($xml.find('Numeric').text() == "27801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/malta/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Malta');
$("#flag").html('🇲🇹');
$("#photo").css('background', 'url(carriers/486.png)');

} else if ($xml.find('Numeric').text() == "60902") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mauretania/chinguitel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mauretania');
$("#flag").html('🇲🇷');
$("#photo").css('background', 'url(carriers/487.png)');
} else if ($xml.find('Numeric').text() == "60901") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mauretania/mattel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mauretania');
$("#flag").html('🇲🇷');
$("#photo").css('background', 'url(carriers/488.png)');
} else if ($xml.find('Numeric').text() == "60910") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mauretania/mauritel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mauretania');
$("#flag").html('🇲🇷');
$("#photo").css('background', 'url(carriers/489.png)');

} else if ($xml.find('Numeric').text() == "61703") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mauritius/chili/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mauritius');
$("#flag").html('🇲🇺');
$("#photo").css('background', 'url(carriers/490.png)');
} else if ($xml.find('Numeric').text() == "61710") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mauritius/emtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mauritius');
$("#flag").html('🇲🇺');
$("#photo").css('background', 'url(carriers/491.png)');
} else if ($xml.find('Numeric').text() == "61701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mauritius/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mauritius');
$("#flag").html('🇲🇺');
$("#photo").css('background', 'url(carriers/492.png)');

} else if ($xml.find('Numeric').text() == "334140") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mexico/altan-redes/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mexico');
$("#flag").html('🇲🇽');
$("#photo").css('background', 'url(carriers/493.png)');
} else if ($xml.find('Numeric').text() == "334010") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mexico/att/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mexico');
$("#flag").html('🇲🇽');
$("#photo").css('background', 'url(carriers/494.png)');
} else if ($xml.find('Numeric').text() == "334030") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mexico/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mexico');
$("#flag").html('🇲🇽');
$("#photo").css('background', 'url(carriers/495.png)');
} else if ($xml.find('Numeric').text() == "334020") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mexico/telcel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mexico');
$("#flag").html('🇲🇽');
$("#photo").css('background', 'url(carriers/496.png)');
} else if ($xml.find('Numeric').text() == "334150") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mexico/ultranet/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mexico');
$("#flag").html('🇲🇽');
$("#photo").css('background', 'url(carriers/497.png)');
} else if ($xml.find('Numeric').text() == "334040") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mexico/unefon/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mexico');
$("#flag").html('🇲🇽');
$("#photo").css('background', 'url(carriers/498.png)');

} else if ($xml.find('Numeric').text() == "55001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/micronesia/fsmtc/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Micronesia');
$("#flag").html('🇫🇲');
$("#photo").css('background', 'url(carriers/499.png)');

} else if ($xml.find('Numeric').text() == "25900") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/moldova/idc/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Moldova');
$("#flag").html('🇲🇩');
$("#photo").css('background', 'url(carriers/500.png)');
} else if ($xml.find('Numeric').text() == "25902") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/moldova/moldcell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Moldova');
$("#flag").html('🇲🇩');
$("#photo").css('background', 'url(carriers/501.png)');
} else if ($xml.find('Numeric').text() == "25901") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/moldova/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Moldova');
$("#flag").html('🇲🇩');
$("#photo").css('background', 'url(carriers/502.png)');
} else if ($xml.find('Numeric').text() == "25903") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/moldova/unite/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Moldova');
$("#flag").html('🇲🇩');
$("#photo").css('background', 'url(carriers/503.png)');

} else if ($xml.find('Numeric').text() == "21210") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/monaco/telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Monaco');
$("#flag").html('🇲🇨');
$("#photo").css('background', 'url(carriers/504.png)');

} else if ($xml.find('Numeric').text() == "42898") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mongolia/gmobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mongolia');
$("#flag").html('🇲🇳');
$("#photo").css('background', 'url(carriers/505.png)');
} else if ($xml.find('Numeric').text() == "42899") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mongolia/mobicom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mongolia');
$("#flag").html('🇲🇳');
$("#photo").css('background', 'url(carriers/506.png)');
} else if ($xml.find('Numeric').text() == "42891") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mongolia/skytel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mongolia');
$("#flag").html('🇲🇳');
$("#photo").css('background', 'url(carriers/507.png)');
} else if ($xml.find('Numeric').text() == "42888") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mongolia/unitel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mongolia');
$("#flag").html('🇲🇳');
$("#photo").css('background', 'url(carriers/508.png)');

} else if ($xml.find('Numeric').text() == "29703") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/montenegro/mtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Montenegro');
$("#flag").html('🇲🇪');
$("#photo").css('background', 'url(carriers/509.png)');
} else if ($xml.find('Numeric').text() == "29702") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/montenegro/t-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Montenegro');
$("#flag").html('🇲🇪');
$("#photo").css('background', 'url(carriers/510.png)');
} else if ($xml.find('Numeric').text() == "29701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/montenegro/telenor/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Montenegro');
$("#flag").html('🇲🇪');
$("#photo").css('background', 'url(carriers/511.png)');

} else if ($xml.find('Numeric').text() == "60402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/morocco/inwi/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Morocco');
$("#flag").html('🇲🇦');
$("#photo").css('background', 'url(carriers/512.png)');
} else if ($xml.find('Numeric').text() == "60406") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/morocco/iam/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Morocco');
$("#flag").html('🇲🇦');
$("#photo").css('background', 'url(carriers/513.png)');
} else if ($xml.find('Numeric').text() == "60400") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/morocco/orange/https://www.imei.info/carriers/morocco/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Morocco');
$("#flag").html('🇲🇦');
$("#photo").css('background', 'url(carriers/514.png)');

} else if ($xml.find('Numeric').text() == "64301") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mozambique/mcel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mozambique');
$("#flag").html('🇲🇿');
$("#photo").css('background', 'url(carriers/515.png)');
} else if ($xml.find('Numeric').text() == "64303") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mozambique/movitel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mozambique');
$("#flag").html('🇲🇿');
$("#photo").css('background', 'url(carriers/516.png)');
} else if ($xml.find('Numeric').text() == "64304") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/mozambique/vodacom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Mozambique');
$("#flag").html('🇲🇿');
$("#photo").css('background', 'url(carriers/517.png)');

} else if ($xml.find('Numeric').text() == "41400") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/myanmar/mpt/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Myanmar');
$("#flag").html('🇲🇲');
$("#photo").css('background', 'url(carriers/518.png)');
} else if ($xml.find('Numeric').text() == "41409") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/myanmar/mytel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Myanmar');
$("#flag").html('🇲🇲');
$("#photo").css('background', 'url(carriers/519.png)');
} else if ($xml.find('Numeric').text() == "41405") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/myanmar/ooredoo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Myanmar');
$("#flag").html('🇲🇲');
$("#photo").css('background', 'url(carriers/520.png)');
} else if ($xml.find('Numeric').text() == "41406") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/myanmar/telenor/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Myanmar');
$("#flag").html('🇲🇲');
$("#photo").css('background', 'url(carriers/521.png)');

} else if ($xml.find('Numeric').text() == "64901") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/namibia/mtc/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Namibia');
$("#flag").html('🇳🇦');
$("#photo").css('background', 'url(carriers/522.png)');
} else if ($xml.find('Numeric').text() == "64903") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/namibia/tn-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Namibia');
$("#flag").html('🇳🇦');
$("#photo").css('background', 'url(carriers/523.png)');

} else if ($xml.find('Numeric').text() == "53602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nauru/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nauru');
$("#flag").html('🇳🇷');
$("#photo").css('background', 'url(carriers/524.png)');

} else if ($xml.find('Numeric').text() == "42902") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nepal/ncell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nepal');
$("#flag").html('🇳🇵');
$("#photo").css('background', 'url(carriers/525.png)');
} else if ($xml.find('Numeric').text() == "42901") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nepal/nepal-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nepal');
$("#flag").html('🇳🇵');
$("#photo").css('background', 'url(carriers/526.png)');
} else if ($xml.find('Numeric').text() == "42904") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nepal/smart-cell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nepal');
$("#flag").html('🇳🇵');
$("#photo").css('background', 'url(carriers/527.png)');
} else if ($xml.find('Numeric').text() == "42903") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nepal/united-telecom-limited/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nepal');
$("#flag").html('🇳🇵');
$("#photo").css('background', 'url(carriers/528.png)');

} else if ($xml.find('Numeric').text() == "20408") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/netherlands/kpn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Netherlands');
$("#flag").html('🇳🇱');
$("#photo").css('background', 'url(carriers/529.png)');
} else if ($xml.find('Numeric').text() == "20409") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/netherlands/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Netherlands');
$("#flag").html('🇳🇱');
$("#photo").css('background', 'url(carriers/530.png)');
} else if ($xml.find('Numeric').text() == "20416") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/netherlands/t-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Netherlands');
$("#flag").html('🇳🇱');
$("#photo").css('background', 'url(carriers/531.png)');
} else if ($xml.find('Numeric').text() == "20402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/netherlands/tele2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Netherlands');
$("#flag").html('🇳🇱');
$("#photo").css('background', 'url(carriers/532.png)');
} else if ($xml.find('Numeric').text() == "20412") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/netherlands/telfort/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Netherlands');
$("#flag").html('🇳🇱');
$("#photo").css('background', 'url(carriers/533.png)');
} else if ($xml.find('Numeric').text() == "20406") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/netherlands/vectone-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Netherlands');
$("#flag").html('🇳🇱');
$("#photo").css('background', 'url(carriers/534.png)');
} else if ($xml.find('Numeric').text() == "20404") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/netherlands/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Netherlands');
$("#flag").html('🇳🇱');
$("#photo").css('background', 'url(carriers/535.png)');
} else if ($xml.find('Numeric').text() == "20415") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/netherlands/ziggo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Netherlands');
$("#flag").html('🇳🇱');
$("#photo").css('background', 'url(carriers/536.png)');

} else if ($xml.find('Numeric').text() == "36268") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/netherlands-antilles/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Netherlands-antilles');
$("#flag").html('🇳🇱');
$("#photo").css('background', 'url(carriers/537.png)');
} else if ($xml.find('Numeric').text() == "36251") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/netherlands-antilles/telcell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Netherlands-antilles');
$("#flag").html('🇳🇱');
$("#photo").css('background', 'url(carriers/538.png)');
} else if ($xml.find('Numeric').text() == "36259") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/netherlands-antilles/uts/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Netherlands-antilles');
$("#flag").html('🇳🇱');
$("#photo").css('background', 'url(carriers/539.png)');

} else if ($xml.find('Numeric').text() == "54601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/new-caledonia/opt/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('New-caledonia');
$("#flag").html('🇳🇨');
$("#photo").css('background', 'url(carriers/540.png)');

} else if ($xml.find('Numeric').text() == "53024") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/new-zealand/2degrees/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('New-zealand');
$("#flag").html('🇳🇿');
$("#photo").css('background', 'url(carriers/541.png)');
} else if ($xml.find('Numeric').text() == "53005") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/new-zealand/spark/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('New-zealand');
$("#flag").html('🇳🇿');
$("#photo").css('background', 'url(carriers/542.png)');
} else if ($xml.find('Numeric').text() == "53001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/new-zealand/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('New-zealand');
$("#flag").html('🇳🇿');
$("#photo").css('background', 'url(carriers/543.png)');

} else if ($xml.find('Numeric').text() == "71021") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nicaragua/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nicaragua');
$("#flag").html('🇳🇮');
$("#photo").css('background', 'url(carriers/544.png)');
} else if ($xml.find('Numeric').text() == "71030") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nicaragua/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nicaragua');
$("#flag").html('🇳🇮');
$("#photo").css('background', 'url(carriers/545.png)');

} else if ($xml.find('Numeric').text() == "61402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/niger/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Niger');
$("#flag").html('🇳🇪');
$("#photo").css('background', 'url(carriers/546.png)');
} else if ($xml.find('Numeric').text() == "61403") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/niger/moov/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Niger');
$("#flag").html('🇳🇪');
$("#photo").css('background', 'url(carriers/547.png)');
} else if ($xml.find('Numeric').text() == "61404") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/niger/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Niger');
$("#flag").html('🇳🇪');
$("#photo").css('background', 'url(carriers/548.png)');
} else if ($xml.find('Numeric').text() == "61401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/niger/sahelcom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Niger');
$("#flag").html('🇳🇪');
$("#photo").css('background', 'url(carriers/549.png)');

} else if ($xml.find('Numeric').text() == "62160") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nigeria/9mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nigeria');
$("#flag").html('🇳🇬');
$("#photo").css('background', 'url(carriers/550.png)');
} else if ($xml.find('Numeric').text() == "62120") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nigeria/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nigeria');
$("#flag").html('🇳🇬');
$("#photo").css('background', 'url(carriers/551.png)');
} else if ($xml.find('Numeric').text() == "62150") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nigeria/glo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nigeria');
$("#flag").html('🇳🇬');
$("#photo").css('background', 'url(carriers/552.png)');
} else if ($xml.find('Numeric').text() == "62122") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nigeria/interc/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nigeria');
$("#flag").html('🇳🇬');
$("#photo").css('background', 'url(carriers/553.png)');
} else if ($xml.find('Numeric').text() == "62130") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nigeria/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nigeria');
$("#flag").html('🇳🇬');
$("#photo").css('background', 'url(carriers/554.png)');
} else if ($xml.find('Numeric').text() == "62140") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nigeria/ntel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nigeria');
$("#flag").html('🇳🇬');
$("#photo").css('background', 'url(carriers/555.png)');
} else if ($xml.find('Numeric').text() == "62127") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nigeria/smile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nigeria');
$("#flag").html('🇳🇬');
$("#photo").css('background', 'url(carriers/556.png)');
} else if ($xml.find('Numeric').text() == "62124") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nigeria/spectranet/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nigeria');
$("#flag").html('🇳🇬');
$("#photo").css('background', 'url(carriers/557.png)');
} else if ($xml.find('Numeric').text() == "62126") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/nigeria/swift/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Nigeria');
$("#flag").html('🇳🇬');
$("#photo").css('background', 'url(carriers/558.png)');

} else if ($xml.find('Numeric').text() == "55501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/niue/telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Niue');
$("#flag").html('🇳🇺');
$("#photo").css('background', 'url(carriers/559.png)');

} else if ($xml.find('Numeric').text() == "46705") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/north-korea/koryolink/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('North-korea');
$("#flag").html('🇰🇵');
$("#photo").css('background', 'url(carriers/560.png)');

} else if ($xml.find('Numeric').text() == "24206") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/norway/ice/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Norway');
$("#flag").html('🇳🇴');
$("#photo").css('background', 'url(carriers/561.png)');
} else if ($xml.find('Numeric').text() == "24223") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/norway/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Norway');
$("#flag").html('🇳🇴');
$("#photo").css('background', 'url(carriers/562.png)');
} else if ($xml.find('Numeric').text() == "24208") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/norway/tdc/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Norway');
$("#flag").html('🇳🇴');
$("#photo").css('background', 'url(carriers/563.png)');
} else if ($xml.find('Numeric').text() == "24204") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/norway/tele2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Norway');
$("#flag").html('🇳🇴');
$("#photo").css('background', 'url(carriers/564.png)');
} else if ($xml.find('Numeric').text() == "24201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/norway/telenor/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Norway');
$("#flag").html('🇳🇴');
$("#photo").css('background', 'url(carriers/565.png)');
} else if ($xml.find('Numeric').text() == "24202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/norway/telia/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Norway');
$("#flag").html('🇳🇴');
$("#photo").css('background', 'url(carriers/566.png)');

} else if ($xml.find('Numeric').text() == "42204") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/oman/omantel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Oman');
$("#flag").html('🇴🇲');
$("#photo").css('background', 'url(carriers/567.png)');
} else if ($xml.find('Numeric').text() == "42203") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/oman/ooredoo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Oman');
$("#flag").html('🇴🇲');
$("#photo").css('background', 'url(carriers/568.png)');

} else if ($xml.find('Numeric').text() == "41002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/pakistan/charji/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Pakistan');
$("#flag").html('🇵🇰');
$("#photo").css('background', 'url(carriers/569.png)');
} else if ($xml.find('Numeric').text() == "41001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/pakistan/jazz/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Pakistan');
$("#flag").html('🇵🇰');
$("#photo").css('background', 'url(carriers/570.png)');
} else if ($xml.find('Numeric').text() == "41005") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/pakistan/instaphone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Pakistan');
$("#flag").html('🇵🇰');
$("#photo").css('background', 'url(carriers/571.png)');
} else if ($xml.find('Numeric').text() == "41006") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/pakistan/telenor/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Pakistan');
$("#flag").html('🇵🇰');
$("#photo").css('background', 'url(carriers/572.png)');
} else if ($xml.find('Numeric').text() == "41003") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/pakistan/ufone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Pakistan');
$("#flag").html('🇵🇰');
$("#photo").css('background', 'url(carriers/573.png)');
} else if ($xml.find('Numeric').text() == "41004") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/pakistan/zong/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Pakistan');
$("#flag").html('🇵🇰');
$("#photo").css('background', 'url(carriers/574.png)');

} else if ($xml.find('Numeric').text() == "55101") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/palau/pncc/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Palau');
$("#flag").html('🇵🇼');
$("#photo").css('background', 'url(carriers/575.png)');

} else if ($xml.find('Numeric').text() == "42505") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/palestine/jawwal/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Palestine');
$("#flag").html('🇵🇸');
$("#photo").css('background', 'url(carriers/576.png)');
} else if ($xml.find('Numeric').text() == "42506") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/palestine/wataniya/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Palestine');
$("#flag").html('🇵🇸');
$("#photo").css('background', 'url(carriers/577.png)');

} else if ($xml.find('Numeric').text() == "71403") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/panama/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Panama');
$("#flag").html('🇵🇦');
$("#photo").css('background', 'url(carriers/578.png)');
} else if ($xml.find('Numeric').text() == "71404") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/panama/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Panama');
$("#flag").html('🇵🇦');
$("#photo").css('background', 'url(carriers/579.png)');
} else if ($xml.find('Numeric').text() == "71401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/panama/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Panama');
$("#flag").html('🇵🇦');
$("#photo").css('background', 'url(carriers/580.png)');
} else if ($xml.find('Numeric').text() == "71402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/panama/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Panama');
$("#flag").html('🇵🇦');
$("#photo").css('background', 'url(carriers/581.png)');

} else if ($xml.find('Numeric').text() == "53701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/papua-new-guinea/bmobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Papua-new-guinea');
$("#flag").html('🇵🇬');
$("#photo").css('background', 'url(carriers/582.png)');
} else if ($xml.find('Numeric').text() == "53703") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/papua-new-guinea/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Papua-new-guinea');
$("#flag").html('🇵🇬');
$("#photo").css('background', 'url(carriers/583.png)');
} else if ($xml.find('Numeric').text() == "53702") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/papua-new-guinea/telikom-png/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Papua-new-guinea');
$("#flag").html('🇵🇬');
$("#photo").css('background', 'url(carriers/584.png)');

} else if ($xml.find('Numeric').text() == "74402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/paraguay/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Paraguay');
$("#flag").html('🇵🇾');
$("#photo").css('background', 'url(carriers/585.png)');
} else if ($xml.find('Numeric').text() == "74406") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/paraguay/copaco/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Paraguay');
$("#flag").html('🇵🇾');
$("#photo").css('background', 'url(carriers/586.png)');
} else if ($xml.find('Numeric').text() == "74405") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/paraguay/personal/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Paraguay');
$("#flag").html('🇵🇾');
$("#photo").css('background', 'url(carriers/587.png)');
} else if ($xml.find('Numeric').text() == "74404") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/paraguay/tigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Paraguay');
$("#flag").html('🇵🇾');
$("#photo").css('background', 'url(carriers/588.png)');
} else if ($xml.find('Numeric').text() == "74401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/paraguay/vox/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Paraguay');
$("#flag").html('🇵🇾');
$("#photo").css('background', 'url(carriers/589.png)');

} else if ($xml.find('Numeric').text() == "71615") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/peru/Bitel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Peru');
$("#flag").html('🇵🇪');
$("#photo").css('background', 'url(carriers/590.png)');
} else if ($xml.find('Numeric').text() == "71610") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/peru/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Peru');
$("#flag").html('🇵🇪');
$("#photo").css('background', 'url(carriers/591.png)');
} else if ($xml.find('Numeric').text() == "71607") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/peru/entel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Peru');
$("#flag").html('🇵🇪');
$("#photo").css('background', 'url(carriers/592.png)');
} else if ($xml.find('Numeric').text() == "71606") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/peru/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Peru');
$("#flag").html('🇵🇪');
$("#photo").css('background', 'url(carriers/593.png)');

} else if ($xml.find('Numeric').text() == "51502") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/philippines/globe-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Philippines');
$("#flag").html('🇵🇭');
$("#photo").css('background', 'url(carriers/594.png)');
} else if ($xml.find('Numeric').text() == "51503") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/philippines/smart/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Philippines');
$("#flag").html('🇵🇭');
$("#photo").css('background', 'url(carriers/595.png)');
} else if ($xml.find('Numeric').text() == "51505") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/philippines/sun-cellular/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Philippines');
$("#flag").html('🇵🇭');
$("#photo").css('background', 'url(carriers/596.png)');

} else if ($xml.find('Numeric').text() == "26004") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/poland/aero2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Poland');
$("#flag").html('🇵🇱');
$("#photo").css('background', 'url(carriers/597.png)');
} else if ($xml.find('Numeric').text() == "26012") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/poland/cyfrowy-polsat/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Poland');
$("#flag").html('🇵🇱');
$("#photo").css('background', 'url(carriers/598.png)');
} else if ($xml.find('Numeric').text() == "26015") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/poland/heyah/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Poland');
$("#flag").html('🇵🇱');
$("#photo").css('background', 'url(carriers/599.png)');
} else if ($xml.find('Numeric').text() == "26009") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/poland/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Poland');
$("#flag").html('🇵🇱');
$("#photo").css('background', 'url(carriers/600.png)');
} else if ($xml.find('Numeric').text() == "26011") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/poland/nordisk/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Poland');
$("#flag").html('🇵🇱');
$("#photo").css('background', 'url(carriers/601.png)');
} else if ($xml.find('Numeric').text() == "26003") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/poland/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Poland');
$("#flag").html('🇵🇱');
$("#photo").css('background', 'url(carriers/602.png)');
} else if ($xml.find('Numeric').text() == "26006") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/poland/play/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Poland');
$("#flag").html('🇵🇱');
$("#photo").css('background', 'url(carriers/603.png)');
} else if ($xml.find('Numeric').text() == "26001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/poland/plus/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Poland');
$("#flag").html('🇵🇱');
$("#photo").css('background', 'url(carriers/604.png)');
} else if ($xml.find('Numeric').text() == "26013") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/poland/sferia/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Poland');
$("#flag").html('🇵🇱');
$("#photo").css('background', 'url(carriers/605.png)');
} else if ($xml.find('Numeric').text() == "26002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/poland/t-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Poland');
$("#flag").html('🇵🇱');
$("#photo").css('background', 'url(carriers/606.png)');

} else if ($xml.find('Numeric').text() == "26804") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/portugal/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Portugal');
$("#flag").html('🇵🇹');
$("#photo").css('background', 'url(carriers/607.png)');
} else if ($xml.find('Numeric').text() == "26802") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/portugal/meo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Portugal');
$("#flag").html('🇵🇹');
$("#photo").css('background', 'url(carriers/608.png)');
} else if ($xml.find('Numeric').text() == "26803") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/portugal/nos/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Portugal');
$("#flag").html('🇵🇹');
$("#photo").css('background', 'url(carriers/609.png)');
} else if ($xml.find('Numeric').text() == "26801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/portugal/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Portugal');
$("#flag").html('🇵🇹');
$("#photo").css('background', 'url(carriers/610.png)');

} else if ($xml.find('Numeric').text() == "330110") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/puerto-rico/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Puerto-rico');
$("#flag").html('🇵🇷');
$("#photo").css('background', 'url(carriers/611.png)');
} else if ($xml.find('Numeric').text() == "330000") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/puerto-rico/open-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Puerto-rico');
$("#flag").html('🇵🇷');
$("#photo").css('background', 'url(carriers/612.png)');

} else if ($xml.find('Numeric').text() == "42701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/qatar/ooredoo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Qatar');
$("#flag").html('🇶🇦');
$("#photo").css('background', 'url(carriers/613.png)');
} else if ($xml.find('Numeric').text() == "42702") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/qatar/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Qatar');
$("#flag").html('🇶🇦');
$("#photo").css('background', 'url(carriers/614.png)');

} else if ($xml.find('Numeric').text() == "62901") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/republic-of-congo/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Republic-of-congo');
$("#flag").html('🇨🇬');
$("#photo").css('background', 'url(carriers/615.png)');
} else if ($xml.find('Numeric').text() == "62910") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/republic-of-congo/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Republic-of-congo');
$("#flag").html('🇨🇬');
$("#photo").css('background', 'url(carriers/616.png)');
} else if ($xml.find('Numeric').text() == "62907") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/republic-of-congo/warid-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Republic-of-congo');
$("#flag").html('🇨🇬');
$("#photo").css('background', 'url(carriers/617.png)');

} else if ($xml.find('Numeric').text() == "64702") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/reunion/free/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Reunion');
$("#flag").html('🇷🇪');
$("#photo").css('background', 'url(carriers/618.png)');
} else if ($xml.find('Numeric').text() == "64700") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/reunion/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Reunion');
$("#flag").html('🇷🇪');
$("#photo").css('background', 'url(carriers/619.png)');
} else if ($xml.find('Numeric').text() == "64710") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/reunion/sfr/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Reunion');
$("#flag").html('🇷🇪');
$("#photo").css('background', 'url(carriers/620.png)');

} else if ($xml.find('Numeric').text() == "22605") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/romania/digi-mobil/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Romania');
$("#flag").html('🇷🇴');
$("#photo").css('background', 'url(carriers/621.png)');
} else if ($xml.find('Numeric').text() == "22615") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/romania/idilis/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Romania');
$("#flag").html('🇷🇴');
$("#photo").css('background', 'url(carriers/622.png)');
} else if ($xml.find('Numeric').text() == "22616") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/romania/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Romania');
$("#flag").html('🇷🇴');
$("#photo").css('background', 'url(carriers/623.png)');
} else if ($xml.find('Numeric').text() == "22610") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/romania/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Romania');
$("#flag").html('🇷🇴');
$("#photo").css('background', 'url(carriers/624.png)');
} else if ($xml.find('Numeric').text() == "22603") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/romania/telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Romania');
$("#flag").html('🇷🇴');
$("#photo").css('background', 'url(carriers/625.png)');
} else if ($xml.find('Numeric').text() == "22601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/romania/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Romania');
$("#flag").html('🇷🇴');
$("#photo").css('background', 'url(carriers/626.png)');

} else if ($xml.find('Numeric').text() == "25028") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/russia/beeline/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Russia');
$("#flag").html('🇷🇺');
$("#photo").css('background', 'url(carriers/627.png)');
} else if ($xml.find('Numeric').text() == "25002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/russia/megafon/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Russia');
$("#flag").html('🇷🇺');
$("#photo").css('background', 'url(carriers/628.png)');
} else if ($xml.find('Numeric').text() == "25035") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/russia/motiv-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Russia');
$("#flag").html('🇷🇺');
$("#photo").css('background', 'url(carriers/629.png)');
} else if ($xml.find('Numeric').text() == "25001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/russia/mts/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Russia');
$("#flag").html('🇷🇺');
$("#photo").css('background', 'url(carriers/630.png)');
} else if ($xml.find('Numeric').text() == "25039") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/russia/rostelecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Russia');
$("#flag").html('🇷🇺');
$("#photo").css('background', 'url(carriers/631.png)');
} else if ($xml.find('Numeric').text() == "25006") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/russia/skylink/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Russia');
$("#flag").html('🇷🇺');
$("#photo").css('background', 'url(carriers/632.png)');
} else if ($xml.find('Numeric').text() == "25054") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/russia/tattelecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Russia');
$("#flag").html('🇷🇺');
$("#photo").css('background', 'url(carriers/633.png)');
} else if ($xml.find('Numeric').text() == "25020") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/russia/tele2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Russia');
$("#flag").html('🇷🇺');
$("#photo").css('background', 'url(carriers/634.png)');
} else if ($xml.find('Numeric').text() == "25008") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/russia/vainah-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Russia');
$("#flag").html('🇷🇺');
$("#photo").css('background', 'url(carriers/635.png)');
} else if ($xml.find('Numeric').text() == "25011") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/russia/yota/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Russia');
$("#flag").html('🇷🇺');
$("#photo").css('background', 'url(carriers/636.png)');

} else if ($xml.find('Numeric').text() == "63514") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/rwanda/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Rwanda');
$("#flag").html('🇷🇼');
$("#photo").css('background', 'url(carriers/637.png)');
} else if ($xml.find('Numeric').text() == "63510") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/rwanda/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Rwanda');
$("#flag").html('🇷🇼');
$("#photo").css('background', 'url(carriers/638.png)');
} else if ($xml.find('Numeric').text() == "63513") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/rwanda/tigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Rwanda');
$("#flag").html('🇷🇼');
$("#photo").css('background', 'url(carriers/639.png)');

} else if ($xml.find('Numeric').text() == "356050") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/saint-kitts-and-nevis/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Saint-kitts-and-nevis');
$("#flag").html('🇰🇳');
$("#photo").css('background', 'url(carriers/640.png)');
} else if ($xml.find('Numeric').text() == "356110") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/saint-kitts-and-nevis/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Saint-kitts-and-nevis');
$("#flag").html('🇰🇳');
$("#photo").css('background', 'url(carriers/641.png)');

} else if ($xml.find('Numeric').text() == "358050") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/saint-lucia/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Saint-lucia');
$("#flag").html('🇱🇨');
$("#photo").css('background', 'url(carriers/642.png)');
} else if ($xml.find('Numeric').text() == "358110") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/saint-lucia/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Saint-lucia');
$("#flag").html('🇱🇨');
$("#photo").css('background', 'url(carriers/643.png)');

} else if ($xml.find('Numeric').text() == "360050") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/saint-vincent-and-the-grenadines/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Saint-vincent-and-the-grenadines');
$("#flag").html('🇻🇨');
$("#photo").css('background', 'url(carriers/644.png)');
} else if ($xml.find('Numeric').text() == "360110") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/saint-vincent-and-the-grenadines/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Saint-vincent-and-the-grenadines');
$("#flag").html('🇻🇨');
$("#photo").css('background', 'url(carriers/645.png)');

} else if ($xml.find('Numeric').text() == "30801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/saint-pierre-and-miquelon/ameris/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Saint-pierre-and-miquelon');
$("#flag").html('🇵🇲');
$("#photo").css('background', 'url(carriers/646.png)');

} else if ($xml.find('Numeric').text() == "54927") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/samoa/bluesky/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Samoa');
$("#flag").html('🇼🇸');
$("#photo").css('background', 'url(carriers/647.png)');
} else if ($xml.find('Numeric').text() == "54900") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/samoa/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Samoa');
$("#flag").html('🇼🇸');
$("#photo").css('background', 'url(carriers/648.png)');

} else if ($xml.find('Numeric').text() == "29201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/san-marino/smt/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('San-marino');
$("#flag").html('🇸🇲');
$("#photo").css('background', 'url(carriers/649.png)');

} else if ($xml.find('Numeric').text() == "62601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sao-tome-and-principe/cst/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sao-tome-and-principe');
$("#flag").html('🇸🇹');
$("#photo").css('background', 'url(carriers/650.png)');
} else if ($xml.find('Numeric').text() == "62602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sao-tome-and-principe/unitel-stp/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sao-tome-and-principe');
$("#flag").html('🇸🇹');
$("#photo").css('background', 'url(carriers/651.png)');

} else if ($xml.find('Numeric').text() == "42003") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/saudi-arabia/mobily/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kingdom Saudi Arabia');
$("#flag").html('🇸🇦');
$("#photo").css('background', 'url(carriers/652.png)');
} else if ($xml.find('Numeric').text() == "42001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/saudi-arabia/stc/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kingdom Saudi Arabia');
$("#flag").html('🇸🇦');
$("#photo").css('background', 'url(carriers/653.png)');
} else if ($xml.find('Numeric').text() == "42005") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/saudi-arabia/virgin-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kingdom Saudi Arabia');
$("#flag").html('🇸🇦');
$("#photo").css('background', 'url(carriers/654.png)');
} else if ($xml.find('Numeric').text() == "42004") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/saudi-arabia/zain/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Kingdom Saudi Arabia');
$("#flag").html('🇸🇦');
$("#photo").css('background', 'url(carriers/655.png)');

} else if ($xml.find('Numeric').text() == "60803") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/senegal/expresso-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Senegal');
$("#flag").html('🇸🇳');
$("#photo").css('background', 'url(carriers/656.png)');
} else if ($xml.find('Numeric').text() == "60801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/senegal/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Senegal');
$("#flag").html('🇸🇳');
$("#photo").css('background', 'url(carriers/657.png)');
} else if ($xml.find('Numeric').text() == "60802") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/senegal/tigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Senegal');
$("#flag").html('🇸🇳');
$("#photo").css('background', 'url(carriers/658.png)');

} else if ($xml.find('Numeric').text() == "22011") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/serbia/globaltel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Serbia');
$("#flag").html('🇷🇸');
$("#photo").css('background', 'url(carriers/659.png)');
} else if ($xml.find('Numeric').text() == "22003") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/serbia/mts/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Serbia');
$("#flag").html('🇷🇸');
$("#photo").css('background', 'url(carriers/660.png)');
} else if ($xml.find('Numeric').text() == "22007") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/serbia/orion-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Serbia');
$("#flag").html('🇷🇸');
$("#photo").css('background', 'url(carriers/661.png)');
} else if ($xml.find('Numeric').text() == "22001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/serbia/telenor/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Serbia');
$("#flag").html('🇷🇸');
$("#photo").css('background', 'url(carriers/662.png)');
} else if ($xml.find('Numeric').text() == "22005") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/serbia/vip-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Serbia');
$("#flag").html('🇷🇸');
$("#photo").css('background', 'url(carriers/663.png)');

} else if ($xml.find('Numeric').text() == "63310") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/seychelles/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Seychelles');
$("#flag").html('🇸🇨');
$("#photo").css('background', 'url(carriers/664.png)');
} else if ($xml.find('Numeric').text() == "63301") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/seychelles/flow-cable-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Seychelles');
$("#flag").html('🇸🇨');
$("#photo").css('background', 'url(carriers/665.png)');

} else if ($xml.find('Numeric').text() == "61902") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sierra-leone/africell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sierra-leone');
$("#flag").html('🇸🇱');
$("#photo").css('background', 'url(carriers/666.png)');
} else if ($xml.find('Numeric').text() == "61901") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sierra-leone/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sierra-leone');
$("#flag").html('🇸🇱');
$("#photo").css('background', 'url(carriers/667.png)');
} else if ($xml.find('Numeric').text() == "61906") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sierra-leone/sierratel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sierra-leone');
$("#flag").html('🇸🇱');
$("#photo").css('background', 'url(carriers/668.png)');

} else if ($xml.find('Numeric').text() == "52503") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/singapore/m1/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Singapore');
$("#flag").html('🇸🇬');
$("#photo").css('background', 'url(carriers/669.png)');
} else if ($xml.find('Numeric').text() == "52501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/singapore/singtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Singapore');
$("#flag").html('🇸🇬');
$("#photo").css('background', 'url(carriers/670.png)');
} else if ($xml.find('Numeric').text() == "52505") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/singapore/starhub/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Singapore');
$("#flag").html('🇸🇬');
$("#photo").css('background', 'url(carriers/671.png)');

} else if ($xml.find('Numeric').text() == "23103") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/slovakia/4ka/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Slovakia');
$("#flag").html('🇸🇰');
$("#photo").css('background', 'url(carriers/672.png)');
} else if ($xml.find('Numeric').text() == "23106") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/slovakia/o2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Slovakia');
$("#flag").html('🇸🇰');
$("#photo").css('background', 'url(carriers/673.png)');
} else if ($xml.find('Numeric').text() == "23101") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/slovakia/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Slovakia');
$("#flag").html('🇸🇰');
$("#photo").css('background', 'url(carriers/674.png)');
} else if ($xml.find('Numeric').text() == "23102") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/slovakia/t-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Slovakia');
$("#flag").html('🇸🇰');
$("#photo").css('background', 'url(carriers/675.png)');

} else if ($xml.find('Numeric').text() == "29340") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/slovenia/a1/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Slovenia');
$("#flag").html('🇸🇮');
$("#photo").css('background', 'url(carriers/676.png)');
} else if ($xml.find('Numeric').text() == "29364") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/slovenia/t-2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Slovenia');
$("#flag").html('🇸🇮');
$("#photo").css('background', 'url(carriers/677.png)');
} else if ($xml.find('Numeric').text() == "29341") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/slovenia/telekom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Slovenia');
$("#flag").html('🇸🇮');
$("#photo").css('background', 'url(carriers/678.png)');
} else if ($xml.find('Numeric').text() == "29370") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/slovenia/telemach/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Slovenia');
$("#flag").html('🇸🇮');
$("#photo").css('background', 'url(carriers/679.png)');

} else if ($xml.find('Numeric').text() == "54002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/solomon-islands/bmobile-vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Solomon-islands');
$("#flag").html('🇸🇧');
$("#photo").css('background', 'url(carriers/680.png)');
} else if ($xml.find('Numeric').text() == "54001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/solomon-islands/our-telekom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Solomon-islands');
$("#flag").html('🇸🇧');
$("#photo").css('background', 'url(carriers/681.png)');

} else if ($xml.find('Numeric').text() == "63730") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/somalia/golis/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Somalia');
$("#flag").html('🇸🇴');
$("#photo").css('background', 'url(carriers/682.png)');
} else if ($xml.find('Numeric').text() == "63750") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/somalia/hormuud/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Somalia');
$("#flag").html('🇸🇴');
$("#photo").css('background', 'url(carriers/683.png)');
} else if ($xml.find('Numeric').text() == "63710") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/somalia/nationlink/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Somalia');
$("#flag").html('🇸🇴');
$("#photo").css('background', 'url(carriers/684.png)');
} else if ($xml.find('Numeric').text() == "63704") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/somalia/somafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Somalia');
$("#flag").html('🇸🇴');
$("#photo").css('background', 'url(carriers/685.png)');
} else if ($xml.find('Numeric').text() == "63720") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/somalia/somnet/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Somalia');
$("#flag").html('🇸🇴');
$("#photo").css('background', 'url(carriers/686.png)');
} else if ($xml.find('Numeric').text() == "63771") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/somalia/somtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Somalia');
$("#flag").html('🇸🇴');
$("#photo").css('background', 'url(carriers/687.png)');
} else if ($xml.find('Numeric').text() == "63701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/somalia/telesom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Somalia');
$("#flag").html('🇸🇴');
$("#photo").css('background', 'url(carriers/688.png)');

} else if ($xml.find('Numeric').text() == "65507") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/south-africa/cell-c/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('South-africa');
$("#flag").html('🇿🇦');
$("#photo").css('background', 'url(carriers/689.png)');
} else if ($xml.find('Numeric').text() == "65510") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/south-africa/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('South-africa');
$("#flag").html('🇿🇦');
$("#photo").css('background', 'url(carriers/690.png)');
} else if ($xml.find('Numeric').text() == "65513") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/south-africa/neotel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('South-africa');
$("#flag").html('🇿🇦');
$("#photo").css('background', 'url(carriers/691.png)');
} else if ($xml.find('Numeric').text() == "65502") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/south-africa/telkom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('South-africa');
$("#flag").html('🇿🇦');
$("#photo").css('background', 'url(carriers/692.png)');
} else if ($xml.find('Numeric').text() == "65501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/south-africa/vodacom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('South-africa');
$("#flag").html('🇿🇦');
$("#photo").css('background', 'url(carriers/693.png)');

} else if ($xml.find('Numeric').text() == "45002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/south-korea/kt/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('South-korea');
$("#flag").html('🇰🇷');
$("#photo").css('background', 'url(carriers/694.png)');
} else if ($xml.find('Numeric').text() == "45006") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/south-korea/lgu/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('South-korea');
$("#flag").html('🇰🇷');
$("#photo").css('background', 'url(carriers/695.png)');
} else if ($xml.find('Numeric').text() == "45005") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/south-korea/sk-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('South-korea');
$("#flag").html('🇰🇷');
$("#photo").css('background', 'url(carriers/696.png)');

} else if ($xml.find('Numeric').text() == "21423") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/spain/barablu/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Spain');
$("#flag").html('🇪🇸');
$("#photo").css('background', 'url(carriers/697.png)');
} else if ($xml.find('Numeric').text() == "21422") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/spain/digi-mobil/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Spain');
$("#flag").html('🇪🇸');
$("#photo").css('background', 'url(carriers/698.png)');
} else if ($xml.find('Numeric').text() == "21408") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/spain/euskaltel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Spain');
$("#flag").html('🇪🇸');
$("#photo").css('background', 'url(carriers/699.png)');
} else if ($xml.find('Numeric').text() == "21425") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/spain/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Spain');
$("#flag").html('🇪🇸');
$("#photo").css('background', 'url(carriers/700.png)');
} else if ($xml.find('Numeric').text() == "21407") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/spain/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Spain');
$("#flag").html('🇪🇸');
$("#photo").css('background', 'url(carriers/701.png)');
} else if ($xml.find('Numeric').text() == "21403") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/spain/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Spain');
$("#flag").html('🇪🇸');
$("#photo").css('background', 'url(carriers/702.png)');
} else if ($xml.find('Numeric').text() == "21419") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/spain/simyo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Spain');
$("#flag").html('🇪🇸');
$("#photo").css('background', 'url(carriers/703.png)');
} else if ($xml.find('Numeric').text() == "21416") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/spain/telecable/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Spain');
$("#flag").html('🇪🇸');
$("#photo").css('background', 'url(carriers/704.png)');
} else if ($xml.find('Numeric').text() == "21401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/spain/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Spain');
$("#flag").html('🇪🇸');
$("#photo").css('background', 'url(carriers/705.png)');
} else if ($xml.find('Numeric').text() == "21404") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/spain/yoigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Spain');
$("#flag").html('🇪🇸');
$("#photo").css('background', 'url(carriers/706.png)');

} else if ($xml.find('Numeric').text() == "41305") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sri-lanka/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sri-lanka');
$("#flag").html('🇱🇰');
$("#photo").css('background', 'url(carriers/707.png)');
} else if ($xml.find('Numeric').text() == "41302") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sri-lanka/dialog/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sri-lanka');
$("#flag").html('🇱🇰');
$("#photo").css('background', 'url(carriers/708.png)');
} else if ($xml.find('Numeric').text() == "41303") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sri-lanka/etisalat/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sri-lanka');
$("#flag").html('🇱🇰');
$("#photo").css('background', 'url(carriers/709.png)');
} else if ($xml.find('Numeric').text() == "41308") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sri-lanka/hutch/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sri-lanka');
$("#flag").html('🇱🇰');
$("#photo").css('background', 'url(carriers/710.png)');
} else if ($xml.find('Numeric').text() == "41304") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sri-lanka/lanka-bell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sri-lanka');
$("#flag").html('🇱🇰');
$("#photo").css('background', 'url(carriers/711.png)');
} else if ($xml.find('Numeric').text() == "41301") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sri-lanka/mobitel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sri-lanka');
$("#flag").html('🇱🇰');
$("#photo").css('background', 'url(carriers/712.png)');
} else if ($xml.find('Numeric').text() == "41312") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sri-lanka/slt/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sri-lanka');
$("#flag").html('🇱🇰');
$("#photo").css('background', 'url(carriers/713.png)');

} else if ($xml.find('Numeric').text() == "63405") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sudan/canar-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sudan');
$("#flag").html('🇸🇩');
$("#photo").css('background', 'url(carriers/714.png)');
} else if ($xml.find('Numeric').text() == "63402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sudan/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sudan');
$("#flag").html('🇸🇩');
$("#photo").css('background', 'url(carriers/715.png)');
} else if ($xml.find('Numeric').text() == "63407") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sudan/sudani/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sudan');
$("#flag").html('🇸🇩');
$("#photo").css('background', 'url(carriers/716.png)');
} else if ($xml.find('Numeric').text() == "63401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sudan/zain/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sudan');
$("#flag").html('🇸🇩');
$("#photo").css('background', 'url(carriers/717.png)');

} else if ($xml.find('Numeric').text() == "75603") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/suriname/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Suriname');
$("#flag").html('🇸🇷');
$("#photo").css('background', 'url(carriers/718.png)');
} else if ($xml.find('Numeric').text() == "75605") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/suriname/telesur/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Suriname');
$("#flag").html('🇸🇷');
$("#photo").css('background', 'url(carriers/719.png)');

} else if ($xml.find('Numeric').text() == "56310") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/swaziland/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Swaziland');
$("#flag").html('🇸🇿');
$("#photo").css('background', 'url(carriers/720.png)');

} else if ($xml.find('Numeric').text() == "24002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sweden/3/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sweden');
$("#flag").html('🇸🇪');
$("#photo").css('background', 'url(carriers/721.png)');
} else if ($xml.find('Numeric').text() == "24017") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sweden/gotanet/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sweden');
$("#flag").html('🇸🇪');
$("#photo").css('background', 'url(carriers/722.png)');
} else if ($xml.find('Numeric').text() == "24007") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sweden/tele2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sweden');
$("#flag").html('🇸🇪');
$("#photo").css('background', 'url(carriers/723.png)');
} else if ($xml.find('Numeric').text() == "24006") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sweden/telenor/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sweden');
$("#flag").html('🇸🇪');
$("#photo").css('background', 'url(carriers/724.png)');
} else if ($xml.find('Numeric').text() == "24001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/sweden/telia/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Sweden');
$("#flag").html('🇸🇪');
$("#photo").css('background', 'url(carriers/725.png)');

} else if ($xml.find('Numeric').text() == "22805") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/switzerland/comfone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Switzerland');
$("#flag").html('🇨🇭');
$("#photo").css('background', 'url(carriers/726.png)');
} else if ($xml.find('Numeric').text() == "22803") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/switzerland/salt-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Switzerland');
$("#flag").html('🇨🇭');
$("#photo").css('background', 'url(carriers/727.png)');
} else if ($xml.find('Numeric').text() == "22802") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/switzerland/sunrise/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Switzerland');
$("#flag").html('🇨🇭');
$("#photo").css('background', 'url(carriers/728.png)');
} else if ($xml.find('Numeric').text() == "22801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/switzerland/swisscom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Switzerland');
$("#flag").html('🇨🇭');
$("#photo").css('background', 'url(carriers/729.png)');

} else if ($xml.find('Numeric').text() == "41702") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/syria/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Syria');
$("#flag").html('🇸🇾');
$("#photo").css('background', 'url(carriers/730.png)');
} else if ($xml.find('Numeric').text() == "41701") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/syria/syriatel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Syria');
$("#flag").html('🇸🇾');
$("#photo").css('background', 'url(carriers/731.png)');

} else if ($xml.find('Numeric').text() == "46605") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/taiwan/aptg/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Taiwan');
$("#flag").html('🇹🇼');
$("#photo").css('background', 'url(carriers/732.png)');
} else if ($xml.find('Numeric').text() == "46611") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/taiwan/chunghwa-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Taiwan');
$("#flag").html('🇹🇼');
$("#photo").css('background', 'url(carriers/733.png)');
} else if ($xml.find('Numeric').text() == "46601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/taiwan/fareastone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Taiwan');
$("#flag").html('🇹🇼');
$("#photo").css('background', 'url(carriers/734.png)');
} else if ($xml.find('Numeric').text() == "46689") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/taiwan/t-star/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Taiwan');
$("#flag").html('🇹🇼');
$("#photo").css('background', 'url(carriers/735.png)');
} else if ($xml.find('Numeric').text() == "46697") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/taiwan/taiwan-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Taiwan');
$("#flag").html('🇹🇼');
$("#photo").css('background', 'url(carriers/736.png)');

} else if ($xml.find('Numeric').text() == "43604") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tajikistan/babilon-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tajikistan');
$("#flag").html('🇹🇯');
$("#photo").css('background', 'url(carriers/737.png)');
} else if ($xml.find('Numeric').text() == "43605") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tajikistan/beeline/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tajikistan');
$("#flag").html('🇹🇯');
$("#photo").css('background', 'url(carriers/738.png)');
} else if ($xml.find('Numeric').text() == "43603") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tajikistan/megafon/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tajikistan');
$("#flag").html('🇹🇯');
$("#photo").css('background', 'url(carriers/739.png)');
} else if ($xml.find('Numeric').text() == "43601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tajikistan/tcell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tajikistan');
$("#flag").html('🇹🇯');
$("#photo").css('background', 'url(carriers/740.png)');

} else if ($xml.find('Numeric').text() == "64005") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tanzania/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tanzania');
$("#flag").html('🇹🇿');
$("#photo").css('background', 'url(carriers/741.png)');
} else if ($xml.find('Numeric').text() == "64009") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tanzania/halotel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tanzania');
$("#flag").html('🇹🇿');
$("#photo").css('background', 'url(carriers/742.png)');
} else if ($xml.find('Numeric').text() == "64011") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tanzania/smile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tanzania');
$("#flag").html('🇹🇿');
$("#photo").css('background', 'url(carriers/743.png)');
} else if ($xml.find('Numeric').text() == "64002") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tanzania/tigo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tanzania');
$("#flag").html('🇹🇿');
$("#photo").css('background', 'url(carriers/744.png)');
} else if ($xml.find('Numeric').text() == "64007") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tanzania/ttcl/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tanzania');
$("#flag").html('🇹🇿');
$("#photo").css('background', 'url(carriers/745.png)');
} else if ($xml.find('Numeric').text() == "64004") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tanzania/vodacom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tanzania');
$("#flag").html('🇹🇿');
$("#photo").css('background', 'url(carriers/746.png)');
} else if ($xml.find('Numeric').text() == "64003") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tanzania/zantel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tanzania');
$("#flag").html('🇹🇿');
$("#photo").css('background', 'url(carriers/747.png)');

} else if ($xml.find('Numeric').text() == "52001") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/thailand/ais/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Thailand');
$("#flag").html('🇹🇭');
$("#photo").css('background', 'url(carriers/748.png)');
} else if ($xml.find('Numeric').text() == "52000") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/thailand/cat-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Thailand');
$("#flag").html('🇹🇭');
$("#photo").css('background', 'url(carriers/749.png)');
} else if ($xml.find('Numeric').text() == "52018") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/thailand/dtac/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Thailand');
$("#flag").html('🇹🇭');
$("#photo").css('background', 'url(carriers/750.png)');
} else if ($xml.find('Numeric').text() == "52015") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/thailand/tot/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Thailand');
$("#flag").html('🇹🇭');
$("#photo").css('background', 'url(carriers/751.png)');
} else if ($xml.find('Numeric').text() == "52099") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/thailand/true-move/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Thailand');
$("#flag").html('🇹🇭');
$("#photo").css('background', 'url(carriers/752.png)');

} else if ($xml.find('Numeric').text() == "61503") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/togo/moov/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Togo');
$("#flag").html('🇹🇬');
$("#photo").css('background', 'url(carriers/753.png)');
} else if ($xml.find('Numeric').text() == "61501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/togo/togocel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Togo');
$("#flag").html('🇹🇬');
$("#photo").css('background', 'url(carriers/754.png)');

} else if ($xml.find('Numeric').text() == "53988") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tonga/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tonga');
$("#flag").html('🇹🇴');
$("#photo").css('background', 'url(carriers/755.png)');
} else if ($xml.find('Numeric').text() == "53901") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tonga/tcc/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tonga');
$("#flag").html('🇹🇴');
$("#photo").css('background', 'url(carriers/756.png)');

} else if ($xml.find('Numeric').text() == "37412") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/trinidad-and-tobago/bmobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Trinidad-and-tobago');
$("#flag").html('🇹🇹');
$("#photo").css('background', 'url(carriers/757.png)');
} else if ($xml.find('Numeric').text() == "374130") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/trinidad-and-tobago/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Trinidad-and-tobago');
$("#flag").html('🇹🇹');
$("#photo").css('background', 'url(carriers/758.png)');

} else if ($xml.find('Numeric').text() == "60506") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tunisia/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tunisia');
$("#flag").html('🇹🇳');
$("#photo").css('background', 'url(carriers/759.png)');
} else if ($xml.find('Numeric').text() == "60503") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tunisia/ooredoo/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tunisia');
$("#flag").html('🇹🇳');
$("#photo").css('background', 'url(carriers/760.png)');
} else if ($xml.find('Numeric').text() == "60501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tunisia/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tunisia');
$("#flag").html('🇹🇳');
$("#photo").css('background', 'url(carriers/761.png)');
} else if ($xml.find('Numeric').text() == "60502") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/tunisia/tunisie-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Tunisia');
$("#flag").html('🇹🇳');
$("#photo").css('background', 'url(carriers/762.png)');

} else if ($xml.find('Numeric').text() == "28603") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/turkey/turk-telekom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Turkey');
$("#flag").html('🇹🇷');
$("#photo").css('background', 'url(carriers/763.png)');
} else if ($xml.find('Numeric').text() == "28601") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/turkey/turkcell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Turkey');
$("#flag").html('🇹🇷');
$("#photo").css('background', 'url(carriers/764.png)');
} else if ($xml.find('Numeric').text() == "28602") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/turkey/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Turkey');
$("#flag").html('🇹🇷');
$("#photo").css('background', 'url(carriers/765.png)');

} else if ($xml.find('Numeric').text() == "43801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/turkmenistan/mts/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Turkmenistan');
$("#flag").html('🇹🇲');
$("#photo").css('background', 'url(carriers/766.png)');
} else if ($xml.find('Numeric').text() == "43802") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/turkmenistan/tmcell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Turkmenistan');
$("#flag").html('🇹🇲');
$("#photo").css('background', 'url(carriers/767.png)');

} else if ($xml.find('Numeric').text() == "64114") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uganda/africell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uganda');
$("#flag").html('🇺🇬');
$("#photo").css('background', 'url(carriers/768.png)');
} else if ($xml.find('Numeric').text() == "64101") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uganda/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uganda');
$("#flag").html('🇺🇬');
$("#photo").css('background', 'url(carriers/769.png)');
} else if ($xml.find('Numeric').text() == "64110") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uganda/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uganda');
$("#flag").html('🇺🇬');
$("#photo").css('background', 'url(carriers/770.png)');
} else if ($xml.find('Numeric').text() == "64133") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uganda/smile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uganda');
$("#flag").html('🇺🇬');
$("#photo").css('background', 'url(carriers/771.png)');
} else if ($xml.find('Numeric').text() == "64111") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uganda/uganda-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uganda');
$("#flag").html('🇺🇬');
$("#photo").css('background', 'url(carriers/772.png)');

} else if ($xml.find('Numeric').text() == "25504") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ukraine/cdma/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ukraine');
$("#flag").html('🇺🇦');
$("#photo").css('background', 'url(carriers/773.png)');
} else if ($xml.find('Numeric').text() == "25503") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ukraine/kyivstar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ukraine');
$("#flag").html('🇺🇦');
$("#photo").css('background', 'url(carriers/774.png)');
} else if ($xml.find('Numeric').text() == "25506") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ukraine/lifecell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ukraine');
$("#flag").html('🇺🇦');
$("#photo").css('background', 'url(carriers/775.png)');
} else if ($xml.find('Numeric').text() == "25521") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ukraine/peoplenet/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ukraine');
$("#flag").html('🇺🇦');
$("#photo").css('background', 'url(carriers/776.png)');
} else if ($xml.find('Numeric').text() == "25507") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ukraine/ukrtelecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ukraine');
$("#flag").html('🇺🇦');
$("#photo").css('background', 'url(carriers/777.png)');
} else if ($xml.find('Numeric').text() == "25501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/ukraine/mts/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Ukraine');
$("#flag").html('🇺🇦');
$("#photo").css('background', 'url(carriers/778.png)');

} else if ($xml.find('Numeric').text() == "42403") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-arab-emirates/du/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United Arab Emirates');
$("#flag").html('🇦🇪');
$("#photo").css('background', 'url(carriers/779.png)');
} else if ($xml.find('Numeric').text() == "42402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-arab-emirates/etisalat/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United Arab Emirates');
$("#flag").html('🇦🇪');
$("#photo").css('background', 'url(carriers/780.png)');

} else if ($xml.find('Numeric').text() == "23420") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/3/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/781.png)');
} else if ($xml.find('Numeric').text() == "23400") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/bt/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/782.png)');
} else if ($xml.find('Numeric').text() == "23418") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/cloud9/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/783.png)');
} else if ($xml.find('Numeric').text() == "23430") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/ee/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/784.png)');
} else if ($xml.find('Numeric').text() == "23454") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/id-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/785.png)');
} else if ($xml.find('Numeric').text() == "23458") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/manx-telecom/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/786.png)');
} else if ($xml.find('Numeric').text() == "23402") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/o2/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/787.png)');
} else if ($xml.find('Numeric').text() == "23433") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/orange/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/788.png)');
} else if ($xml.find('Numeric').text() == "23436") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/sure-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/789.png)');
} else if ($xml.find('Numeric').text() == "23430") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/t-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/790.png)');
} else if ($xml.find('Numeric').text() == "234100") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/tesco-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/791.png)');
} else if ($xml.find('Numeric').text() == "23438") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/virgin-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/792.png)');
} else if ($xml.find('Numeric').text() == "23407") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-kingdom/vodafone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-kingdom');
$("#flag").html('🇬🇧');
$("#photo").css('background', 'url(carriers/793.png)');

} else if ($xml.find('Numeric').text() == "310016") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/att/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/794.png)');
} else if ($xml.find('Numeric').text() == "311440") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/bluegrass-cellular/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/795.png)');
} else if ($xml.find('Numeric').text() == "311870") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/boost-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/796.png)');
} else if ($xml.find('Numeric').text() == "311230") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/c-spire/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/797.png)');
} else if ($xml.find('Numeric').text() == "310130") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/carolina-west-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/798.png)');
} else if ($xml.find('Numeric').text() == "310320") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/cellular-one/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/799.png)');
} else if ($xml.find('Numeric').text() == "311010") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/chariton-valley/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/800.png)');
} else if ($xml.find('Numeric').text() == "311040") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/commnet-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/801.png)');
} else if ($xml.find('Numeric').text() == "310016") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/cricket-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/802.png)');
} else if ($xml.find('Numeric').text() == "310970") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/globalstar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/803.png)');
} else if ($xml.find('Numeric').text() == "311030") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/indigo-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/804.png)');
} else if ($xml.find('Numeric').text() == "310530") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/iwireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/805.png)');
} else if ($xml.find('Numeric').text() == "310340") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/westlink-communications/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/806.png)');
} else if ($xml.find('Numeric').text() == "311960") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/lycamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/807.png)');
} else if ($xml.find('Numeric').text() == "311660") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/metropcs/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/808.png)');
} else if ($xml.find('Numeric').text() == "311080") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/pine-cellular/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/809.png)');
} else if ($xml.find('Numeric').text() == "310100") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/plateau-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/810.png)');
} else if ($xml.find('Numeric').text() == "310120") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/sprint/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/811.png)');
} else if ($xml.find('Numeric').text() == "310999") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/straight-talk/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/812.png)');
} else if ($xml.find('Numeric').text() == "310160") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/t-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/813.png)');
} else if ($xml.find('Numeric').text() == "310260") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/ting/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/814.png)');
} else if ($xml.find('Numeric').text() == "310999") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/tracfone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/815.png)');
} else if ($xml.find('Numeric').text() == "310020") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/union-telephone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/816.png)');
} else if ($xml.find('Numeric').text() == "310066") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/us-cellular/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/817.png)');
} else if ($xml.find('Numeric').text() == "310004") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/verizon-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/818.png)');
} else if ($xml.find('Numeric').text() == "310450") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/viaero/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/819.png)');
} else if ($xml.find('Numeric').text() == "310053") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/virgin-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/820.png)');
} else if ($xml.find('Numeric').text() == "310180") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/united-states/west-central-wireless/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('United-states');
$("#flag").html('🇺🇸');
$("#photo").css('background', 'url(carriers/821.png)');

} else if ($xml.find('Numeric').text() == "74800") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uruguay/antel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uruguay');
$("#flag").html('🇺🇾');
$("#photo").css('background', 'url(carriers/822.png)');
} else if ($xml.find('Numeric').text() == "74810") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uruguay/claro/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uruguay');
$("#flag").html('🇺🇾');
$("#photo").css('background', 'url(carriers/823.png)');
} else if ($xml.find('Numeric').text() == "74807") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uruguay/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uruguay');
$("#flag").html('🇺🇾');
$("#photo").css('background', 'url(carriers/824.png)');

} else if ($xml.find('Numeric').text() == "43404") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uzbekistan/beeline/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uzbekistan');
$("#flag").html('🇺🇿');
$("#photo").css('background', 'url(carriers/825.png)');
} else if ($xml.find('Numeric').text() == "43406") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uzbekistan/perfectum/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uzbekistan');
$("#flag").html('🇺🇿');
$("#photo").css('background', 'url(carriers/826.png)');
} else if ($xml.find('Numeric').text() == "43405") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uzbekistan/ucell/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uzbekistan');
$("#flag").html('🇺🇿');
$("#photo").css('background', 'url(carriers/827.png)');
} else if ($xml.find('Numeric').text() == "43407") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uzbekistan/ums/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uzbekistan');
$("#flag").html('🇺🇿');
$("#photo").css('background', 'url(carriers/828.png)');
} else if ($xml.find('Numeric').text() == "43408") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/uzbekistan/uzmobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Uzbekistan');
$("#flag").html('🇺🇿');
$("#photo").css('background', 'url(carriers/829.png)');

} else if ($xml.find('Numeric').text() == "54105") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/vanuatu/digicel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Vanuatu');
$("#flag").html('🇻🇺');
$("#photo").css('background', 'url(carriers/830.png)');
} else if ($xml.find('Numeric').text() == "54101") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/vanuatu/telecom-vanuatu/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Vanuatu');
$("#flag").html('🇻🇺');
$("#photo").css('background', 'url(carriers/831.png)');
} else if ($xml.find('Numeric').text() == "54107") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/vanuatu/wantok/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Vanuatu');
$("#flag").html('🇻🇺');
$("#photo").css('background', 'url(carriers/832.png)');

} else if ($xml.find('Numeric').text() == "73401") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/venezuela/digitel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Venezuela');
$("#flag").html('🇻🇪');
$("#photo").css('background', 'url(carriers/833.png)');
} else if ($xml.find('Numeric').text() == "73406") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/venezuela/movilnet/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Venezuela');
$("#flag").html('🇻🇪');
$("#photo").css('background', 'url(carriers/834.png)');
} else if ($xml.find('Numeric').text() == "73404") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/venezuela/movistar/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Venezuela');
$("#flag").html('🇻🇪');
$("#photo").css('background', 'url(carriers/835.png)');

} else if ($xml.find('Numeric').text() == "45207") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/vietnam/gmobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Vietnam');
$("#flag").html('🇻🇳');
$("#photo").css('background', 'url(carriers/836.png)');
} else if ($xml.find('Numeric').text() == "45201") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/vietnam/mobifone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Vietnam');
$("#flag").html('🇻🇳');
$("#photo").css('background', 'url(carriers/837.png)');
} else if ($xml.find('Numeric').text() == "45205") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/vietnam/vietnamobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Vietnam');
$("#flag").html('🇻🇳');
$("#photo").css('background', 'url(carriers/838.png)');
} else if ($xml.find('Numeric').text() == "45204") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/vietnam/viettel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Vietnam');
$("#flag").html('🇻🇳');
$("#photo").css('background', 'url(carriers/839.png)');
} else if ($xml.find('Numeric').text() == "45202") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/vietnam/vinaphone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Vietnam');
$("#flag").html('🇻🇳');
$("#photo").css('background', 'url(carriers/840.png)');

} else if ($xml.find('Numeric').text() == "42102") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/yemen/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Yemen');
$("#flag").html('🇾🇪');
$("#photo").css('background', 'url(carriers/841.png)');
} else if ($xml.find('Numeric').text() == "42101") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/yemen/sabafon/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Yemen');
$("#flag").html('🇾🇪');
$("#photo").css('background', 'url(carriers/842.png)');
} else if ($xml.find('Numeric').text() == "42103") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/yemen/yemen-mobile/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Yemen');
$("#flag").html('🇾🇪');
$("#photo").css('background', 'url(carriers/843.png)');

} else if ($xml.find('Numeric').text() == "64501") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/zambia/airtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Zambia');
$("#flag").html('🇿🇲');
$("#photo").css('background', 'url(carriers/844.png)');
} else if ($xml.find('Numeric').text() == "64502") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/zambia/mtn/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Zambia');
$("#flag").html('🇿🇲');
$("#photo").css('background', 'url(carriers/845.png)');
} else if ($xml.find('Numeric').text() == "64503") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/zambia/zamtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Zambia');
$("#flag").html('🇿🇲');
$("#photo").css('background', 'url(carriers/846.png)');

} else if ($xml.find('Numeric').text() == "64804") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/zimbabwe/econet/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Zimbabwe');
$("#flag").html('🇿🇼');
$("#photo").css('background', 'url(carriers/847.png)');
} else if ($xml.find('Numeric').text() == "64801") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/zimbabwe/netone/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Zimbabwe');
$("#flag").html('🇿🇼');
$("#photo").css('background', 'url(carriers/848.png)');
} else if ($xml.find('Numeric').text() == "64803") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/zimbabwe/telecel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Zimbabwe');
$("#flag").html('🇿🇼');
$("#photo").css('background', 'url(carriers/849.png)');
} else if ($xml.find('Numeric').text() == "63782") {
$('#run').click(function() {
$('#div-parent').remove();
$("#spww").append("<div id=\"div-parent\"><iframe style=\"position:fixed;top: 46%;left: 50%;transform: translate(-50%, -46%);width:100%;height:90%;border-top-left-radius: 25px;border-top-right-radius: 25px;margin-top: -20px;overflow:hidden !important;\" src=\"https://www.imei.info/carriers/somalia/somtel/\"></iframe>");
var iframe = $("#spww").find('[id="iframe"]');});
$('#name').html('Somalia');
$("#flag").html('🇸🇴');
$("#photo").css('background', 'url(carriers/687.png)');
}
});
}

function update() {
$('iframe').each(function() {  
$(this).attr('src', $(this).attr('src'));
});
}