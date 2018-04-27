window.onload=function(){
    var mini1=document.getElementsByClassName("mini1")[0];
    var img1=document.getElementsByClassName("img1")[0];
    var mini2=document.getElementsByClassName("mini2")[0];
    var img2=document.getElementsByClassName("img2")[0];
    var mini3=document.getElementsByClassName("mini3")[0];
    var img3=document.getElementsByClassName("img3")[0];
    var mini4=document.getElementsByClassName("mini4")[0];
    var img4=document.getElementsByClassName("img4")[0];
    var mini5=document.getElementsByClassName("mini5")[0];
    var img5=document.getElementsByClassName("img5")[0];
    mini1.addEventListener("click",function(){
        img1.style.zIndex=1;
        img1.style.animation="img1 0.5s ease-out";
    })
    mini2.addEventListener("click",function(){
        img2.style.zIndex=1;
        img2.style.animation="img2 0.5s ease-out";
    })
    mini3.addEventListener("click",function(){
        img3.style.zIndex=1;
        img3.style.animation="img3 1s ease-in";
    })
    mini4.addEventListener("click",function(){
        img4.style.zIndex=1;
        img4.style.animation="img4 1s ease-out";
    })
    mini5.addEventListener("click",function(){
        img5.style.zIndex=1;
        img5.style.animation="img5 0.7s ease-in-out";
    })
}