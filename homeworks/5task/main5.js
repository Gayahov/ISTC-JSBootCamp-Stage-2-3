function myMove() {
    var elem = document.getElementById("animate");   
    var y = window.innerWidth-60;
    var pos = 0;
    var id = setInterval(frame,3);
    function frame() {
      if (pos == y) {
        clearInterval(id);
        elem.style.backgroundColor ="yellow";
      } else {
        pos++; 
        elem.style.left = pos + "px";  
      }
    }
  }