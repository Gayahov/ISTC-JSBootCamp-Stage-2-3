fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then((response) => {

 for(var key in response){
     if (response )
    var newLi = document.createElement("li");
     var Ul = document.getElementById("get_data").appendChild(newLi).innerHTML = key + ":" + response[key];

     }
})
var ul = document.getElementById("get_data")
 for (let i = 0; i < 5; i++ ) {
     var li =document.createElement("li")
     li.append
     
     
 }