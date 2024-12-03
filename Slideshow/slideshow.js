var current = 0;
var total = 4;

function previous(){
    //current = current + 1;
    //current += 1;
    current--;
    console.log(current);
    
    //If the current variable is greater than the number of slides, reser to zero
    if(current < 0){
        current = total - 1;
    }
    //Create a reference to all the slide divs
    var slides = document.getElementsByClassName("slide");
    //loop through the slides
    for(var i = 0;  i<slides.length; i++){
        slides[i].style.display = "none";
    }
    //Display the selected slide
    slides[current].style.display = "block";
}
function next(){
    current++;
    if(current >= total){
        current = 0;
    }
    //Create a reference to all the slide divs
    var slides = document.getElementsByClassName("slide");
    //loop through the slides
    for(var i = 0;  i<slides.length; i++){
        slides[i].style.display = "none";
    }
    //Display the selected slide
    slides[current].style.display = "block";

}