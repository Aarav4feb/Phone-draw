var canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="black"
var lastx,currentx,lasty,currenty

var width=screen.width

var newwidth=screen.width-50

var newheight=screen.height-200

if (width<992) {
    document.getElementById("mycanvas").width = newwidth
    document.getElementById("mycanvas").height = newheight
    document.body.style.overflow="hidden"
}

canvas.addEventListener("touchstart",ts)
function ts(e){
    console.log("Cavas has been touched")
    lastx=e.touches[0].clientX-canvas.offsetLeft
    lasty=e.touches[0].clientY-canvas.offsetTop
}

canvas.addEventListener("touchmove",tm)
function tm(e){
    currentx=e.touches[0].clientX-canvas.offsetLeft
    currenty=e.touches[0].clientY-canvas.offsetTop

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=3;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();

    lastx=currentx 
    lasty=currenty
}
