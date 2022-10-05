let div1 = document.getElementById('first');
let div2 = document.getElementById('second');
let tab1 = document.getElementById('firstTab');
let tab2 = document.getElementById('secondTab');


window.onload = function () {
    tab1.style.color = 'brown';
    tab1.style.borderBottom = '1px solid brown';
    div1.style.display = 'inline-block';
    div2.style.display = 'none'
    div4.style.display = 'none'
    div3.style.display = 'none';
}
function displaySecondOnle(color, third, fourth) {
    tab2.style.color = color;
    tab2.style.borderBottom = '1px solid';
    tab2.style.borderBottomColor = color;
    tab1.style.color = 'black';
    tab1.style.border = 'none';
    if (third == 1) {
        let div3 = document.getElementById('third');
        let tab3 = document.getElementById('thirdTab');
        tab3.style.color = 'black';
        tab3.style.border = 'none';
        div3.style.display = 'none';
    }
    if (fourth == 1) {
        let div4 = document.getElementById('four');
        let tab4 = document.getElementById('fourthTab');
        tab4.style.color = 'black';
        tab4.style.border = 'none';
        div4.style.display = 'none'
    }
    div1.style.display = 'none';
    div2.style.display = 'inline-block';
}
function displayFirstOnle(color, third, fourth) {

    if (third == 1) {
        let div3 = document.getElementById('third');
        let tab3 = document.getElementById('thirdTab');
        tab3.style.color = 'black';
        tab3.style.border = 'none';
        div3.style.display = 'none';
    }
    if (fourth == 1) {
        let div4 = document.getElementById('four');
        let tab4 = document.getElementById('fourthTab');
        tab4.style.color = 'black';
        tab4.style.border = 'none';
        div4.style.display = 'none'
    }
    div2.style.display = 'none';
    div1.style.display = 'inline-block';
    tab2.style.color = 'black';
    tab2.style.border = 'none';
    tab1.style.color = color;
    tab1.style.borderBottom = '1px solid';
    tab1.style.borderBottomColor = color;
}
function displayThirdOnle(color, fourth) {
    let tab3 = document.getElementById('thirdTab');
    let div3 = document.getElementById('third');
    if (fourth == 1) {
        let div4 = document.getElementById('four');
        let tab4 = document.getElementById('fourthTab');
        tab4.style.color = 'black';
        tab4.style.border = 'none';
        div4.style.display = 'none'
    }
    tab3.style.color = color;
    tab3.style.borderBottom = '1px solid';
    tab3.style.borderBottomColor = color;
    tab1.style.color = 'black';
    tab1.style.border = 'none';
    tab2.style.color = 'black';
    tab2.style.border = 'none';
    div1.style.display = 'none';
    div3.style.display = 'inline-block';
    div2.style.display = 'none';
}
function displayFourthOnle(color) {
    let div3 = document.getElementById('third');
    let tab3 = document.getElementById('thirdTab');
    let div4 = document.getElementById('four');
    let tab4 = document.getElementById('fourthTab');
    tab4.style.color = color;
    tab4.style.borderBottom = '1px solid';
    tab4.style.borderBottomColor = color;
    tab1.style.color = 'black';
    tab1.style.border = 'none';
    tab2.style.color = 'black';
    tab2.style.border = 'none';
    tab3.style.color = 'black';
    tab3.style.border = 'none';
    div1.style.display = 'none';
    div4.style.display = 'inline-block';
    div2.style.display = 'none';
    div3.style.display = 'none'
}
function sendImageProd(src){
    localStorage.setItem('imageProd', src);
    window.location.href='productDetails.html';
}