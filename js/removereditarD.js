$('#tabCarros').on( 'click', 'tr', function () {
    $(this).toggleClass('selected');
} );

$('#edit').click( function () {
    alert( table.rows('.selected').data().length +' row(s) selected' );
} );