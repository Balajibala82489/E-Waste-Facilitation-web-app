const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
        function() {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
        }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$(window).scroll(function() {
    $("header").toggleClass("sticky", $(window).scrollTop() > 0);
});

$(window).on("load resize", function() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
            function() {
                $(this).addClass(showClass);
                $(this).find($dropdownToggle).attr("aria-expanded", "true");
                $(this).find($dropdownMenu).addClass(showClass);
            },
            function() {
                $(this).removeClass(showClass);
                $(this).find($dropdownToggle).attr("aria-expanded", "false");
                $(this).find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        // Mobile: activate dropdowns on click
        $dropdown.off("mouseenter mouseleave").click(function() {
            $(this).toggleClass(showClass);
            $(this).find($dropdownMenu).toggleClass(showClass);
        });
    }
});

$(window).on("load resize", function() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
            function() {
                $(this).addClass(showClass);
                $(this).find($dropdownToggle).attr("aria-expanded", "true");
                $(this).find($dropdownMenu).addClass(showClass);
            },
            function() {
                $(this).removeClass(showClass);
                $(this).find($dropdownToggle).attr("aria-expanded", "false");
                $(this).find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave").click(function() {
            $(this).toggleClass(showClass);
            $(this).find($dropdownMenu).toggleClass(showClass);
        });
    }
});



