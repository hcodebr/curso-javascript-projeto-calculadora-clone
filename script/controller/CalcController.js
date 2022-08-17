class CalcController{

    constructor(){
        this._locale = 'pt-br';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEL= document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate = "";
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime();

        setInterval(() =>{
            this.setDisplayDateTime();

           
        }, 1000);
   
    }


    addEventListenerAll(element, events, fn){

        events.split ('').forEach (event => {


            element.addEventListener(event, fn, false);


        });



    }


    initButtonsEvents(){

       let buttons = document.querySelectorAll("#buttons > g, #parts > g");    //seleciona os botoes da calc pela classe 

        buttons.forEach((btn, index)=>{

            this.addEventListener(btn,"click drag", e => {

                console.log(btn.className.baseVal.replace("btn-",""));


            });

            this.addEventListenerAll(btn,"mouseup mouseover mousedown", e => {

                btn.style.cursor = "pointer";

            });


       });
    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale);  //atualiza a data em tempo real 
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);  //atualiza a hora em tempo real 

    }
    get displayTime(){
        return this._timeEl.innerHTML;

    }
    set displayTime(value){
        return this._timeEl.innerHTML = value;

    }

    get displayDate(){
        return this._dateEL.innerHTML;

    }
    set displayDate(value){
        return this._dateEL.innerHTML = value;

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
        return this._dataAtual = value;
    }








}
