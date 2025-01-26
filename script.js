//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	getwidth(){
		return this.width;
	}
	getheight(){
		return this.height;
	}
	getArea(){
		return (this.width)*(this.height);
	}
}

class Square extends Animal {
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		return 4*(this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
