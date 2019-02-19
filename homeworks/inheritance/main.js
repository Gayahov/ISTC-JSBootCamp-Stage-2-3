function myFunction (){
    var name = document.getElementById("name").value;
    console.log(name);
    var surname = document.getElementById("surname").value;
    console.log(surname);
    var company= document.getElementById("company").value;
    console.log(company);
    var position= document.getElementById("position").value;
    console.log(position);
var employe = function( name, surname, company,position){
    this.name = name;
    this.surname = surname;
    this.company = company;
    this.position = position;

}

var john = new employe(name, surname,company,position);
console.log(john)
var para = document.createElement("P");
var t = document.createTextNode( john);
para.appendChild(t);
document.body.appendChild(para);

}
