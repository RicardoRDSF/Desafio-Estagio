var xhr = new XMLHttpRequest();
xhr.open("GET", "https://brianiswu-cat-facts-v1.p.rapidapi.com/facts");
xhr.setRequestHeader("x-rapidapi-key", "e83c119e06mshf544c1129f90e88p12a92cjsne55b655f06fb");
xhr.setRequestHeader("x-rapidapi-host", "brianiswu-cat-facts-v1.p.rapidapi.com");
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        var data = (JSON.parse(xhr.responseText));
        console.log(data)
        $('#gatotable').DataTable ( {
            select: true,
            ordering:false,
            autoWidth: true,
            data: data,
            columns: [
                { data: '_id', sTitle: "ID" },
                { data: 'text', sTitle: "Fatos" }
                ]
        });
    }
}