
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

    $('#edit').click( function () {
        var table = $('#gatotable').DataTable();
        var teste = table.row('.selected').data();
        console.log(teste)
        
    } );