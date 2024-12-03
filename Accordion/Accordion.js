function according_toggle(target){
    console.log("open");
    console.log(target);

    //reate a reference to all section using a class name
    var divsToHide = document.getElementsByClassName("accordion-section");
    //loop through each section
    for(var i=0; i<divsToHide.length; i++){
    //Hide each section
        divsToHide[i].style.display = "none";
    }
    //Create a referebce ti ab element with the same name as the target variable
    var content = document.getElementById(target);
    //Check if the content is currently displayed
    if(content.style.display === "block"){
        //Hide the content
        content.style.display = "none";
    }else{
        //Display the content
        content.style.display = "block";
    }
}