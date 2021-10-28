canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty"; 
var last_position_x;
var last_position_y;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
   colour= document.getElementById("colour").value ;
   lineWidth= document.getElementById("Line_width").value ;
   mouseEvent="clicked";
   
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="up";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="leave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_mouseX=e.clientX-canvas.offsetLeft;
    current_position_mouseY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="clicked"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=lineWidth;
        ctx.moveTo(last_position_x,last_position_y);
        ctx.lineTo(current_position_mouseX, current_position_mouseY);
        ctx.stroke(); 
    } 
    last_position_x=current_position_mouseX;
    last_position_y=current_position_mouseY;

}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
var last_touch_X;
var last_touch_Y;
var width=screen.width;

new_width=screen.width-70;
new_height=screen.height-300;
if(width<992)
{
    document.getElementById("my_canvas").width=new_width;
    document.getElementById("my_canvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    colour=document.getElementById("colour").value;
    lineWidth=document.getElementById("Line_width").value;
    last_touch_X=e.touches[0].clientX-canvas.offsetLeft;
    last_touch_Y=e.touches[0].clientY-canvas.offsetTop;

}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_touchx=e.touches[0].clientX-canvas.offsetLeft;
    current_position_touchy=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle= colour;
    ctx.lineWidth=Line_width;
    ctx.moveTo(last_touch_X, last_touch_Y);
    ctx.lineTo(current_position_touchx, current_position_touchy);
    ctx.stroke();
    last_touch_X=current_position_touchx;
    last_touch_Y=current_position_touchy;
}










