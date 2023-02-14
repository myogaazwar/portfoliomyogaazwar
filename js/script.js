// Event Pada Saat LINK
$('.page-scroll').on('click', function(e){

    // ambil isi Href
    var tujuan = $(this).attr('href');
    
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeOutCirc');

    e.preventDefault();

});