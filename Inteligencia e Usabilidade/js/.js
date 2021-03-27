$(function(){
    $("#txt").val('Texto alterado com JJJ');
    $('.email').val('Email - christian@c.com');

    $('p:not(.destaque), li').css('color', '#999');
    $('li:first').css('color', 'grenn');
    $('li:first-child').css('color', 'green');
    $('li:last').css('color', 'green');
    $('li:last-child').css('color', 'green');

    $('p:gt(2)').css({
        "color": "orange",
        fontSize: "22px" 
     });

     $('a[title]').css('color','red');
     $('a:not([title])').hide();

     $('li:odd').css('backgroundColor', 'silver');
     //$('li:even').css('backgroundColor', 'red');

     $('p:contains(afo 6)').css('color', 'orange');
     $('p:contains(afo 7)').css('color', 'purple');

     $('p:has(i)').css('color', 'blue');
     $('p:empty').text ('TEste TESTE TESTE');
     $('p:hidden').show;




});