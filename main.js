
var canvas = new fabric.Canvas('myCanvas');
var block_y=1;
var block_x=1;

var block_image_width = 350;
var block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top : block_y,
	left : block_x
	});
	canvas.add(block_image_object);
	}); 
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image('rr1.png');
		console.log("R");
	}
	if(keyPressed == '71')
	{
		new_image('gr.png');
		console.log("G");
		block_x = 200;
	}
	
	if(keyPressed == '89')
	{
		new_image('yr.png');
		console.log("y");
		block_x =350;
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		new_image('pr.png');
		console.log("p")
		block_x = 600;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		new_image('br.png');
		console.log("b");
		block_x = 700;
	// upload blue ranger
	}
	
}

