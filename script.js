const canvas=document.getElementById("mycanvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const ctx=canvas.getContext("2d");
let mouse={
    x:undefined,
    y:undefined,
};

let hex=[
    "0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",
];
function randomColor(){
    let color="#";
    for(let i=0;i<6;i++){
color+=hex[Math.floor(Math.random()*16)];

    }
    return color;
}
canvas.addEventListener("click",(e)=>
{
    mouse.x=e.x;
    mouse.y=e.y;
    drawCircle();
    console.log(randomColor());
});
function drawCircle(){
    ctx.beginPath();//hold the brush
    ctx.lineWidth=3;
    ctx.arc(mouse.x,mouse.y,50,0,Math.PI*2);
    ctx.fillStyle=randomColor();
    ctx.fill();
    ctx.strokeStyle=randomColor();
    ctx.stroke();

}
drawCircle();