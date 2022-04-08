$(document).ready(function() {
    var imgurl = 'images/CM-logo.gif'+'?a='+Math.random();
    $("#logo img").attr('src',imgurl);
    $("#logo img").attr('alt','Caleb McTwigan');
    console.log(imgurl);
}); // ready function end