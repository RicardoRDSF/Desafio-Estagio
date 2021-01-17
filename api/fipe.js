var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://fipeapi.appspot.com/api/1/carros/veiculo/21/001267-0/2013-1.json');
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        var data = (JSON.parse(xhr.responseText));
    
    return data;
















































    
    }
}