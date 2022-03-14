var topLine = document.getElementById('main-header');

document.addEventListener('scroll', function(){
    var pos = document.documentElement.scrollTop;
    
    if(pos>100){
        topLine.style.position="fixed";
        topLine.style.top="0px";
        topLine.style.left="0px";
        topLine.style.width="100%";
        topLine.style.zIndex="10";
    } else {
        topLine.style.position = "static";
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
        topLine.style.position = "static";
        
    } else if(width>900) {
        nav.style.display="none";
        top.style.display="flex";
        mobile.style.display="none";
        topLine.style.position = "static";
       
    } else {
        nav.style.display="none";
        mobile.style.display="block";
        top.style.display="none";
        topLine.style.position="fixed";
        topLine.style.top="0px";
        topLine.style.left="0px";
        topLine.style.width="100%";
    }
});
function joinCheck(){
    var userId = document.getElementById("id");
    var userPw = document.getElementById("pw");
    var userName = document.getElementById("name");
    var nickname = document.getElementById("nickname");
    var Addr = document.getElementById("addr");
    var Phone = document.getElementById("phone");
    var reg_frm = document.querySelector("#reg_frm");
    if(userId.value.length==0){
      alert("아이디를 입력하세요.")
      reg_frm.id.focus();
    } else if(userPw.value.length==0) {
      alert("비밀번호를 입력하세요.")
      reg_frm.pw.focus();
    } else if(userName.value.length==0) {
      alert("이름 입력하세요.")
      reg_frm.name.focus();
    } else if(nickname.value.length==0) {
      alert("리뷰작성시 노출할 별명을 입력해주세요.")
      reg_frm.nickname.focus();
    } else if(Addr.value.length==0) {
      alert("주소를 입력하세요.")
      reg_frm.addr.focus();
    } else if(Phone.value.length==0) {
      alert("전화번호를 입력하세요.")
      reg_frm.phone.focus();
    }  else {
        reg_frm.submit();
    }
}
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