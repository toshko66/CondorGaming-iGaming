$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


  $('.owl-carousel').owlCarousel({
    loop:true,
    center:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            loop:true
        },
        400:{
            items:2,
            loop:true
        },
        600:{
            items:3,
            loop:true
        },
        1000:{
            items:4,
            loop:true
        }
    }
})

$(document).ready(function() {

    $('.owl-carousel .item').each(function() {
        var img = $(this).find('img');
        img.css({
            'cursor':'grab',
            'max-width': '230px',   // Adjust this value as needed
            'height': 'auto'       // This ensures the aspect ratio is maintained
        });
    });
});


$(document).ready(function() {
    $("#accordion").accordion({
        collapsible: true,  // Allow closing active sections
        active: false,      // None of the sections are open by default
        heightStyle: "content"  // Adjust the height based on content
    });
});

$(document).ready(function() {

    $('.owl-carousel .item').each(function() {
        var img = $(this).find('img');
        img.css({
            'cursor':'grab',
            'max-width': '230px',   
            'height': 'auto'       
        });
    });
});
