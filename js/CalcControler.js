class CalcController{

    constructor() {

        this._displayCalc = "0";
        this._currentDate = "00:00:00"; 
        
    }

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timecEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = ""
        dateEl.innerHTML = ""
        timecEl.innerHTML = ""
    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value){
        this._displayCalc = value;
    }
    
    get currentDate() {
        return this._currentDate;
    }
    set currentDate(value){
        this._currentDate = value;
    }

}