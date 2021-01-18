var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://fipeapi.appspot.com/api/1/carros/veiculos/21.json');
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        var data = (JSON.parse(xhr.responseText));
        console.log(data)
        $('#tabCarros').DataTable ( {
            select: true,
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