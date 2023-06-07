$(function() {
    $(window).load(function(){
    var hash = location.hash;
    hash = (hash.match(/^#tab\d+$/) || [])[0];
    var tabname = hash.slice(4);
    var tabname = tabname - 1;
    var tabbar = tabname;
    $(".tabContent").addClass('disnon');
    $(".tabContent").eq(tabname).removeClass('disnon');
    $(".tabMenu > li").removeClass('select');
    $(".tabMenu > li").eq(tabbar).addClass('select');
    });
 
    $(".tabMenu > li").click(function() {
        var num = $(".tabMenu > li").index(this);
        $(".tabContent").addClass('disnon');
        $(".tabContent").eq(num).removeClass('disnon');
        $(".tabMenu > li").removeClass('select');
        $(this).addClass('select');
    });
});
