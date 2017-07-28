'use strict';

const createNode = (data=null, next=null)  => 
  {
  data,
  next;
};

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    //if the top of the stack is empty, then the data will be the
    //top of the stack
    if (this.top === null) {
      this.top = createNode(data);
      return;
    }

    //if the top already has something then create a new node
    //add data to the new node
    // have the pointer point to the top 
    const node = createNode(data, this.top);
    this.top = node;
  }

  pop() {
      //in order to remove the top of the stack, you have to point
      //the pointer to the next item and that next item becomes the
      //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

}


const peek = () => {
    //if the top of the stack does not have anything 
    //then the stack is empty
    //otherwise return what's on the top
  if (s.top === null) {
    return null;
  }
  return s.top.data;
};

const display = () => {
    // displays the entire contents of the stack
  let node = s.top;
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
};
    
let s = new Stack();
 
s.push(1);
s.push(2);
s.push('Jamie');
console.log('Top of stack:', peek());

s.pop();
s.push('Saule');
console.log('Top of stack:', peek());

display();