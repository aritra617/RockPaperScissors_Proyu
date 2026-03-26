alert(`Hi Proyukta! Let's play the game...hehe`);

let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usUpdate=document.querySelector("#user-score");
const csUpdate=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const uc=choice.getAttribute("id");
        play(uc);
    });
});

const genComp=()=>{
    const opt=["rock","paper","scissors"];
    return opt[Math.floor(Math.random()*3)];
};

const play=(uc)=>{

    const cc=genComp();

    if(uc===cc){
        msg.innerText="Ok it's a Draw";
        alert(`Computer chose ${cc}`);
        msg.style.backgroundColor="#872341";
    }else{

        let userwin=true;

        if(uc==="rock"){
            userwin= cc==="paper"? false : true;
        }else if(uc==="paper"){
            userwin= cc==="scissors"? false : true;
        }else{
            userwin= cc==="rock"? false : true;
        }

        if(userwin){
            userScore++;
            usUpdate.innerText=userScore;

            alert(`Computer chose ${cc}`);
            msg.innerText=`Yayy Proyukta WINS😌 !! your ${uc} beats ${cc}`;
            msg.style.backgroundColor="#1F7D53";
        }else{
            compScore++;
            csUpdate.innerText=compScore;

            alert(`Computer chose ${cc}`);
            msg.innerText=`Eh You LOSE😑, ${cc} beats your ${uc}`;
            msg.style.backgroundColor="#7D0A0A";
        }
    }
};
