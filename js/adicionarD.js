$('#send').off().on('click', function(e){
    e.preventDefault();
    var _id = $("#id").val()
    var text = $("#fatos").val()
    var table = $('#gatotable').DataTable();
    table.rows.add([{
        _id,
        text,
    }])
    .draw();
    $('#id').val('');
    $('#fatos').val('')

    $.notify({
        message: 'Cadastro feito com sucesso' 
    },{
        type: 'success'
    });
});
