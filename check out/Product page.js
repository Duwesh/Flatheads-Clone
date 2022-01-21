document.querySelector("#button").addEventListener("click",addItem);
var arr=JSON.parse(localStorage.getItem("Cart"))||[];
function addItem(event){
    event.preventDefault;
    var qty=document.querySelector("#select").value;
    var name = document.querySelector("#name").textContent;
    var rs = 4990;
    var color = document.querySelector("#colorselect").value;
    var size = document.querySelector("#sizechart").value;
    var img = document.querySelector("#img").src;
    console.log(img)
    var obj={
        name: name,
        img: img,
        qty: qty,
        color: color,
        size: size,
        rs: rs
    }
    arr.push(obj);
    localStorage.setItem("Cart",JSON.stringify(arr));

}
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}