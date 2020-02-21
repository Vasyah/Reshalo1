function useStrict() {
    'use strict';
}
useStrict();

// function changeColor(newColor) {
//     var container = document.getElementsByClassName('changeTextColor')[1];
//     console.log(container);
//     container.style.color = newColor;
//     container.style.fontSize = 16 + 'px';
// }


function fillBlock() {
    let blockProp = document.querySelector('.bar');
    if(blockProp.style.width == 100+'%') {
        return;
    }
    var width = 1;
    var timerId = setInterval(changeWidth, 30);
    function changeWidth() {
        if (width>= 100) {
            clearInterval(timerId);
        } else {
            width++;
            blockProp.style.width = width + '%';
        }
    }
}

// let timerId = setTimeout("fillBlock()", 1000);


