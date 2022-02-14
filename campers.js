

document.addEventListener(scroll,function(){

});
function sub_menu(){
    var sub = document.getElementsByClassName("sub-menu-inner");
    var num = event.target.id;
    sub[num].style.display = "block";
    sub[num].style.animation = "menu";
    sub[num].style.animationDuration = "0.5s";
}
function close_menu(){
    var sub = document.getElementsByClassName("sub-menu-inner");
    // var num = event.target.id;
    for(var i=0; i<sub.length; i++){
        sub[i].style.display = "none";
    }
    
}