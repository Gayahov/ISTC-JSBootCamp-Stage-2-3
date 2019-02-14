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
   //console.log(toDo)
    // remove checked list
    var remove = document.getElementsByClassName("remove");
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            item = this.parentElement;
            item.parentNode.removeChild(item);
            for (var i = 0; i < toDo.length; i++ ){ 
                if(toDo[i] === this.parentElement.getElementsByClassName("li_style")[0]){
                    toDo.splice(i,1);
                    break;  
            };
        };
     };
     
 };
 
 document.getElementById("show_active").addEventListener("click", function(){ 
    
        var all = document.getElementsByTagName("li");
        for(var j = 0;j<all.length; j++){
            console.log(all[j]);
        all[j] = this.parentElement
        
        console.log(all[j])
            if(all[j].classList.contains("checked")){ 
                all[j].parentElement.style.display = "none"
              };
        };
 });

    

}






