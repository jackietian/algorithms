function Queue() {
  this.items = [];
  this.in = (val) => this.items.push(val);
  this.out = (val) => this.items.shift(val);
  this.size = () => this.items.length;
}

// binary search tree constructor function
function BST(val) {
  this.value = val;
  this.right = null;
  this.left = null;
}

// left node is not bigger than the value, the right node is bigger is than the value
BST.prototype.insert = function(val) {
  if( val <= this.value ) {
    if(!this.left) {
      this.left = new BST(val);
    } else {
      this.left.insert(val);
    }
  } else if( val > this.value ) {
      if(!this.right) {
        this.right = new BST(val);
      } else {
        this.right.insert(val);
      }
  }
}

// get the min value
BST.prototype.min = function() {
  if(!this.left) {
    return this.value;
  } else {
    this.left.min();
  }
}

BST.prototype.max = function() {
  if(!this.right) {
    return this.value;
  } else {
    return this.right.max();
  }
}

let log = (val) => {
  console.log(val);
}

// Breath First Traversal - QUEUE(FIFO)
BST.prototype.breathFirstTraversal = function() {
  let queue = new Queue();
  queue.in(this);
  while(queue.size() > 0) {
    let treeNode = queue.out();
    log(treeNode.value);
    if(treeNode.left) queue.in(treeNode.left);
    if(treeNode.right) queue.in(treeNode.right);
  }
}

// Depth first Traversal - recursion
BST.prototype.depthFirstTraversal = function(order) {
  if (this.order === 'pre-order') log(this.value)
  if (this.left) this.left.depthFirstTraversal(order)
  if (order === 'in-order') log(this.value)
  if (this.right) this.right.depthFirstTraversal(order)
  if (order === 'post-order') log(this.value)
}

BST.prototype.contains = function(value){
  if(this.value === value) { return true;}
  if(value < this.value) {
    if(!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }else if( value > this.value ) {
    if(!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
}

let bst = new BST(50);
bst.insert(60);
bst.insert(30);
bst.insert(70);
bst.insert(20);


//https://www.youtube.com/watch?v=9RHO6jU--GU
// Tree Traversal
//               F
//           D       J
//         B  E    G  K
//       A  C       I
//                 H
//    - Breath first
//       F D J B E G K A C I H
//    - Depth first
//      <root><left><right> - Preorder - F D B A C E J G D H K
//      <left><root><right> - Inorder  - A B C D E F G H I J K
//      <left><right><root> - Postorder - A C B E D H I G K J F
//
