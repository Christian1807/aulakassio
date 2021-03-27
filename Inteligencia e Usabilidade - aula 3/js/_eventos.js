$(function(){
    $('.coordenadas').mouseenter(function(){
        //console.log('o mause entrou no retangulo');       
        $('.valores').fadeIn();

    });

    $('.coordenadas').mousemove(function(e){
        //console.log('o mause se moveu no retangulo');       
        //console.log(e.clientX, e.clientY);       

        var posicoes = $(this).offset();
        
        var x = e.clientX - posicoes.left;
        var y = e.clientY - posicoes.top;

        $('.valores').html(`coordenadas x: ${x} e y: ${y}`)

    });

    $('.coordenadas').mouseout(function(){
        //console.log('o mause saiu no retangulo');       
        $('.valores').fadeOut();
    });
    



});