var toDo = [];

function newElement() {
    var li = document.createElement("li");
    li.classList.add("li_style")
        //create check span
    var check_span = document.createElement("span")
    check_span.classList.add("check")
    check_span.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
        // create remove span
    li.append(check_span);
    var remove_div= document.createElement("div")
        remove_div.classList.add("remove")
        remove_div.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
        li.append(remove_div);
        //add new li
    var inputValue = document.getElementById("add_input").value;
    var text = document.createTextNode(inputValue);
    toDo.unshift(inputValue)
     li.append(text);
   if (inputValue === "") {
       document.querySelector("#add_input").style.border = "3px solid #e8a0a1";
       var error =  document.querySelector("#error")
       error.innerHTML = "please enter what to do!"
   }else {
       document.getElementById("to_do_list").append(li); 
   }
  
    document.getElementById("add_input").value = "";

};
    var dd = document.getElementsByClassName("check")

        // mark as done
   for (i=0; i<dd.length; i++){
    document.getElementsByClassName("check")[i].onclick = function(){
        var x = this.parentElement;
        //console.log(x.classList)
        if (x.classList == "li_style"){
                x.classList.add("checked") 
        } else {
                x.classList.remove("checked")
        };
     };

   };

   console.log(toDo)
        // remove checked list
    var remove = document.getElementsByClassName("remove");
    //console.log(remove);
    var i;
    var removed = []
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            for (j = 0; j<toDo.length; j++){

            }
            var div = this.parentElement;
            div.style.display = "none";
            removed.unshift("div")
            //console.log(removed)

        };
    };







