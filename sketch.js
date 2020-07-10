let bubbles = [];
let fahood;
let colors =[[255, 0, 0], [255, 94, 0]];

let puffs = [];
let travis;
let square = []; 
let kanye; 
let w = 750;
let h = 750;


class Bubble {
	constructor(x, y, r, img) {
	this.x = x
	this.y = y
	this.xspeed = 4
	this.yspeed = -4
	this.yellowx = this.x
	this.yellowy = this.y + 70
	this.redx = this.x + 50
	this.redy = this.y + 70
	this.bluex = this.x + 50
	this.bluey = this.y
 	this.puffs = random(puffs);
	}

	move() {
		this.x = this.x + random(-2, 2) + this.xspeed;
		this.y = this.y + random(-2, 2) + this.yspeed;
		this.yellowx = this.x;
		this.yellowy = this.y + 70;
		this.redx = this.x + 50;
		this.redy = this.y + 70;
		this.bluex = this.x + 50;
		this.bluey = this.y;
	}

	show() {
		image(this.puffs, this.x, this.y, 50, 70);
	}

	contains(px, py) {		
		if (px >= this.yellowx && px <= this.redx && py <= this.redy 
			&& py >= this.bluey) {
			return true
			} else {
			return false
		}		
	}

	bounce() {
		if (this.x > w || this.x < 0) {
		this.xspeed = this.xspeed * -1;
	    //console.log("ok");
		}
		if (this.y > h || this.y < 0) {
	    this.yspeed = this.yspeed * -1;
	    //console.log("nice")
		}
	}
}

class happy {
	constructor(x, y, w, h, img) {
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	this.img = img
	this.ax = this.x
	this.ay = this.y + 240 
	this.bx = this.x + 240
	this.by = this.y + 240
	this.cx = this.x + 240
	this.cy = this.y
	}

	show() {
		noFill();
		noStroke();
		rect(this.x, this.y, 240, 240);
		image(this.img, this.x, this.y, 240, 240);
	}

	contains(a, b) {
		if (a >= this.x && a <= this.cx && b >= this.y && b <= this.ay) {
			return true
			} else {
			return false
		}
	}
}

function preload() {
 	kanye = loadImage('THICC YE.png');
	for (let i = 0; i < 20; i++) {
		puffs[i] = loadImage('puff.png');
	}
}

function setup() {
	createCanvas(750, 750);
	fahood = createVideo("fahood.MOV")
	fahood.hide()
	kanye = new happy (275, 250, 250, 250, loadImage('THICC YE.png'));
	travis = new happy(275, 250, 240, 240, loadImage('happy travis.png'));
	fahood = createVideo('fahood.MOV');
	fahood.size(100,100)
	fahood.hide()

	for (let i = 0; i < 2; i++) {
		let x = random(w);
		let y = random(h);
		let r = (100);
		let b = new Bubble(x, y, r)
		bubbles.push(b);
	}
	square.push(travis);
}

function draw(){
	background(random(colors))	
	for (let i = 0; i < square.length; i++) {
		travis.show();
	}
	


	calmYE();
	//kanye.show();
	//image(fahood, 10, 10)

	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
		bubbles[i].bounce();

	}
}
function eat() {
	for (let i = 0; i < bubbles.length; i++) {
		console.log("travis ate! :-O")
		if (travis.contains(bubbles[i].x, bubbles[i].y)){
			console.log("travis ate! :-O")
			bubbles.splice(i, 1)
		}
	}
}

function mouseDragged() {
   for (let i = 0; i < bubbles.length; i++) {
     if (bubbles[i].contains(mouseX, mouseY)){
     	bubbles[i].x = mouseX - 25; 
     	bubbles[i].y = mouseY - 35;
        }
    }
    eat()
}

function calmYE() {
	if (bubbles.length <= 0) {
		square.splice(0, 1)
		fahood.show()
		fahood.loop()
		fahood.volume(1)
		kanye.show();
	}
}







