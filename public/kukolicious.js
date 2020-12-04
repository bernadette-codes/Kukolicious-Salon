$(document).ready(function () {
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        $imgBig = $("#imgBig"),
        $overlay = $("#overlay"),
        $overlayContent = $("#overlayContent");

    //alert(windowWidth);

    // Show Bigger Photos
    $(".grid").find("img").click(function () {
        $imgBig.attr("src", $(this).prop('src'));
        $overlay.show(350);
        $overlayContent.show(350);
    });

    // Hide Bigger Photos
    $imgBig.click(function () {
        $(this).attr("src", "");
        $overlay.hide();
        $overlayContent.hide();
    });

}); // end ready

