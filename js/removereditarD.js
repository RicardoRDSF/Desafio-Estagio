
    $('#gatotable').on( 'click', 'tr', function () {
        var table = $('#gatotable').DataTable();
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
    
    $('#delete').click( function () {
        var table = $('#gatotable').DataTable();
        table.row('.selected').remove().draw( false );
    } );

    $('#edit').click( function edit() {
        var table = $('#gatotable').DataTable();
        var dados = table.row('.selected').data();
        $('#id').val( dados._id );
        $('#fatos').val( dados.text );
        table.row('.selected').remove().draw( false );
        $("#send").text("Alterar");
        $("#send").on('click', ()=>{
            $("#send").text("Cadastrar");
        });
    } );