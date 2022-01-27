var navpc__pos = $('.nav__pc-items').offset().top
var navmobile__pos = $('.header').offset().top
$(window).scroll(function () {
    var y_scroll_pos_pc = window.pageYOffset
    var y_scroll_pos_mobile = window.pageYOffset
    var scroll_pc = navpc__pos
    var scroll_mobile = navmobile__pos

    if ($('.nav__mobile').css('display') === 'none') {
        if (y_scroll_pos_pc > scroll_pc) {
            $('.nav__pc-items').addClass('sticky')
            $('.main').addClass('main-pc')
        } else {
            $('.nav__pc-items').removeClass('sticky')
            $('.main').removeClass('main-pc')
        }
    }

    if ($('.nav__pc').css('display') === 'none') {
        if (y_scroll_pos_mobile > scroll_mobile) {
            $('.header').addClass('sticky')
            $('.main').addClass('main-mobile')
        } else {
            $('.header').removeClass('sticky')
            $('.main').removeClass('main-mobile')
        }
    }

    // if(!$('.searchform__wrapper').hasClass('d-none')){
    //     $('.searchform__wrapper').addClass('d-none')
    // }
})

document.getElementById('nav__menubar-open').onclick = function () {
    openNavMobileList()
    closeSearchForm()
}
document.getElementById('nav__overlay').onclick = function () {
    closeNavMobileList()
}
document.getElementById('nav__mobile-list-close').onclick = function () {
    closeNavMobileList()
}

$(".header__mobile-searchicon").click(function () {
    if($('.searchform__wrapper').hasClass('d-none')){
        $('.searchform__wrapper').removeClass('d-none')
        $('.searchform__wrapper input').focus()
        $('.search__overlay').removeClass('d-none')
        $('body').css('overflow','hidden')
    }else {
        closeSearchForm()
    }
    return false
})
$('.search__overlay').click(function(){
    closeSearchForm()
})


function closeSearchForm(){
    $('.searchform__wrapper').addClass('d-none')
    $('.searchform__wrapper input').focusout()
    $('.search__overlay').addClass('d-none')
    $('body').css('overflow','auto')
}
function closeNavMobileList() {
    document.getElementById('nav__overlay').className = document.getElementById('nav__overlay').className.replace('d-block', 'd-none')
    document.getElementById('nav__mobile-list-open').className = document.getElementById('nav__mobile-list-open').className.replace('nav-open', 'nav-close')
}
function openNavMobileList() {
    document.getElementById('nav__overlay').className = document.getElementById('nav__overlay').className.replace('d-none', 'd-block')
    document.getElementById('nav__mobile-list-open').className = document.getElementById('nav__mobile-list-open').className.replace('nav-close', 'nav-open')

}

// Select form handler
$(".order__button").hover(
    function () {
        $(".order__item-dropdown_menu").addClass("open");
        $(".svg-order").addClass("svg-up");
    }, function () {
        $(".order__item-dropdown_menu").removeClass("open");
        $(".svg-order").removeClass("svg-up");
    }
);
$(".order__item-wrapper").click(function () {
    if(!$(".order__item-dropdown_menu").hasClass('open')){
        $(".order__item-dropdown_menu").addClass("open");
        $(".svg-order").addClass("svg-up");
    }else{
        $(".order__item-dropdown_menu").removeClass("open");
        $(".svg-order").removeClass("svg-up");
    }
})

$(".order__item").click(function () {
    let text = $(this).text()
    $(".order__item").removeClass('d-none')
    $(".order__item-dropdown")
        .html(text +
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="1"
                    stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-down svg-order">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>`)
    $(this).addClass('d-none')
    $(".order__item-dropdown_menu").removeClass('open')
})

$(".test").click(function (e) {
    if (!$('.filter__inner').hasClass('d-none')) {
        $('.filter__inner').addClass('d-none')
    } else {
        $(".test ~ .filter__inner").removeClass('d-none')
    }
})
