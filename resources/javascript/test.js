/**
 * Created by Advait on 17-05-2016.
 */
$(".nav li").on("click", function() {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
});