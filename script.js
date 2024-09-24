
let gameseq=[];
let userseq=[];
let btns=['yellow','red','purple','green'];
let start=false;
let level=0;
h2=document.querySelector('h2');
//start the game=press any key
document.addEventListener('keypress',function(){
if(start==false)
{
    console.log("game is started");
    start=true;
   levelup();
    
}
  
});


function flashbtn(btn){
btn.classList.add('flash');

  setTimeout(function(){
    btn.classList.remove('flash')
  },250);
  
  

  
}

function levelup()
{
  userseq=[];
  level++;
   h2.innerText=`Level ${level}`;

  //random button choose
let random=Math.floor(Math.random()*3);
  let randomcolor=btns[random];
  gameseq.push(randomcolor);
  let randombtn=document.querySelector(`.${randomcolor}`);
flashbtn(randombtn);
  
}

function checkseq(idx){
   
  if(userseq[idx]==gameseq[idx])
  {
    if(userseq.length==gameseq.length)
    {
      setTimeout(levelup,250);
    }
    
  }
  else{
    h2.innerHTML=`Game Over! your score was<b>${level}</b> Press any key to restart the game`;
    reset();
  }
}

function btnPress(){

  let btn=this;
  flashbtn(btn);
  let usercolor=btn.getAttribute('id');
  userseq.push(usercolor);
  checkseq(userseq.length-1);;
  
}

let allbtn=document.querySelectorAll('.btn');
for(let i=0;i<allbtn.length;++i)
  {
    allbtn[i].addEventListener('click',btnPress);
  }

function reset(){
  start=false;
  gameseq=[];
  userseq=[];
  level=0;
  
}