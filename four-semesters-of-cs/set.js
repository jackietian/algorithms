class Set {
  constructor() {
    this.store = {};
  }
  add(value) {
    if(!this.has(value)) {
      this.store[value] = value;
      return this.store[value];
    }
    return null;
  }
  has(value) {
    return !!this.store[value];
  }
  remove(value) {
    delete this.store[value];
  }
  getAll() {
    return this.store;
  }
}

let newSet = new Set();
console.log(newSet.add(1)); // 1
console.log(newSet.add(2)); // 2
console.log(newSet.add(1)); // null
console.log(newSet.getAll()); // {1: 1, 2: 2}
