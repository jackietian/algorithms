let Stack = function() {
  this.items = [];
}

Stack.prototype.in = function(item) {
  this.items.push(item);
}

Stack.prototype.out = function() {
  return this.items.pop();
}

Stack.prototype.size = function() {
  return this.items.length;
}

let myStack = new Stack();
myStack.in("1");
myStack.in("2");
console.log(myStack.size());
console.log(myStack.out());
console.log(myStack.size());
