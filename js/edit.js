// $(window).on('load', function () {
//     $('.loader').fadeOut(500, function () {
//         $(this).remove();
//     });      
// });

/*global $ */
$(document).ready(function ($) {
    'use strict';
 
    // WOW 
    new WOW().init();

    $('.n-select').niceSelect();
    $('.select-2').select2();

    $('input').addClass('form-control');

    // NICE SCROLL
    $("body").niceScroll({
        cursorcolor: "rgb(54, 164, 193)",
        cursorwidth: "5",
        cursorminheight: 40,
        background: "transparent",
        cursorborder: "1px solid rgb(54, 164, 193)",
        cursorborderradius: 5
    });


    // Open navbarSide when button is clicked
    $('.toggle-btn').on('click', function () {
        $('.haraj-wrapper .side').addClass('show-sidenav');
        $('.side-overlay').show();
    });

    // Close navbarSide when the outside of menu is clicked
    $('.side-overlay').on('click', function () {
        $('.haraj-wrapper .side').removeClass('show-sidenav');
        $('.side-overlay').hide();
    });

    // STICKY NAV  FIXED
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header-nav').addClass("navbar-fixed-top");
            $('.header-cat').addClass("categ-fixed");
            $('.toggle-btn').addClass("navbar-fixed-btn");  
            $('.add-newad-box').addClass("add-btn-fixed");  
            $('.ico-dots').addClass("fixed-ico-dots");  
        }
        else {
            $('.header-nav').removeClass("navbar-fixed-top");
            $('.header-cat').removeClass("categ-fixed");
            $('.toggle-btn').removeClass("navbar-fixed-btn");
            $('.add-newad-box').removeClass("add-btn-fixed");
            $('.ico-dots').removeClass("fixed-ico-dots");
        }
    });


    // SHOW DROP FOOTER DOWN MENUE
    $('.ico-dots').click(function () {
        $('.footer-drop-down').toggleClass('show-drop');
    });

    // HIDE DROP FOOTER DOWN MENUE
    $(document).click(function(){
        $(".footer-drop-down").removeClass('show-drop');
    });
      
    // SHOW DROP FOOTER DOWN MENUE
    $(".ico-dots").click(function(e){
        e.stopPropagation();
    });

    // SHOW DROP FOOTER DOWN MENUE
    $(".footer-drop-down").click(function(e){
        e.stopPropagation();
    });

    // FOLLOW REPLAYES 
    $('.follow-relpy').click(function () {
        $('.follow-relpy').toggleClass('followed-done');
    });

    // SADAD BTN  
    $('.form-box .btn').click(function () {
        $('.form-box .btn').toggleClass('sending');
    });

    // ADD TO FAVOURITE 
    $('.addToFav').click(function () {
        $('.addToFav').toggleClass('favourited');
    });

    // REMOVE ITEM FROM  FAVOURITE 
    $('.Fav').click(function () {
        $(this).toggleClass('remove-fav');
    });

    // SHOW MORE CAR MODELS IN SEARCH PAGE 
    $('.show-moremodel').click(function () {
        $('.more-model').show();
        $('.show-moremodel').hide();
    });

});








