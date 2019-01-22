function myFunction (event){
    if(event.target.id === "red_circle" || event.target.id === "black_circle"){
        var x = document.getElementById("red_circle");
        x.style.animationName = "example_1";
        var y = document.getElementById("black_circle");
        y.style.animationName = "example_2";
    }       
}