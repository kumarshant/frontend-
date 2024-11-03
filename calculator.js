
const calc={
    number:[],
    operator: null,
    expression:"",
     
    storeNumber(num){
        let x= parseInt(num);
        if (this.number.length===0){
            this.number.push(x);
            this.expression += x;
        }
        else if (this.operator===null && this.number.length===1){
            this.number[0]=this.number[0]*10+x;
            this.expression=this.expression.slice(0,-1)+this.number[0];
            
        }
        else if ( this.operator!==null && this.number.length===1){
           this.number.push(x);
           this.expression+= ' '+x;
        }
        else if (this.operator!==null && this.number.length===2){
            this.number[1]=this.number[1]*10+x;
            this.expression=this.expression.slice(0,-1) + this.number[1];
        }
     document.getElementById("result_").innerHTML=this.expression;
    },

    storeOperator(op){
        if (this.operator==null){
            this.operator=op;
            this.expression+=op;
            document.getElementById("result_").innerHTML=this.expression;
        }
        else {
            alert("do not enter muliple operators at once!");
        }
       
    },
    innerOperation(cc){
          let c=parseInt(cc);
        this.expression+= ' = '+c ;
           document.getElementById("result_").innerHTML=this.expression;
           this.number.splice(0,this.number.length);
            this.number[0]=c;
           this.operator=null;
           this.expression= c;
           console.log(this.operator);
          
    },

    run(){
        if(this.operator===null || this.number.length!==2){
            alert("the operation is not valid ");
        }
        const [a,b]=this.number;

         if(this.operator==='+'){
            let c= a+b;
            this.innerOperation(c);
         }
         else if (this.operator==='-'){
            let c=a-b;
            this.innerOperation(c);
         }
         else if ( this.operator==='*'){
            let c= a*b;
            this.innerOperation(c);
         }
         else if (this.operator==='/' && b!==0){
           let c=a/b;
           this.innerOperation(c);
         }
         else if (this.operator==='/' && b===0){
            alert("division by 0 is not allowed!");
            this.operator=null;
            this.number=[];
            this.expression='';
            return;
         }
         else{
            alert("invalid operation!");
            this.operator=null;
            this.number=[];
            this.expression='';
            document.getElementById("result_").innerHTML="";
            return;
         }

    },
    clear(){
        
        this.operator=null;
        this.number=[];
        this.expression='';
        document.getElementById("result_").innerHTML="";
    },
 

};

function store(x){
    calc.storeNumber(x);
}
function show(x){
    calc.storeOperator(x);
}
function run(){
    calc.run();
}
function cleares(){
    calc.clear();
}
