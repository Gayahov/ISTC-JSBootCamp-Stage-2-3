/*function getObj() {                                    
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(response => writeData(response))                    // call writeData() function to display data
      .catch(error => console.error('Error:', error));
}

var ul = document.getElementById('get_data')[0];        // get 'ul' element 


function writeData(res) {
    for (let i = 0; i < 5; i++) {
        var li = document.createElement('li');
        for (let key in res[i]) {
            li.innerHTML += key + ': ' + res[i][key] + '; ';
        }
        ul.appendChild(li);
    }
    console.log(res);
}


var data = [
    {name:"toys",
    location: "Yerevan",
    price: "750"},
    {name:"cars",
    location: "Yerevan",
    price: "890"},
    {name:"food",
    location: "Yerevan",
    price: "560"},
    {name:"dresses",
    location: "Yerevan",
    price: "550"},
    {name:"parfume",
    location: "Yerevan",
    price: "2500"}
]
fetch ("http://rest.learncode.academy/api/learncode/friends", {
 method: "POST",
 headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(data)
})
.then(response => response.json())  
.then((response) => {
console.table(response);
}) 




fetch('https://jsonplaceholder.typicode.com/users', {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({
      username: 'Elon Musk',
      email: 'elonmusk@gmail.com',
    })
  })

*/



function Person(name,surname,nationality ) = {
    this.name = name;
    this.surname = surname;
    this.nationality;
}
