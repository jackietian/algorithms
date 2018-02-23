function Building(floors) {
  // this = {};
  this.what = "building";
  this.floors = floors;
  //this.countFloors = ...
  // return this;
}

var myHouse = new Building(3);
// => {what: "building", floors: 3}

// prototype is just an object
Building.prototype.countFloors = function() {
  console.log('I have', this.floors, 'floors');
}

myHouse.countFloors(); // => I have 3 floors

function Tree(apples) {

}

Tree.prototype.addNode = function(node) {

}
