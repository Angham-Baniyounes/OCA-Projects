"use strict";
class Calculator {
    constructor() {
        // properties
        this.num1 = "";
        this.num2 = "";
        this.operator = "";
        this.nums = document.getElementsByClassName("num");
        this.oprs = document.getElementsByClassName("opr");
        this.inputs = document.getElementById("inputScr");
        this.result = document.getElementById("resultScr");
        this.equalBtn = document.getElementById("equalBtn");
        this.clearBtn = document.getElementById("clearBtn");
        this.deleteBtn = document.getElementById("deleteBtn");
        this.negativeBtn = document.getElementById("negative");
        this.absBtn = document.getElementById("absoluteBtn");
        this.inputs.innerHTML = 0; 
        // call Methods
        this.init(this.nums, this.nums.length);
        this.init(this.oprs, this.oprs.length);
        this.showResult();
        this.cleario();
        this.deleteBtn.addEventListener('click', this.deleteInput);
        this.negativeBtn.addEventListener('click', this.negSign);
        this.absBtn.addEventListener('click', this.absValue);
    }
    // buttons Numbers and Operators
    init(arr, len) {
        for (var i = 0; i < len; i++) {
            if (len == 10) {
                arr[i].addEventListener("click", this.getNum);
            } else {
                arr[i].addEventListener("click", this.getOpr);
            }
        }
    }
    // Show Number and put Values in First-Number Or Second-Number
    getNum() {
        var num = this.dataset.number;
        if (cal.operator === "") {
            cal.num1 += num;
        } else {
            cal.num2 += num;
        }
        cal.getInputs();
    }
    // Show Operator and save value in Operator
    getOpr() {
        var oper = this.dataset.operator;
        if (cal.result.innerHTML != "" && cal.inputs.innerHTML != "") {
            cal.inputs.innerHTML = cal.result.innerHTML;
            cal.num1 = cal.result.innerHTML;
            cal.num2 = "";
            cal.result.innerHTML = "";
            cal.operator = oper;
        } else {
            cal.operator = oper;
            cal.getInputs();
        }
    }
    // display Inputs
    getInputs() {
        if(cal.operator == "") {
            cal.inputs.innerHTML = cal.num1;
        } else if(cal.operator != "" && cal.num2 == "") {
            cal.inputs.innerHTML = cal.num1 + " " + cal.operator;
        } else {
            cal.inputs.innerHTML = cal.num1 + " " + cal.operator + " " + cal.num2;
        }
    }
    // mathematical operations
    calculate() {
        switch (cal.operator) {
            case '*':
                var multiNum = (n1, n2) => parseFloat(n1) * parseFloat(n2);
                cal.result.innerHTML = multiNum(cal.num1, cal.num2);
                break;
            case '/':
                var dividNum = (n1, n2) => parseFloat(n1) / parseFloat(n2);
                cal.result.innerHTML = dividNum(cal.num1, cal.num2);
                break;
            case '+':
                var sumNum = (n1, n2) => parseFloat(n1) + parseFloat(n2);
                cal.result.innerHTML = sumNum(cal.num1, cal.num2);
                break;
            case '-':
                var subNum = (n1, n2) => parseFloat(n1) - parseFloat(n2);
                cal.result.innerHTML = subNum(cal.num1, cal.num2);
                break;
            case '^':
                var powNum = (n1, n2) => parseFloat(n1) ** parseFloat(n2);
                cal.result.innerHTML = powNum(cal.num1, cal.num2);
                break;
            case '!':
                var factNum = (n) => (n != 1) ? n * factNum(n - 1) : 1;
                cal.result.innerHTML = factNum(cal.num1);
                break;
            case '%':
                var modNum = (n1, n2) => parseFloat(n1) % parseFloat(n2);
                cal.result.innerHTML = modNum(cal.num1, cal.num2);
                break;
        }
    }
    // make number negative or positive
    negSign() {
        if (cal.operator == "") {
            cal.num1 *= -1;
        } else {
            cal.num2 *= -1;
        }
        cal.getInputs();
    }
    // make negative number positive number
    absValue() {
        if (cal.operator == "") {
            cal.num1 = Math.abs(cal.num1);
        } else {
            cal.num2 = Math.abs(cal.num2);
        }
        cal.getInputs();
    }
    //get Result
    showResult() {
        this.equalBtn.addEventListener("click", this.calculate);
    }
    // delete inputs
    deleteInput() {
        var result = "";
        if (cal.num1.length > 0 && cal.operator === "") {
            cal.num1 = cal.num1.substring(0, cal.num1.length - 1);
        } else if (cal.operator.length != 0 && cal.num2.length == 0) {
            cal.operator = cal.operator.substring(0, 0);
        } else if (cal.num2.length > 0) {
            cal.num2 = cal.num2.substring(0, cal.num2.length - 1);
        }
        cal.getInputs();
    }
    //Clear result and inputs screen
    cleario() {
        this.clearBtn.addEventListener("click", function () {
            cal.result.innerHTML = "";
            cal.inputs.innerHTML = 0;
            cal.num1 = "";
            cal.num2 = "";
            cal.operator = "";
        });
    }
}
let cal = new Calculator();