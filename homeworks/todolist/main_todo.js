
function newElement() {
    var li = document.createElement("li");
    li.classList.add("li_style")
    //create check span
    var check_span = document.createElement("span")
    check_span.classList.add("check")
    check_span.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    li.append(check_span);
    //add new li
    var inputValue = document.getElementById("add_input").value;
    console.log(inputValue);
    var text = document.createTextNode(inputValue);
    console.log(text);
     li.append(text);
    console.log(li);
   if (inputValue === "") {
    document.querySelector("#add_input").style.border = "1px solid #e8a0a1";
   }else {
       document.getElementById("to_do_list").append(li); 
   }
  
document.getElementById("add_input").value = "";
// create remove span
var remove_span = document.createElement("span")
    remove_span.classList.add("remove")
    remove_span.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    li.append(remove_span);


}