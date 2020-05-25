$(document).ready(() => {
    $('#mobileNav').on('click', ()=>{
        console.log('click');
        $('.mobile_wrap, #mobileNav').toggleClass( 'active' );
        $('html').toggleClass( 'overflow_h' );
    });

    console.log($('.location_wrap').text().toUpperCase());
});