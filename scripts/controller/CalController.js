class CalController {

    constructor(){

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._timeEl = document.querySelector("#time");

        this._currentDate;
        this.initialize();
    }

    initialize(){
        
        this.setDisplayDateTime();

        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);

        this.initButtonsEvents();
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    clearAll(){

        this._operation = [];

    }
    clearEntry(){

        this._operation.pop();

    }
    addOperator(value){

        this._operation.push(value);

        console.log(this.operation);
        
    }
    setError(){

        this.displayCalc = "Error";

    }

    execBtn(value){

        switch (value) {

            case 'ac':
            this.clearAll();
            break;

            case 'ce':
            this.clearEntry();
            break;

            case 'soma':

            break;

            case 'subtracao':
                
            break;

            case 'subtracao':
                
            break;

            case 'multiplicacao':
                
            break;

            case 'porcento':
                
            break;

            case 'igual':
                
            break;

            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            this.addOperator(parseInt (value));
                break;

            default:
            this.setError();
            break;
        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g");

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, "click drag", e => {
                console.log(btn.className.baseVal.replace("btn-", ""));

                let textBtn = btn.className && btn.className.baseVal ? btn.className.baseVal.replace("btn-", "") : "";


                this.execBtn(textBtn);

            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });
        });
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        this._timeEl.innerHTML = value; 
    }
    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        this._dateEl.innerHTML = value;
    }
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}

// Exemplo de utilização
const calculator = new CalController();
