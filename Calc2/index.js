window.addEventListener('load',init);

function init(){
    var input = document.querySelector('#in');
    var div = document.querySelector('#btns');
    createButtons(div,input);
}

function createButtons(div,input){
    oprs = ['+','-','*','C','=','/'];
    let k =0;
    for(let i=9;i>=0;i--){
        
        if(i == 6 || i == 3 || i == 0){
            var opr = createOperator(oprs[k],input);
            k++;
            div.appendChild(opr);
            div.appendChild(document.createElement('br'));
        }
        if(i==0){
            var clear = createOperator(oprs[k],input);
            div.appendChild(clear);
            k++;
        }
        let btn = document.createElement('button');
        btn.className = "btn btn-primary";
        btn.classList.add("mr-2");
        btn.classList.add("mb-2");
        btn.classList.add("p-2");
        btn.innerText = i;
        btn.addEventListener('click',()=>{
            input.value  += btn.innerText;
        });
        
        div.appendChild(btn);
    }
    var opr = createOperator(oprs[k],input);
    div.appendChild(opr);
    k++;
    opr = createOperator(oprs[k],input);
    div.appendChild(opr);
}

function createOperator(sign,input){
    let btn = document.createElement('button');
    btn.className = "btn btn-success";
    btn.classList.add("mr-2");
    btn.classList.add("mb-2");
    btn.classList.add("p-2");
    btn.innerText = sign;
    btn.addEventListener('click',()=>{
        if(sign == 'C'){
            input.value = "";
        }
        else if(sign == '='){
            input.value = eval(input.value);
        }
        else{
            input.value  += btn.innerText;
        }
    });
    return btn;
}