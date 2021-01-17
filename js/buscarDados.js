var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://fipeapi.appspot.com/api/1/carros/veiculos/21.json');
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        var data = (JSON.parse(xhr.responseText));
        $('#tabCarros').DataTable ( {
            retrieve: true,
            ordering:false,
            scrolly: 400,
            autoWidth: true,
            data: data,
            columns: [
                { data: 'fipe_marca'},
                { data: 'fipe_name'},
                { data: 'id'},
                { data: 'key'}
            ]
        });
    }
}