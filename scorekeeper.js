const p1btn = document.querySelector('#p1button');
const p2btn = document.querySelector('#p2button');
const resetbtn = document.querySelector('#resetbutton')
const p1display = document.querySelector('#p1score');
const p2display = document.querySelector('#p2score');
const playtoselect = document.querySelector('#playto');

let p1count = 0;
let p2count = 0;
let wincount = 3;
let isgameover = false;
p1btn.addEventListener('click',function(){
    if(!isgameover){
        p1count+=1;
        if(p1count===wincount){
            isgameover = true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
    }
    p1display.textContent = p1count;
})

p2btn.addEventListener('click',function(){
    if(!isgameover){
        p2count+=1;
        if(p2count===wincount){
            isgameover = true;
            p1display.classList.add('loser');
            p2display.classList.add('winner');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
    }
    p2display.textContent = p2count;
})

playtoselect.addEventListener('change',function(){
    wincount = parseInt(this.value);
    reset();
})
resetbtn.addEventListener('click',reset);

function reset(){
    isgameover = false;
    p1display.textContent = '0';
    p2display.textContent = '0';
    p1count=0;
    p2count=0;
    p1display.classList.remove('winner','loser')
    p2display.classList.remove('winner','loser')
    p1btn.disabled = false;
    p2btn.disabled = false;
}