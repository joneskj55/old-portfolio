//Created by kevinjones on 11/16/16.//

(function () {
    "use strict";
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var btn6 = document.getElementById("btn6");
    var btn7 = document.getElementById("btn7");
    var btn8 = document.getElementById("btn8");
    var btn9 = document.getElementById("btn9");
    var btn0 = document.getElementById("btn0");
    var btnA = document.getElementById("btnA");
    var btnS = document.getElementById("btnS");
    var btnM = document.getElementById("btnM");
    var btnD = document.getElementById("btnD");
    var btnE = document.getElementById("btnE");
    var btnC = document.getElementById("btnC");
    var leftInput = document.getElementById("left-input");
    var midInput = document.getElementById("middle-input");
    var rightInput = document.getElementById("right-input");

//LEFT & RIGHT INPUT FUNCTIONS...
    var inputOne = function () {
        if (midInput.value == "") {
            leftInput.value += 1;
        } else {
            rightInput.value += 1;
        }
    };
    var inputTwo = function () {
        if (midInput.value == "") {
            leftInput.value += 2;
        } else {
            rightInput.value += 2;
        }
    };
    var inputThree = function () {
        if (midInput.value == "") {
            leftInput.value += 3
        } else {
            rightInput.value += 3;
        }
    };
    var inputFour = function () {
        if (midInput.value == "") {
            leftInput.value += 4;
        } else {
            rightInput.value += 4;
        }
    };
    var inputFive = function () {
        if (midInput.value == "") {
            leftInput.value += 5;
        } else {
            rightInput.value += 5;
        }
    };
    var inputSix = function () {
        if (midInput.value == "") {
            leftInput.value += 6;
        } else {
            rightInput.value += 6;
        }
    };
    var inputSeven = function () {
        if (midInput.value == "") {
            leftInput.value += 7;
        } else {
            rightInput.value += 7;
        }
    };
    var inputEight = function () {
        if (midInput.value == "") {
            leftInput.value += 8;
        } else {
            rightInput.value += 8;
        }
    };
    var inputNine = function () {
        if (midInput.value == "") {
            leftInput.value += 9;
        } else {
            rightInput.value += 9;
        }
    };
    var inputZero = function () {
        if (midInput.value == "") {
            leftInput.value += 0;
        } else {
            rightInput.value += 0;
        }
    };

    //OPERATORS...
    btnA.onclick = function () {
        midInput.value = "+";
        //if + is clicked add rightInput + leftInput
    };

    btnS.onclick = function () {
        midInput.value = "-";
        //if - is clicked subtract rightInput from leftInput
    };

    btnM.onclick = function () {
        midInput.value = "*";
        //if * is clicked multiply rightInput by leftInput
    };

    btnD.onclick = function () {
        midInput.value = "/";
        //if / is clicked divide rightInput by leftInput
    };

    //NUMBER BUTTONS...
    btn1.addEventListener("click", inputOne);
    btn2.addEventListener("click", inputTwo);
    btn3.addEventListener("click", inputThree);
    btn4.addEventListener("click", inputFour);
    btn5.addEventListener("click", inputFive);
    btn6.addEventListener("click", inputSix);
    btn7.addEventListener("click", inputSeven);
    btn8.addEventListener("click", inputEight);
    btn9.addEventListener("click", inputNine);
    btn0.addEventListener("click", inputZero);
    btnC.addEventListener("click", clear);
    btnE.addEventListener("click", evaluate);

//EVALUATE...
    function evaluate() {
        var num1 = document.getElementById("left-input").value;
        var op = document.getElementById("middle-input").value;
        var num2 = document.getElementById("right-input").value;

        var sum = eval(num1 + op + num2);

        clear();

        return leftInput.value = sum;
    }

//CLEAR ALL
    function clear() {
        document.getElementById("left-input").value = "";
        document.getElementById("middle-input").value = "";
        document.getElementById("right-input").value = "";
    }
})();







