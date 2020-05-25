console.log('click');


$(document).ready(() => {
    $('#mobileNav, .mobile_wrap').on('click', ()=>{
        console.log('click')
        $('#mobileNav').toggleClass( 'active' );
    });

    console.log($('.location_wrap').text().toUpperCase());
});