function show(n) {
    var curr = document.querySelector("div[style]");
    curr.removeAttribute("style");
    document.getElementById("content" + n).style.zIndex = "1";
}

function showImg1() {
    document.getElementById("big_pic1").style.display = "block";
}
function hideImg1() {
    document.getElementById("big_pic1").style.display = "none";
}

function showImg2() {
    document.getElementById("big_pic2").style.display = "block";
}

function hideImg2() {
    document.getElementById("big_pic2").style.display = "none";
}

function showImg3() {
    document.getElementById("big_pic3").style.display = "block";
}
function hideImg3() {
    document.getElementById("big_pic3").style.display = "none";
}
function showImg4() {
    document.getElementById("big_pic4").style.display = "block";
}
function hideImg4() {
    document.getElementById("big_pic4").style.display = "none";
}




var btns = document.querySelectorAll('#btn');
btns.forEach((value, index, array) => {
    value.addEventListener("click", () => {
        var items = document.querySelectorAll('#item0');
        items.forEach((ele, index) => {
            ele.style.display = "none"
        })
        items[index].style.display = "block"
    })
})







var divs = document.querySelectorAll('#item')
var items = document.querySelectorAll('#right');
var num = 3
items.forEach((value, index, array) => {
    value.addEventListener("click", () => {
        var par = value.parentElement
        par.remove()
        num--
        var left = document.querySelectorAll('#left');
        for (var i = 1; i < left.length; i++) {
            left[i].innerHTML = i
        }
    })
})
var b = document.getElementById('bt')
b.addEventListener("click", () => {
    var main = document.getElementById('main')
    var a = divs[0].cloneNode(true)
    var achild = a.childNodes.item(1)
    achild.innerHTML = ++num
    var adelect = a.childNodes.item(3)
    adelect.addEventListener("click", () => {
        var par = adelect.parentElement
        par.remove()
        num--
        var left = document.querySelectorAll('#left');
        for (var i = 1; i < left.length; i++) {
            left[i].innerHTML = i
        }
    })
    main.appendChild(a)
})