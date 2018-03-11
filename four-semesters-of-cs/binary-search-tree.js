class Node {
  constructor(value=null, left=null, right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }

  serialize() {
    let ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    return ans;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if(!this.root) {
      this.root = new Node(value);
    }else {
      let current = this.root;
      while(true) {
        if(current.value > value) {
          //go left
          if(current.left) {
             current = current.left;
          }else {
            current.left= new Node(value);
            break;
          }
        }else {
          //go right
          if(current.right) {
            current = current.right;
          }else {
            current.right= new Node(value);
            break;
          }
        }
      }
    }
  }

  serialize() {
    return JSON.stringify(this.root.serialize());
  }
}

let bst = new Tree();
bst.add(5);
bst.add(4);
bst.add(3);
bst.add(6);
console.log(bst.serialize()); //{"value":5,"left":{"value":4,"left":{"value":3,"left":null,"right":null},"right":null},"right":{"value":6,"left":null,"right":null}}
