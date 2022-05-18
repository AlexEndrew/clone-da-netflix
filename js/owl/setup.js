$('.owl-carousel').owlCarousel({
    loop:false,   //se for falso ele deixa ir so ate o ultimo elemento e nao da loop
    margin:10,  //margem entre filme e outro
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5    //se a tela tiver 1000px vai ter 5 itens na tela
        }
    }
})