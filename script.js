// your code here
function handleSubmit(){
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    let url;
    if(name !== '' && year !== ''){
        url = "https://localhost:8080/?name="+name+"&year="+year;
    }
    else if(year === ''){
        url = "https://localhost:8080/?name="+name;
    }
    else{
        url = "https://localhost:8080/?&year="+year;
    }
    document.getElementById("url").textContent = url;
}
