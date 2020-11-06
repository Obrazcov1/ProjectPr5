let canvas = document.getElementById('draw');
let Pr = document.getElementById('Polz');
let Co = document.getElementById('Color');
context = canvas.getContext("2d");
let clickX = new Array();
let clickY = new Array();
let clickDrag = new Array();
let paint;
let mouseX;
let mouseY;

//розкоментуйте якщо використовуєте layout з практичною
//необхідно отримати додактовий offset
let offsetLeft = canvas.parentElement.parentElement.offsetLeft;
let offsetTop  = canvas.parentElement.parentElement.offsetTop;


canvas.addEventListener('mousedown',function (e){
   //mouseX = e.pageX - this.offsetLeft;
   //mouseY = e.pageY - this.offsetTop;

   mouseX = e.pageX - this.offsetLeft - offsetLeft;
   mouseY = e.pageY - this.offsetTop - offsetTop; 
   paint = true;
   addClick(mouseX, mouseY);
   redraw();
});
canvas.addEventListener('mousemove',function (e){
   if(paint){
       //addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);


       addClick(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop, true);

       redraw();
   }
});
canvas.addEventListener('mouseup',function (e){
   paint = false;
});
canvas.addEventListener('mouseleave',function (e){
   paint = false;
});
Pr.addEventListener('change', function()
{
	context.lineWidth = this.value;
}, false);

Pr.addEventListener('input', function()
{
	context.lineWidth = this.value;
}, false);
Co.addEventListener('change', function()
{
	let a = this.value;
	if(a == 0)
	{
		context.strokeStyle="#FF0000"
	}
	if(a == 1)
	{
		context.strokeStyle="#004DFF"
	}
	if(a == 2)
	{
		context.strokeStyle="#FF8000"
	}
	if(a == 3)
	{
		context.strokeStyle="#000000"
	}
	if(a == 4)
	{
		context.strokeStyle="#55AAFF"
	}
	if(a == 5)
	{
		context.strokeStyle="#FFFF00"
	}
}, false);

Co.addEventListener('input', function()
{
	let a = this.value;
	if(a == 0)
	{
		context.strokeStyle="#FF0000"
	}
	if(a == 1)
	{
		context.strokeStyle="#004DFF"
	}
	if(a == 2)
	{
		context.strokeStyle="#FF8000"
	}
	if(a == 3)
	{
		context.strokeStyle="#000000"
	}
	if(a == 4)
	{
		context.strokeStyle="#55AAFF"
	}
	if(a == 5)
	{
		context.strokeStyle="#FFFF00"
	}
}, false);

function addClick(x, y, dragging)
{
   clickX.push(x);
   clickY.push(y);
   clickDrag.push(dragging);
}
function Clear()
{
	clickX.splice(0, clickX.length);
	clickY.splice(0, clickY.length);
	clickDrag.splice(0, clickDrag.length);
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
function redraw(){
   context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

   //context.strokeStyle = "#df4b26";
   context.lineJoin = "round";
   //context.lineWidth = 5;

   for(var i=0; i < clickX.length; i++) {
       context.beginPath();
       if(clickDrag[i] && i){
           context.moveTo(clickX[i-1], clickY[i-1]);
       }else{
           context.moveTo(clickX[i]-1, clickY[i]);
       }
       context.lineTo(clickX[i], clickY[i]);
       context.closePath();
       context.stroke();
   }
}


