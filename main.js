/*
file: main.js
contributers: Austin Packer

main() goes here at the bottom of the file.
As well as all the functions used in main()

*/


function drawDot(px, py, radius, color)
{
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#8ED6FF"; // color
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black"; // color
        
        ctx.stroke();
};

function plot(arr)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    
    ctx.stroke();
}

// Main part of program
function runSystem(listLength, initialState)
{
    var r = 3.5; // 0 < r < 8
    var n = listLength;
    var states = new Array(initialState);
    
    for (var i = 0; i < n; i++)
    {
        states[i+1] = r * (1 - states[i]) * states[i];
    }
    plot(states);
}


////////////
// CANVAS //
////////////



// TODO do not convert all variables to integers
function drawLine(px1, py1, px2, py2, color, canvas)
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
function drawLabel(label, px, py, color, canvas)
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
		var ctxWidth = 640;
		var ctxHeight = 480;

		// get variables from forms
		// add inches to these?
		var fwallLen = document.overall.elements["wallLen"].value;
		var cpHoG = document.overall.hipORgable

		if (cpHoG[1].checked)
		{
			HorG = "gable";
		}

		ctx.clearRect(0, 0, ctxWidth, ctxHeight);

		// validate forms
		//if (!check_forms(fwallLen))
		//{
		//	return false;
		//}

		// Draw stuff
        
        
        
  	} 
	else 
	{
  		alert('You need google chrome.');
  	}
}



