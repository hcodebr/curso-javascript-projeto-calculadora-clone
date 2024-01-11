class CalController {

    constructor(){

        this._displayCalc = "0";
        this.currentDate;
        this.initialize();
    
    }

    initialize(){

    let displayCalcEl = document.querySelector("#display");
    let dateEl = document.querySelector("#date");
    let timeEl = document.querySelector("#time");

    displayCalcEl.innerHTML = "4567";
    dateEl.innerHTML = "11/01/2024";
    timeEl.innerHTML = "18:00";

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(value){
        this._displayCalc = value;
    }

    get dataAtual(){
        return this.currentDate;
    }

    set dataAtual(value){
        this.currentDate = value;
    }
}