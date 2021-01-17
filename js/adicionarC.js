$('#send').off().on('click', function(e){
    e.preventDefault();
    var inputmarca=$("#marca").val()
    var inputnome=$("#nome").val()
    var inputvalor=$("#preco").val()
    var inputdataR=$("#referencia").val()
    $('#tabCarros').append(`
    <tr>
        <td>${inputmarca}</td>
        <td>${inputnome}</td>
        <td>${inputvalor}</td>
        <td>${inputdataR}</td>
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
// $(document).ready( function () {
//     $('#tabCarros').DataTable( {
//         retrieve: true,
//         paging: false,
//         ordering:false,
//         scrolly: 400,
//         searching: false,
//         autoWidth: true,
//     });
// });
