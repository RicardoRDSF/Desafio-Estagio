$('#send').off().on('click', function(e){
    e.preventDefault();
    var fipe_marca = $("#marca").val()
    var fipe_name = $("#nome").val()
    var id = $("#id").val()
    var key = $("#key").val()
    var table = $('#tabCarros').DataTable();
    table.rows.add([{
        fipe_marca,
        fipe_name,
        id,
        key,
    }]);

    $.notify({
        message: 'Cadastro feito com sucesso' 
    },{
        type: 'success'
    });
});