var add = function(a, b) {
  return a + b;
};

var Shape = function(a,b) {
  this.a = a;
  this.b = b;
};

var s = new Shape(10,12);

console.log(add.call(s, s.a, s.b));

//using call to chain contructors for an object

function Product(name, price) {
	this.name = name;
	this.price = price;

	return this;
}

function Food(name, price) {
	Product.call(this, name, price);
	this.category = 'food';
}

Food.prototype = Object.create(Product.prototype);
Food.prototype.contructor = Food; //Reset the contructor from Product to Food

function Toy(name, price) {
	Product.call(this, name, price);
	this.category = 'toy';
}

Toy.prototype = Object.create(Product.prototype);
Toy.prototype.contructor = Toy;
var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);


