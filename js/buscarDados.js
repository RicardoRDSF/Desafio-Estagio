//     //  const url = "http://fipeapi.appspot.com/api/1/carros/veiculo/21/001267-0/2013-1.json";
//     //  const data = ''
//     //  fetch(url)
//     //  .then(response => console.log(response.json()))
//     // //  .then(contents => {
//     // //      console.log(contents)
//     // //  })
//     //  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));    
    
    
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'http://fipeapi.appspot.com/api/1/carros/veiculo/21/001267-0/2013-1.json');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4){
//         var data = (JSON.parse(xhr.responseText));
//         var marca = data.marca;
//         var preco = data.preco;
//         var referencia = data.referencia;
//         var nome =  data.name;
//         // var carros = [{
//         //     marca,
//         //     nome,
//         //     preco,
//         //     referencia
//         // }]

//         var carros = [{
//             'marca': 'teste',
//             'nome': 'teste',
//             'preco': 'teste',
//             'referencia': 'teste'
//         }]
//         console.log(carros[0])
//         carregarTabela(carros[0]);
//     }
// }


// function carregarTabela(dadosTab){
//     let colunas = [
//       {"sTitle":"Marca"},
//       {"sTitle":"Nome"},
//       {"sTitle":"Preço"},
//       {"sTitle":"Referência"},
//     ];
//     const configDatatable = {
//         "aaData": dadosTab,
//         "aoColumns":colunas,
//         "bAutoWidth":true,
//         fnRowCallback: function(nRow, aData){
//             // debugger
//             // $('td:eq(Ø)' , nRow).html('<p>' + aData.referencia.toUpperCase() + '</p>');
//             console.log(aData)
//             return nRow;
//         }
//     }
    
//     $("#tabCarros").dataTable(configDatatable);
// }

// // carregarTabela();


$(document).ready(function() {
    $('#tabCarros').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": "../api/fipe.js",
        "columns": [
            { "data": "first_name" },
            { "data": "last_name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "start_date" },
            { "data": "salary" }
        ]
    } );
} );