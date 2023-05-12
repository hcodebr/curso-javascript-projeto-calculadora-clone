class CalcController {

    constructor(){
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){


        this._dateEl.innerHTML = "13/04/1999";
        this._timeEl.innerHTML = "00:00";

    }
    
    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }
    set displayCalc(valor){
        thisthis._displayCalcEl.innerHTML = valor;
    }
    get dataAtual(){

        return this.currentDate;
    }
    set dataAtual(valor){
        this.dataAtual = valor;
    }
}