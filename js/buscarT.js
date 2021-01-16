$.ajax({
    url : 'http://fipeapi.appspot.com/api/1/carros/veiculo/21/001267-0/2013-1.json',
    type : 'GET',
    contentType : 'application/json;charset=utf-8',
    dataType : 'json'
}).done(function (data) {
    console.log(data)
    return data
});