/*
file: main.js
contributers: Austin Packer

main() goes here at the bottom of the file.
As well as all the functions used in main()

*/


function drawPoint(ctx, px, py, dx, radius)
{
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#8ED6FF"; // color
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black"; // color
        ctx.stroke();
}


// Main part of program
function runSystem(ctx, state, r, numberOfPoints, dx, radius)
{
    for (var i = 1; i < numberOfPoints; i++)
    {
        state = r * (1 - state) * state;
        drawPoint(ctx, i, state, dx, radius);
    }
}


function drawLine(px1, py1, px2, py2, ctx)
{
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(px1, py1);
	ctx.lineTo(px2, py2);
	ctx.closePath();
	ctx.stroke();
}


function drawAxes()
{
}


function drawLabel(label, px, py, ctx)
{
		
	ctx.strokeStyle = "#000000";
	ctx.strokeText(label, px, py);
}


function drawLabels()
{
}


function main()
{

	// get the canvas element using the DOM
	var canvas = document.getElementById('myCanvas');

	// Make sure we don't execute when canvas isn't supported
	if (canvas.getContext)
	{
        /// INITIALIZE ALL VARIABLES HERE ///
        
		var numberOfPoints = document.getElementById('iterations');
		var ctx = canvas.getContext('2d');
        var ctxWidth = ctx.width; // 830
		var ctxHeight = ctx.height; // 500
        var state = document.getElementById('initialState');
        var r = document.getElementById('R');

        var radius = 1;

        var graphWidth;
        var graphHeight;
        var dx = graphWidth / numberOfPoints;
        
		// validate forms
		//if (!check_forms(fwallLen))
		//{
		//	return false;
		//}

		// Draw stuff
        ctx.clearRect(0, 0, ctxWidth, ctxHeight);
        drawAxes();
        drawLabels();
        runSystem(ctx, state, r, numberOfPoints, dx, radius);
  	} 
	else 
	{
  		alert('You need google chrome.');
  	}
}


