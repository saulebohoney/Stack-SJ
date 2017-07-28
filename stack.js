'use strict';

function createNode (data=null, next=null) {
  return {
    data,
    next
  };
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    //if the top of the stack is empty, then the data will be the
    //top of the stack
    if (this.top === null) {
      this.top = createNode(data);
      return this.top;
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
console.log('Top of stack:', peek());//Jamie

s.pop();//Jamie was popped out....orphan...sad
s.push('Saule');
console.log('Top of stack:', peek());//Saule

display();//Saule, 2, 1

// Palindromes

// A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.

// Write a function that takes a string of letters and returns true or false to determine whether it is palindromic. For example:

// function is_palindrome(s) {
//     s = s.toLowerCase().replace(/[^a-z]/g, "");
//     // your code goes here
// }

// // true, true, true
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));