$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); /* Убираем стандартное поведение кнопки*/

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top;

        /* мы сначала измерили расстояние от вверха до блока about, а теперь хоти плавно проскролить страницу до этого блока */

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500); /$* 500 - параметр времени до анимации*/
    });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        /* меняем наше бургер-меню на крестик */
        $(this).toggleClass("active");

        /* при клике мы хотим добавлять класс active для Menu*/
        $("#nav").toggleClass("active");
    });

    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        /* получим id-элумента, который нам нужно открывать или скрывать */
        var $this = $(this),
            blockId = $this.data("collapse");

        /* выдаём или забираем класс active */
        $this.toggleClass("active");
        /* $(blockId).slideToggle();  эффект плавного закрытия и открытия */
    });

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});
