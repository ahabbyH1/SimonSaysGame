let gameseq = [];
let userseq = [];
let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function()
{
    if(started == false)
    {
        started = true;
        levelup();
    }
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function ()
    {
        btn.classList.remove("flash");
    }, 250);
}
function levelup()
{
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let btnidx = Math.floor(Math.random()*3);
    let randclr = btns[btnidx];
    let randbtn = document.querySelector(`.${randclr}`);
    // console.log(btnidx);
    // console.log(randclr);
    // console.log(randbtn);
    gameseq.push(randclr);
    console.log(gameseq);
    btnFlash(randbtn);
}

function checkans(idx)
{
    if(userseq[idx] === gameseq[idx])
    {
        if(userseq.length == gameseq.length)
        {
            console.log(`same`);
            setTimeout(levelup , 1000);
        }
    }
    else
    {
        let heighestScore = 0;
        if(heighestScore < level)
        {
            heighestScore = level;
        }
        else
        heighestScore = heighestScore;
        
        h2.innerText = `Game Over! Your score was ${level} \n Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function ()
        {
            document.querySelector("body").style.backgroundColor = "white";
        },200)
        reset();
    }
}

function press()
{
    let btn = this;
    btnFlash(btn);
    userclr = btn.getAttribute("id");
    console.log(userclr);
    userseq.push(userclr);
    console.log(userseq);
    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",press);
}

function reset()
{
    started = false;
    userseq = [];
    gameseq = [];
    level  = 0;
}