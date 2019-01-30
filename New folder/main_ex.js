 /*Armstrong-numbers

function ArmstrongNum (number){
  let numberOfDigits = number.length;
  let sum = 0 for ( i = 0; i < numberOfDigits; i++) {
     sum += Math.pow(number.charAt(i)), number
 } if(sum == number){
      alert('"The number is an Armstrong number."')
  } else {
    alert("The number is not an Armstrong number.");
  }   
}
 ArmstrongNum (121);*/

var container =  document.querySelector("#container");
container.classList.add("container");

var header = document.querySelector("header");
header.classList.add("header");
 
var nav = document.querySelector("nav");
nav.classList.add("nav")

var social_icon = document.createElement ("div")
social_icon.classList.add("social_icon")
nav.appendChild(social_icon);
var social_fonts = [
    "fab fa-facebook-f",
    "fab fa-twitter",
    "fab fa-google-plus-g",
    "fab fa-linkedin-in"
];
for (let i = 0; i < social_fonts.length; i++) {
    let span = document.createElement('span');
    let i_tag = document.createElement('i');
    i_tag.className = social_fonts[i];
    span.appendChild(i_tag);
    social_icon.appendChild(span);
    
}
var main_menu = document.querySelector("#main_menu");
var logo_div = document.createElement("div")
logo_div.classList.add("logo");
main_menu.appendChild(logo_div); 

var menu_action = document.createElement("h3");
menu_action.appendChild(document.createTextNode('FLEX'));
main_menu.appendChild(menu_action);

var menu_list = document.createElement("ul");
menu_list.classList.add('menu_list');
var menu_ul = [
        'HOME',
        'SERVICES',
        'PORTFOLIO',
        'TEAM',
        'CONTACT',
    ];
    function showMenu(){
        if (menu_list.style.display === "none") {
            menu_list.style.display = "block";
            logo_div.style.display = "none";
          } else {
            menu_list.style.display = "none";
            logo_div.style.display = "block"
          }
        }
    

    for (let key in menu_ul) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = '#';
        a.appendChild(document.createTextNode(menu_ul[key]));
        li.appendChild(a);
        menu_list.appendChild(li);
     }
     main_menu.appendChild(menu_list);    

     var h2 = document.createElement('h2');
     h2.appendChild(document.createTextNode('DIGITAL STUDIO'));
     header.appendChild(h2);


var p = document.createElement('p');
p.appendChild(document.createTextNode('LET US DESIGN YOUR WEBSITE'));
header.appendChild(p);

var but = document.createElement('button');
but.appendChild(document.createTextNode('RESPONSIVE TEMPLATE'));
header.appendChild(but);



var section = document.querySelector("section");
section.classList.add("section");

var  sec_h3 = document.querySelector("h3")
sec_h3.classList.add("h3")
var  sec_p = document.querySelector("p")
sec_p.classList.add("p")

var square_items = document.querySelector('.square_items');
console.log(square_items);
var divs = document.getElementsByClassName('test');
console.log (divs);



var gellary = document.querySelector(".gellary")
var gell_Img = [
    'images/p1.jpg',
    'images/p2.jpg',
    'images/p3.jpg',
    'images/p4.jpg',
    'images/p5.jpg',
    'images/p6.jpg',
    'images/p7.jpg',
    'images/p8.jpg',
];
for (let i = 0; i < gell_Img.length; i++) {
    let img = document.createElement('div');
    img.style.backgroundImage = "url(" + gell_Img[i] + ")";
    document.getElementsByClassName('gellary')[0].appendChild(img);
};

// var x = document.getElementsByClassName('gellary')[0];
// x.addEventListener("click", myFunc)
// x.stopImmediatePropagation();
// function myFunc() {
//     x.style.height = "64px";
//   x.style.width = "64px";
// }





