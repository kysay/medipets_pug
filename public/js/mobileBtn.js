$(document).ready(() => {
    $('#mobileNav').on('click', ()=>{
        console.log('click');
        $('.mobile_wrap, #mobileNav').toggleClass( 'active' );
    });

    console.log($('.location_wrap').text().toUpperCase());
});