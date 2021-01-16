const url = "http://fipeapi.appspot.com/api/1/carros/veiculo/21/001267-0/2013-1.json";
fetch(url)
.then(response => response.json())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))