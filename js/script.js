$(function() {
    /*
     * ページの高さ分だけヘッダーを下げる
     */
    var height = $("#header").height();
    $("body").css("margin-top", height); //10pxだけ余裕をもたせる


    /*
     * PageTopのスティッキー
     */
    $(window).on("scroll", function() {
        // フッターの上でフローティングを止める
        documentHeight = $(document).height();
        scrollPosition = $(this).height() + $(this).scrollTop();
        footerHeight = $(".footCopy").innerHeight();

        if (documentHeight - scrollPosition <= footerHeight) {
            $("#pageTop").css({
                position: "absolute",
                bottom: footerHeight + 20
            });
        } else {
            $("#pageTop").css({
                position: "fixed",
                bottom: 20
            });
        }
        // pageTopの表示非表示
        if (100 < $(this).scrollTop()) {
            $("#pageTop").css({
                display: "block",
            });
        } else {
            $("#pageTop").css({
                display: "none",
            });
        }
    });



    // function    
});