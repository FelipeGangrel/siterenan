/*$(document).ready(function(){
    var content = $('.content'),

        inicio = $('#servicos'),

        pos = inicio.offset(); //obtem a posição do nav em relação ao documento
    $(window).scroll(function(){
        if($(this).scrollTop() > pos.top+content.height() && content.hasClass('invisivel')){
            content.fadeOut('fast', function(){
                $(this).removeClass('invisivel').addClass('visivel').fadeIn('fast');
            });
        } else if($(this).scrollTop() <= pos.top && content.hasClass('visivel')) {
            content.fadeOut('fast', function(){
                $(this).removeClass('visivel').addClass('invisivel').fadeOut('fast');
            });
        }
    });

    // tutorial em http://www.1stwebdesigner.com/tutorials/create-stay-on-top-menu-css3-jquery/

});*/

$(document).ready(function(){
    var nav = $('#navbar'),
        
        servicos = $('#servicos').offset(),
        contato = $('#contato').offset(),
        local = $('#local').offset(),

        pos = nav.offset(); //captura posição da navbar
    
    $(window).scroll(function(){
        if( $(this).scrollTop() > contato.top-nav.innerHeight()){
            nav.removeClass('blue white').addClass('black');
        }
        else if( $(this).scrollTop() > local.top-nav.innerHeight()){
            nav.removeClass('black blue').addClass('transparent');
        }
        else if( $(this).scrollTop() > servicos.top-nav.innerHeight()){
            nav.removeClass('black white').addClass('blue');
        }else{
            nav.removeClass('white blue black').addClass('transparent');
        }
       
    });
    
});

/*

$(document).ready(function(){
    var content = $('.content'),

        pos = content.offset(); //captura a posição do conteudo

    $(window).scroll(function(){
        if($(this).scrollTop() > pos.top-(content.height()*2) && content.hasClass('invisivel')){
            content.fadeOut('fast', function(){
                $(this).removeClass('invisivel').addClass('visivel').fadeIn('slow');

            });
        }
    });
}); */