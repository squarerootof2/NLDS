/*
file: main.js
contributers: Austin Packer

main() goes here at the bottom of the file.
As well as all the functions used in main()

*/

"use strict";

function drawPoint(ctx, px, py, dx, radius)
{
    ctx.beginPath();
    ctx.arc((px*dx), py, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#8ED6FF";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
    drawLabel("drawPoint", 10, 50,ctx);
}


// Main part of program
function runSystem(ctx, state, r, numberOfPoints, dx, radius, graphHeight)
{
    for (var i = 1; i < numberOfPoints; i++)
    {
        state = r * (1 - state) * state;
        drawPoint(ctx, i, (graphHeight - state), dx, radius);
    }
    drawLabel("runSystem", 10, 40,ctx);
    drawLabel(numberOfPoints, 10, 60,ctx);
    drawLabel(state, 10, 70,ctx);
    drawLabel(r, 10, 80,ctx);
    drawLabel(dx, 10, 90,ctx);
    drawLabel(radius, 10, 100,ctx);
    drawLabel(graphHeight, 10, 110,ctx);
}


function drawLine(px1, py1, px2, py2, ctx)
{
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(px1, py1);
	ctx.lineTo(px2, py2);
	ctx.closePath();
	ctx.stroke();
    drawLabel("drawLine", 10, 20,ctx);
}


function drawAxes(ctx, ctxWidth, ctxHeight, graphWidth, graphHeight)
{
    var side = (ctxWidth - graphWidth) / 2;
    var top = (ctxHeight - graphHeight) / 2;
    var bot = top;
    drawLine(side, top, side, (ctxHeight - bot), ctx);
    drawLine(side, (ctxHeight - bot), (ctxWidth - side), (ctxHeight - bot), ctx);
    drawLabel("drawAxes", 10, 10,ctx);
}


function drawLabel(label, px, py, ctx)
{
		
	ctx.strokeStyle = "#000000";
    ctx.font="10px Arial";
	ctx.fillText(label, px, py);
}


function drawLabels(ctx)
{
    drawLabel("drawLabels", 10, 30,ctx);
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

        var graphWidth = ctxWidth - 100; // make room for axes and labels.
        var graphHeight = ctxHeight - 100;
        var dx = (graphWidth / numberOfPoints);

		// Draw stuff
        ctx.clearRect(0, 0, ctxWidth, ctxHeight);
        drawAxes(ctx, ctxWidth, ctxHeight, graphWidth, graphHeight);
        drawLabels(ctx);
        runSystem(ctx, state, r, numberOfPoints, dx, radius, graphHeight);
        
        drawLabel(graphHeight, 10, 120,ctx);
        drawLabel(graphWidth, 10, 130,ctx);
        drawLabel(ctxWidth, 10, 140,ctx);
        drawLabel(r, 10, 150,ctx);
    } 
	else 
	{
        alert('You need google chrome.');
    }
}


