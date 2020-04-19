window.onload = function () {
    const cursor = $(".my-cursor");
    var mouseX = 0,
        mouseY = 0;

    $(document).on("mousemove", function (e) {
        cursor.css("opacity", 1);
        mouseX = e.pageX;
        mouseY = e.pageY;

        $(cursor).css(
            {
                left: mouseX- 0,
                top: mouseY- 0
            },
        );
    });

    $('a, .arrow_wrap li').on("mouseenter", function () {
        cursor.addClass("my-cursor--active");
    });

    $('a, .arrow_wrap li').on("mouseleave", function () {
        cursor.removeClass("my-cursor--active");
    });

    $(document).mouseleave(function() {
        cursor.css("opacity", 0)
    });
};