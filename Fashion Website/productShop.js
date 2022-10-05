let img = document.getElementById('product');
let imgSource = localStorage.getItem('imageProd');
let btnAdd = document.getElementById('add');
let btnMinus = document.getElementById('minus');
let counter = document.getElementById('totalCounter');
let total = document.getElementById('totalPrice');
var index = 1;
img.src = imgSource;

btnAdd.onclick = function(){
    index++;
    counter.innerHTML = index;
    let totalPrice = (index*100) + 10;
    total.innerHTML = 'Total: '+totalPrice+'$';
}
btnMinus.onclick = function(){
    if(index >1 ){
        index--;
        counter.innerHTML = index;
        let totalPrice = (index*100) + 10;
        total.innerHTML = 'Total: '+totalPrice+'$';   
    }
}