/*
file: main.js
contributers: Austin Packer

main() goes here at the bottom of the file.
As well as all the functions used in main()

*/


function drawDot()
{
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = 2;

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = "#8ED6FF";
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = "black";
        context.stroke();
};


function check_forms(fwallLen, fsideLen, fwallHt, roofPitch)
{
	if (check_num(fwallLen) == false)
	{
		alert("Please only enter whole positive numbers.");
		return false;
	}
	else if (fwallLen < 4)
	{
		alert("Must be larger than 4 ft.");
		return false;
	}

	else return true;
}


////////////
// CANVAS //
////////////



// TODO do not convert all variables to integers
function apDrawLine(px1, py1, px2, py2, color, canvas)
{
	
	if (color == "red")
	{
		canvas.strokeStyle = "#ff0000";
	}
	else if (color == "green")
	{
		canvas.strokeStyle = "#00ff00";
	}

	canvas.beginPath();
	canvas.moveTo(px1, py1);
	canvas.lineTo(px2, py2);
	canvas.closePath();
	canvas.stroke();
}


// TODO do not convert all variables to integers
function apDrawString(label, px, py, color, canvas)
{
	px = Math.round(px);
	py = Math.round(py);
		
	if (color == "red")
	{
		canvas.strokeStyle = "#ff0000";
	}
	else if (color == "green")
	{
		canvas.strokeStyle = "#00ff00";
	}
	else
	{
		canvas.strokeStyle = "#000000";
	}

	canvas.strokeText(label, px, py);
}



////////////
//  MAIN  //
////////////


// TODO List
// is it a good idea to declare so many variables in a function that is called so many times?
// maybe instead use smaller functions that update one or two variables at a time.

function main()
{

	// get the canvas element using the DOM
	var c = document.getElementById('myCanvas');

	// Make sure we don't execute when canvas isn't supported
	if (c.getContext)
	{

		// use getContext to use the canvas for drawing
		var ctx = c.getContext('2d');

		// initialize variables
		var pcanvasWidth = 640;
		var pcanvasHeight = 480;

		// get variables from forms
		// add inches to these?
		var fwallLen = document.overall.elements["wallLen"].value;
		var cpHoG = document.overall.hipORgable

		if (cpHoG[1].checked)
		{
			HorG = "gable";
		}

		ctx.clearRect(0, 0, pcanvasWidth, pcanvasHeight);

		// validate forms
		if (!check_forms(fwallLen))
		{
			return false;
		}

		// Draw stuff
        
        
        
  	} 
	else 
	{
  		alert('You need google chrome.');
  	}
}



