$('#send').off().on('click', function(e){
    e.preventDefault();
    var inputmarca=$("#marca").val()
    var inputnome=$("#nome").val()
    var inputid=$("#id").val()
    var inputkey=$("#key").val()
    $('#tabCarros').append(`
    <tr>
        <td>${inputmarca}</td>
        <td>${inputnome}</td>
        <td>${inputid}</td>
        <td>${inputkey}</td>
    </tr>
    `);

    $.notify({
        message: 'Cadastro feito com sucesso' 
    },{
        type: 'success'
    });
});