
        var oneBtn = document.getElementById("calc-one");
        var twoBtn = document.getElementById("calc-two");
        var threeBtn = document.getElementById("calc-three");
        var fourBtn = document.getElementById("calc-four");
        var fiveBtn = document.getElementById("calc-five");
        var sixBtn = document.getElementById("calc-six");
        var sevenBtn = document.getElementById("calc-seven");
        var eightBtn = document.getElementById("calc-eight");
        var nineBtn = document.getElementById("calc-nine");
        var zeroBtn = document.getElementById("calc-zero");


        var dotBtn = document.getElementById("calc-dot");
        var clearBtn = document.getElementById("calc-clear");
        var backspaceBtn = document.getElementById("calc-backspace");
        var preDisplayVal = document.getElementById("pre-display");
        var displayValElement = document.getElementById("calc-display");

        var previousVal = '';
        var displayVal = '0';
        var pendinVal;
        var evalStringArray = [];

        var calcNumBtns = document.getElementsByClassName("calc-btn-num");
        var calcOperatorBtns =document.getElementsByClassName("calc-btn-operator");

        updateDisplayVal = (clickObj) =>{
            var btnText = clickObj.target.innerText;
            // console.log(btnText)
            if(displayVal === "0"){
                displayVal ='';
                previousVal = '';
            }
            displayVal += btnText;
            displayValElement.innerText = displayVal;
            preDisplayVal.innerText = previousVal;
         
        }

        for (let i = 0; i < calcNumBtns.length; i++) {
            calcNumBtns[i].addEventListener('click',updateDisplayVal, false)
            console.log(calcNumBtns[i])
        }

        updateOperatorVal = (clickObj) => {
            operator = clickObj.target.innerText;
            switch (operator) {
                case '+':
                    pendinVal = displayVal;
                    previousVal = pendinVal + '+'
                    displayVal = '';
                    preDisplayVal.innerText = previousVal;
                    displayValElement.innerText = displayVal;
                    evalStringArray.push(pendinVal);
                    evalStringArray.push('+');
                    break;
                case '-':
                    pendinVal = displayVal;
                    previousVal = pendinVal + '-'
                    displayVal = '';
                    preDisplayVal.innerText = previousVal;
                    displayValElement.innerText = displayVal;
                    evalStringArray.push(pendinVal);
                    evalStringArray.push('-');
                    break;
                case '*':
                    pendinVal = displayVal;
                    previousVal = pendinVal + '*'
                    displayVal = '';
                    preDisplayVal.innerText = previousVal;
                    displayValElement.innerText = displayVal;
                    evalStringArray.push(pendinVal);
                    evalStringArray.push('*');
                    break;
                 case '/':
                    pendinVal = displayVal;
                    previousVal = pendinVal + '/'
                    displayVal = '';
                    preDisplayVal.innerText = previousVal;
                    displayValElement.innerText = displayVal;
                    evalStringArray.push(pendinVal);
                    evalStringArray.push('/');
                    break;
                    
                case '=':
                    evalStringArray.push(displayVal);
                    var evaluation = eval(evalStringArray.join(''));
                    displayValElement.innerText = evaluation;
                    evalStringArray = [];
                    preDisplayVal.innerText = '';
                    break;
                    
                default:
                    break;
            }
        }

        for (let i = 0; i < calcOperatorBtns.length; i++) {
            calcOperatorBtns[i].addEventListener('click',updateOperatorVal, false)
           
        }

        clearBtn.addEventListener('click', ()=>{
            displayVal = '0';
            previousVal = '';
            pendinVal = undefined;
            evalStringArray = [];
            // console.log(pendinVal, evalStringArray)
            preDisplayVal.innerText = previousVal;
            displayValElement.innerText = displayVal;
        })

        backspaceBtn.addEventListener('click', ()=>{
            let displayLength = displayVal.length;
            displayVal = displayVal.slice(0, displayLength-1)
            if (displayVal === '') {
                displayVal = '0'
            }
            // console.log(displayVal, displayLength)
            displayValElement.innerText = displayVal;
        })
       
        dotBtn.addEventListener('click', ()=>{
          if (!displayVal.includes('.')) {
              displayVal = displayVal + '.'
          }
        displayValElement.innerText = displayVal;
        })
