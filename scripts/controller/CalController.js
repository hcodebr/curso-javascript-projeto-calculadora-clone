class CalController {

    constructor(){

        this._displayCalc = "0";
         this._currentDate;
         this.initialize();

    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#date");
        let timeEl = document.querySelector("#time");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "01/05";
        timeEl.innerHTML = "00:00";
        
    }

    get displayCalc(){

        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set dataAtual(valor){
        this._currentDate = valor;
    }

}