$ (function() {
    const tbody = $('.table tbody');

    function obterDados() {


        $.ajax('https://6091e78e85ff510017211bf4.mockapi.io/api/filmes/filmes', {
            type:'GET',
            beforeSend: function(){
                $('.table').after('<p class="loading"> Aguarde carregamento</p>');
            },
            error: function(){
                $('.table').after('<p class="loading"> Erro nos dados</p>');
            },
            success: function(dados){
                mostrarDados(dados);
            },
            complete: function(){
                $('.loading').remove();
            },

        })

        function mostrarDados(dados) {
            $.each(dados, function(i,el){
                tbody.append(`<tr>
                                <th scope="row">${el.id}</th>
                                <td>${el.nome}</td>
                                <td>${el.codigo_netflix}</td>
                                <td>${el.descricao}</td>
                            </tr>`)
            })
            
        }

        
    }

    obterDados();
    
    
})