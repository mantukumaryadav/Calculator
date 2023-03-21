let keys = document.querySelectorAll("#keyboard>div");
let bag="";
for(let i=0;i<keys.length;i++){
    keys[i].addEventListener("click",myFun)
}

function myFun(event){
    let targetNumber = event.target.innerText;
    if(targetNumber=="C"){
        bag="";
        document.querySelector("#display").innerText = bag;
    }
    else if(targetNumber=="="){
        let res = eval(bag);
        document.querySelector("#display").innerText = res;
    }
    else{
        bag=bag+targetNumber;
        document.querySelector("#display").innerText = bag;
    }
    
}