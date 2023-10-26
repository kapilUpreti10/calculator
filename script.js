let string="";
let buttons=document.querySelectorAll("button");
let textArea=document.getElementById("textArea");
buttons=Array.from(buttons)
 buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerText=="="){
            string=eval(string);
            document.querySelector("input").value=string;
        }
        else if(e.target.innerText=="AC"){
            string="";
            document.querySelector("input").value=string;
        }
        else if(e.target.innerText=="DEL"){
            string=string.toString();
           string= string.substring(0,string.length-1);
           document.querySelector("input").value=string;
        }
        else{
        string=string+e.target.innerText;
        document.querySelector("input").value=string;
        }
    })
})