function myFunction (){
    var name = document.getElementById("name").value;
    //console.log(name);
    var surname = document.getElementById("surname").value;
    //console.log(surname);
    var company= document.getElementById("company").value;
    //console.log(company);
    var position= document.getElementById("position").value;
    //console.log(position);
var employe = function( name, surname, company,position){
    this.name = name;
    this.surname = surname;
    this.company = company;
    this.position = position;

}

var john = new employe(name, surname,company,position);
console.log(john)
// var para = document.createElement("form");
// var t = document.createTextNode( john);
// console.log (t)
// para.appendChild(t);
// document.body.appendChild(para);

}

function Done () {
    var tag = document.getElementById("tag").value;
    //console.log(tag);
    var color = document.getElementById("color").value;
    var text = document.getElementById("text").value;
    var background = document.getElementById("background").value;
    function Constructor (tag, color, text, background) {
        this.tag = document.createElement(tag);
        this.color = this.tag.style.color = color;
        this.text = this.tag.innerText = text;
        this.background = this.tag.style.backgroundColor = background;
        this.append = function () {
            document.body.appendChild(this.tag);
        };
        this.append();
    };
    var newEl = new Constructor(tag, color, text, background);
   
};
