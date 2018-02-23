function Queue() {
  this.items = [];
}

Queue.prototype.in = function(val) {
  this.items.push(val);
}

Queue.prototype.out = function() {
  return this.items.shift();
}

Queue.prototype.size = function() {
  return this.items.length;
}

let myQueue = new Queue();
myQueue.in('1');
myQueue.in('2');
console.log(myQueue.size());
console.log(myQueue.out());
console.log(myQueue.size());
