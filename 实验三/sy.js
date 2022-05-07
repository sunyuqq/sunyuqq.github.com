var date=new Date();
var month=date.getMonth()+1;
p1.onmousedown=function(ev){
document.getElementById("p1").style.color="red";
alert("p1");
}
p2.onmousedown=function(ev){
document.getElementById("h1").innerHTML=date.getFullYear()+"-"+month+"-"+date.getDate();
alert("p2");
}
p3.onmousedown=function(ev){
    document.getElementById("parent").classList.add("fn-active");
    alert("p3");
}

p4.onmousedown=function(ev){
    p8=document.getElementById("p8");
    document.getElementById("parent").removeChild(p8);
    alert("p4");
}
p5.onmousedown=function(ev){
    window.open("https://ai.taobao.com/?pid=mm_49060511_2224600175_111161850090&union_lens=lensId%3APUB%401611579306%400b0b2a00_0e24_177399cb23a_0442%4001"
    ,"淘宝界面","height=800,width=800,toolbar=no,menuar=no,scrollbars=no,resizable=no,location=no,statue=no");
    alert("p5");
}
p6.onmousedown=function(ev){
    var parent=document.getElementById("parent");
    var p9=document.createElement("li");
    var textp9=document.createTextNode("p9");
    p9.appendChild(textp9);
    parent.appendChild(p9);
    alert("p6");
    p9.onmousedown=function(ev){
        alert("p9");
    }
}
p7.onmousedown=function(ev){
    document.getElementById("mbox").style.width=window.screen.width;
    alert("p7");
}
p8.onmousedown=function(ev){
    alert("p8");
}
