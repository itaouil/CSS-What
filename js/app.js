/* Toggle nav-open class */
$(".nav-side .nav-toggle").on("click", function (e) {

    // Prevent href default (being brought to the top)
    e.preventDefault();

    // Toggle class
    $(this).parent().toggleClass("nav-open");

});