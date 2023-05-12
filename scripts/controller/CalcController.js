class CalcController {

    constructor(){
        this._displayCalc = "0";
        this.currentDate;
    }
    
    get displayCalc(){

        return this._displayCalc;

    }
    set displayCalc(valor){
        this._displayCalc = valor;
    }
    get dataAtual(){

        return this.currentDate;
    }
    set dataAtual(valor){
        this.dataAtual = valor;
    }
}