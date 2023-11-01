document.addEventListener("DOMContentLoaded", function(){
    const url = "http://localhost:8080/produto";

    fetch(url)
        .then(Response => Response.json())
        .then(data =>{
            console.log(data);
        })
})

