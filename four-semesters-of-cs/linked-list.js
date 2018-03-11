class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  push(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    }else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }

  pop() {
    if(!this.head) return null;
    if(this.head === this.tail) {
      let ans = this.tail.value;
      this.head = this.tail = null;
      this.length--;
      return ans;
    }

    let last2nd = this._find2ndLast();
    let ans = this.tail.value;
    this.tail = last2nd;
    last2nd.next = null;
    this.length--;
    return ans;
  }

  _find2ndLast() {
    let ans = null;
    let current = this.head;
    while(current) {
      if(current.next === this.tail) {
        ans = current;
      }
      current = current.next;
    }
    return ans;
  }

  serialize() {
    let current = this.head;
    let result = [];
    while(current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result);
  }
}

let list = new LinkedList();
list.push(0);
list.push(1);
list.serialize(); // [0,1]
list.pop();
list.serialize(); // [0]
