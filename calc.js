"use strict";

function save_digit(digit){
    let number_input = document.querySelector(".number_input");
    number_input.innerText = number_input.innerText * 10 + digit;
}

function clear_input(){
    let number_input = document.querySelector(".number_input");
    number_input.innerText = "";
}

function delete_last_digit(){
    let number_input = document.querySelector(".number_input");
    number_input.innerText = Math.floor(number_input.innerText / 10);
}

let operation;
let first_number;

function get_number(){
    let number_input = document.querySelector(".number_input");
    let number = +number_input.innerText;
    return number;
}

function plus(){
    first_number = get_number();
    clear_input();
    operation = "+";
}

function minus(){
    first_number = get_number();
    clear_input();
    operation = "-";
}

function multiply(){
    first_number = get_number();
    clear_input();
    operation = "*";
}

function division(){
    first_number = get_number();
    clear_input();
    operation = "/";
}

function equal(){
    let second_number = get_number();

    if (operation == '+'){
        let result = first_number + second_number;
    }
    else if (operation == "-"){
        let result = first_number - second_number;
    }

    else if (operation == "*"){
        let result = first_number * second_number;
    }

    else if (operation == "/"){
        let result = first_number / second_number;
    }

    let number_input = document.querySelector(".number_input");
        number_input.innerText = result;
}

