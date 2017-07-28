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


const peek = (stack) => {
    //if the top of the stack does not have anything 
    //then the stack is empty
    //otherwise return what's on the top
    if (stack.top === null) {
        return null;
    }
    return stack.top.data;
};

const display = () => {
    // displays the entire contents of the stack
    let node = stack.top;
    while (node !== null) {
        console.log(node.data);
        node = node.next;
    }
};
    
// let stack = new Stack();
 
// s.push(1);
// s.push(2);
// s.push('Jamie');
// console.log('Top of stack:', peek());//Jamie

// s.pop();//Jamie was popped out....orphan...sad
// s.push('Saule');
// console.log('Top of stack:', peek());//Saule

// display();//Saule, 2, 1




// Palindromes

// A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.

// Write a function that takes a string of letters and returns true or false to determine whether it is palindromic. For example:

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    //s="dad";
    for (let i=0; i < s.length; i++){
        stack.push(s.charAt(i));
    }
    let reverse = '';
    while (stack.top !== null){
        reverse += stack.pop();
    }
    if (reverse === s) {
        return true;
    }
    return false;
  //
}

// true, true, true
// console.log(is_palindrome("dad"));
//console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome('cat'));
// console.log(is_palindrome('1001'));


// Matching parentheses in an expression

// A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns the position in the expression where a parenthesis is missing or incorrect.

// For version 1, the parentheses you need to consider are ( and ). Finding a close parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

//if we have (1 + 2 * 3 ....then we want to know that there is a missing ')', AND, if there is 1 + 2 *3)...that there is no '('.

const matchingParenthesis = (str) => {
  //str = '(1 + 2 * 3';
    let stack = new Stack();

    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i)=== '('){
            stack.push(str.charAt(i));
        } else if (str.charAt(i)===')'){
          if (peek(stack)==='('){
            stack.pop();
        } else {
            return 'open paran is missing';
        }
      }
    }
    if (peek(stack)===null) {
        return 'everything matches';
    } else {
        return 'closed paran is missing';
    }
};

console.log(matchingParenthesis('(1 + 2 * 3'));
console.log(matchingParenthesis('1 + 2 * 3)'));
console.log(matchingParenthesis('(1 + 2 * 3)'));


// Extension exercise: Recognize three pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!
//str = (1 + [2)]

const expectedParenthesis = (str) => {
    let stack = new Stack;

  //note if there is a situation like '{hello}'

    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === '(' || str.charAt(i) === '[') {
            stack.push(str.charAt(i));
        } else if (str.charAt(i) === ')') {
          if(peek(stack) === '(') {
            stack.pop();
        } else if (peek(stack) === '[') {
            return 'unclosed bracket';
        } else {
            return 'opening bracket is missing';
        }
      } else if (str.charAt(i) === ']') {
        if(peek(stack) === '[') {
            stack.pop();
        } else if (peek(stack) === '(') {
            return 'unclosed bracket';
        } else {
            return 'opening square bracket is missing';
        }
    }
    }

    if(peek(stack) === null) {
        return 'Everything matches';
    } else {
        return 'closed bracket is missing';
    }
    //return "Expected ')' but instead saw '['"
};

// console.log(expectedParenthesis('(())'));
// console.log(expectedParenthesis('(()))'));
// console.log(expectedParenthesis('((())'));
// console.log(expectedParenthesis('([)]'));
// console.log(expectedParenthesis('([])'));


// Extension extension exercise: Also recognize two types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.

