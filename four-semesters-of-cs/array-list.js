class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  add(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    let popValue = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return popValue;
  }
  indexOf(value) {
    for(let key in this.data) {
      if(this.data[key] === value) {
        return key;
      }
    }
    return null;
  }
  delete(index) {
    const ans = this.data[index];
    this._collapseTo(index);
    return ans;
  }

  _collapseTo(index) {
    debugger;
    for(let i = index; i< this.length ; i++) {
      debugger;
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
  serialize() {
    console.log(this.data);
  }
}

let arr = new ArrayList();
arr.add(0);
arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.serialize();
/*
Object {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4
}
*/
console.log(arr.delete(3)); // 3
arr.serialize();
/*
Object {
  0: 0,
  1: 1,
  2: 2,
  3: 4
}
*/
