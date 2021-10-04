////main

$(".nav-opener").click(function () {
    $(".up-nav").toggleClass("open-nav");
    $(this).toggleClass("opened");
    $("body").toggleClass("lock");
});


$(".home-slider .servi-box .box").click(function () {
    $(".home-slider .servi-box").animate({
        height: 'toggle'
    });
    $(".home-slider .service-big-box").animate({
        height: 'toggle'
    });
});
$(".home-slider .service-big-box .sma").click(function () {
    $(".home-slider .servi-box").animate({
        height: 'toggle'
    });
    $(".home-slider .service-big-box").animate({
        height: 'toggle'
    });
});










//bootstrap slider home
//$('.home-carousel').carousel({
//    interval: false,    
//})
//$(".after-nav .container-cus .lefta .left-sd .left-arrow").click(function () {
//    $(".home-carousel").carousel("prev");
//});
//$(".after-nav .container-cus .lefta .left-sd .right-arrow").click(function () {
//    $(".home-carousel").carousel("next");
//});

//mbl search
//$(".mbl-search-open").click(function () {
//    $(".mbl-search-box").animate({
//        height: 'toggle'
//    });
//});
//$(".homesearch .search-box input").focusout(function () {
//    $(".search-listing").animate({
//        height: 'toggle'
//    });
//});
//$(".search-listing").click(function (e) {
//    e.stopPropagation();
//});

////*activity
//$(".exampleImage").click(function () {
//    $(".exampleImage").addClass("exampleImage-big");
//    this.webkitRequestFullScreen();
//    this.mozRequestFullScreen();
//    this.requestFullscreen();
//    this.requestFullScreen();
//});

////dropdown-job page
//$(".head .right .dropdown .dropdown-menu").click(function (e) {
//    e.stopPropagation();
//});

////register-modal
//$(".register-modal .box .zero-box .btn-act").click(function () {
//    $(".register-modal .box").addClass("sld-next");
//    $(".register-modal").removeClass("sec");
//});
//$(".register-modal .box .nd-box .btn-act").click(function () {
//    $(".register-modal .box").addClass("sld-next2");
//});

////register-wizard
////box - 1
//$(".tale-regi .wrapper .box1 .ln-or").click(function () {
//    $(".fh-box .wrapper .box2").animate({
//        height: 'toggle'
//    });
//    $(".fh-box .wrapper .box1").animate({
//        height: 'toggle'
//    });
//});
////box - 2 - function bind after active
//var check = 0;
//$(".tale-regi .box2 .right .label-box label").click(function () {
//    $('.tale-regi .box2 .right .label-box label').removeClass('active');
//    $(this).addClass("active");
//    $(".tale-regi .box2 .right .btn-orange").addClass("btn-act");
//    if (check == 0) {
//        $(".tale-regi .box2 .cat .right .btn-act").bind("click", function () {
//            $(".tale-regi .wrapper .box2").animate({
//                height: 'toggle'
//            });
//            $(".tale-regi .wrapper .box3").animate({
//                height: 'toggle'
//            });
//        });
//        check = 1;
//    }
//});
////box - 3 - back - next
//$(".tale-regi .box3 .cat .cont .back").click(function () {
//    $(".tale-regi .wrapper .box2").animate({
//        height: 'toggle'
//    });
//    $(".tale-regi .wrapper .box3").animate({
//        height: 'toggle'
//    });
//});
//$(".tale-regi .box3 .cat .cont .next").click(function () {
//    $(".tale-regi .wrapper .box4").animate({
//        height: 'toggle'
//    });
//    $(".tale-regi .wrapper .box3").animate({
//        height: 'toggle'
//    });
//});
////box - 3 - function bind after active
//$(".tale-regi .box3 .right .feild-box input").click(function () {
//    $(this).addClass("active");
//    $(".tale-regi .box3 .right .btn-orange").addClass("btn-act");
//    $(".tale-regi .box3 .cat .right .btn-act").bind("click", function () {
//        $(".tale-regi .wrapper .box4").animate({
//            height: 'toggle'
//        });
//        $(".tale-regi .wrapper .box3").animate({
//            height: 'toggle'
//        });
//    });
//});
////box - 4 - back - next
//$(".tale-regi .box4 .cat .cont .back").click(function () {
//    $(".tale-regi .wrapper .box4").animate({
//        height: 'toggle'
//    });
//    $(".tale-regi .wrapper .box3").animate({
//        height: 'toggle'
//    });
//});

////register-wizard-employer
////box - 1
//$(".eml-regi .wrapper .box1 .ln-or").click(function () {
//    $(".eml-regi .wrapper .box2").animate({
//        height: 'toggle'
//    });
//    $(".eml-regi .wrapper .box1").animate({
//        height: 'toggle'
//    });
//});
////box - 2 - function bind after active
//var check = 0;
//$(".eml-regi .box2 .right .label-box label").click(function () {
//    $('.eml-regi .box2 .right .label-box label').removeClass('active');
//    $(this).addClass("active");
//    $(".eml-regi .box2 .right .btn-orange").addClass("btn-act");
//    if (check == 0) {
//        $(".eml-regi .box2 .cat .right .btn-act").bind("click", function () {
//            $(".eml-regi .wrapper .box2").animate({
//                height: 'toggle'
//            });
//            $(".eml-regi .wrapper .box3").animate({
//                height: 'toggle'
//            });
//        });
//        check = 1;
//    }
//});
////box - 3 - back - next
//$(".eml-regi .box3 .cat .cont .back").click(function () {
//    $(".eml-regi .wrapper .box2").animate({
//        height: 'toggle'
//    });
//    $(".eml-regi .wrapper .box3").animate({
//        height: 'toggle'
//    });
//});
////profile edit scroll
//$(document).ready(function () {
//    $('a[href^="#edit-"]').on('click', function (e) {
//        e.preventDefault();
//        var target = this.hash,
//        $target = $(target);

//        $('html, body').stop().animate({
//            'scrollTop': $target.offset().top
//        }, 900, 'swing', function () {
//            window.location.hash = target;
//        });
//    });


//});

////dropdown-talent edit page
//$(".profile-edit .container-cus .right .basic-info .dropdown-menu").click(function (e) {
//    e.stopPropagation();
//});

////talent edit work experience add
//$(".profile-edit .container-cus .right .edit-exper .add-work").click(function () {
//    $(".profile-edit .container-cus .right .edit-exper .add-work").animate({
//        height: 'toggle'
//    });
//    $(".profile-edit .container-cus .right .edit-exper .add-work-form").animate({
//        height: 'toggle'
//    });
//});
//$(".profile-edit .container-cus .right .edit-exper .add-work-form .close-btn").click(function () {
//    $(".profile-edit .container-cus .right .edit-exper .add-work").animate({
//        height: 'toggle'
//    });
//    $(".profile-edit .container-cus .right .edit-exper .add-work-form").animate({
//        height: 'toggle'
//    });
//});