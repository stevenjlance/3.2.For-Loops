
function setup() {
  createCanvas(600, 600);
  
}

function draw() {
	background(200);
	text(mouseX + ", " + mouseY, 20,20)

	// Code Along Challenge #2
	for(var x = 100; x < width; x += 100){
		fill("white")
		ellipse(x, 60, 40, 40)
	}
	// Challenge #3
	for(var x = 0; x < width; x += 100){
		fill(0,255,0);
		ellipse(x,120,40,40);
		fill(255,0,0);
		ellipse(x,200,40,40);
	}
	// Challenge #4
	for(var x =0; x < width; x += 100){

		fill(255,0,0);
		ellipse(x,280,40,40); 
		fill(0,255,0);
		ellipse(x,280,30,30);
		fill(0,0,255);
		ellipse(x,280,20,20)
		fill(255,0,255);
		ellipse(x,280,10,10)
	}
	// Challenge #5
	for(var x = 0; x <= width/2; x += 50){
		fill(255,0,0);
		ellipse(x,360,40,40);
		fill(0,255,0);
		ellipse(x,360,30,30);
		fill(0,0,255);
		ellipse(x,360,20,20)
		fill(255,0,255)
		ellipse(x,360,10,10)
	}
	// Challenge #6
  for(var y = 0; y < height+1; y += 100){
		fill("mistyrose")
		ellipse(width/2, y, 50, 50)
	}

	
}





// =============== FOR LOOPS PRACTICE ====================
// 1. CODE-ALONG: Log out every number from 1-20
for(let i = 0; i < 21; i ++){
	console.log(i)
}

// 2. Log out every number from 50-100
for(let i = 50; i < 101; i ++){
	console.log(i)
}

// 3. Log out every even number up to 100
for(let i = 0; i < 101; i += 2){
	console.log(i)
}

// 4. Log out every multiple of 2 and every multiple of 3 up to 100
for(let i = 0; i < 101; i++)
{
	if(i % 2 == 0)
	{
		console.log(i)
	}
	else if(i % 3 == 0)
	{
		console.log(i)
	}
}

// 5. Log out the sum of every number under 1000
let total = 0
for(let i = 0; i < 1000; i++)
{
	total += i
}
console.log(total)

// 6. Log out the first 10 digits of the fibbonacci series.
let firstNum = 0
let secondNum = 1
console.log(firstNum)
console.log(secondNum)
for(let i = 0; i < 10; i++){
	let temp = firstNum + secondNum
	firstNum = secondNum
	secondNum = temp
	console.log(secondNum)
}