$('#send').off().on('click', function(e){
    e.preventDefault();
    var inputnome=$("#nome").val()
    var inputcodigo=$("#codigo").val()
    var inputdescricao=$("#descricao").val()
    var inputdataV=$("#dataV").val()
    var inputdataF=$("#dataF").val()
    $('#tabProdutos').append(`
    <tr>
        <td>${inputnome}</td>
        <td>${inputcodigo}</td>
        <td>${inputdescricao}</td>
        <td>${inputdataF}</td>
        <td>${inputdataV}</td>
        <button class="btnAlterar">Alterar</button>
    </tr>
    `);

    $.notify({
        // options
        message: 'Cadastro feito com sucesso' 
    },{
        // settings
        type: 'success'
    });
});
$(document).ready( function () {
    $('#tabProdutos').DataTable( {
        retrieve: true,
        paging: false,
        ordering:false,
        scrolly: 400,
        searching: false,
    });
});