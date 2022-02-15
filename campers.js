

document.addEventListener('scroll', function(){
    var pos = document.documentElement.scrollTop;
    var modal = document.getElementById('main-header');
    if(pos>100){
        modal.style.position="fixed";
        modal.style.top="0px";
        modal.style.left="0px";
        modal.style.width="100%";
    } else {
        modal.style.position = "static";
    }
});

window.addEventListener('resize', function(){
    var width = window.innerWidth;
    var nav = document.getElementById('header-nav');
    var mobile = document.getElementById("mobile_menu");
    var top = document.getElementById("top-until");
    if(width>1270){
        nav.style.display = "block";
        mobile.style.display="none";
        
    } else if(width>900) {
        nav.style.display="none";
        top.style.display="flex";
        mobile.style.display="none";
       
    } else {
        nav.style.display="none";
        mobile.style.display="block";
        top.style.display="none";
    }
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
function open_modal(){

}