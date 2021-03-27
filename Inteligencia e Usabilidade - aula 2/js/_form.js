$(function(){
    $(':input').css ('backgroundColor', 'yellow');
    $(':text').css ('backgroundColor', 'gray');
    $(':password').css( 'backgroundColor', 'red');
    $(':radio').parent().css('backgroundColor', '#ff00ff');
    $(':submit').css('backgroundColor', 'cyan');
    $(':checkbox').parent().css('backgroundColor', 'orange');
    $(':checkbox:checked').parent().css('backgroundColor', 'green');
    //$('#txt').val('alterei o texto via jquerry');
    $('#txt').val($('#id_select_html option:selected').text());

    
    

});