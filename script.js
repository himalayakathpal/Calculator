var buttons=document.getElementsByClassName("grid-items");
var display=document.getElementById("display-div");
var operand1=0;
var operand2=null;
var operator=null;


for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var value=this.getAttribute('data-value');
        if((value>=0&&value<=9)||value=="."){
            var initialvalue=parseFloat(display.textContent);
            if(initialvalue=='0'){
                display.innerText=value;
            }
            else{
            display.innerText+=value;
            }
        }
else if(value=="+"){

        operand1=parseFloat(display.textContent);
        display.innerText="   ";
        operator="+";
        }
        else if(value=="-"){

        operand1=parseFloat(display.textContent);
        display.innerText="   ";
        operator='-';
        }
        else if(value=="*"){

        operand1=parseFloat(display.textContent);
        display.innerText="   ";
        operator='*';
        }
        else if(value=="/"){

        operand1=parseFloat(display.textContent);
        display.innerText="   ";
        operator='/';
        }
     else if(value=="NULL"){
         display.innerText=" 0 ";
     }   
       else if(value=="="){
        operand2=parseFloat(display.textContent);
           if(operand2=="0"&&operator=='/'){
               display.innerText="ERROR";
           }
           else{
           display.innerText=eval ( operand1 +"  "+ operator +"  " + operand2 );
           }
     } 
     else if(value=="-1"){
         display.innerText=-1*display.innerText;
     }   
        else if(value=="%"){
         display.innerText=display.innerText/100;
     }   
        

    });
    
}

