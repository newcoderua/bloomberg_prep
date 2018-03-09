// class time
// 	def initialize
// 		@time = []
// 	end
//
// 	def call3times
// 		@time.shift() if @time.length == 3
// 		@time.push(time())
//
// 		return false if @time.length < 3
// 		return true if @time[-1] - @time[0] <= 3
// 		return false
// 	end
//
// end

//SQL 
// 1. Given a set of arbitrary float numbers in an SQL table
//  select only the ones that are exactly 4 decimal places
//  SELECT *
//  FROM TABLE
//  WHERE FORMAT(column, 4) = column
//     AND (LENGTH(column) = LENGTH(FORMAT(column, 4)))

// composition vs inheritance
// The big deal is in thinking that one can replace the other, in all cases, or that one is better or worse than the other. Like everything else in software development, there are trade-offs to be made.
//
// Composition is fairly easy to understand - we can see composition in everyday life: a chair has legs, a wall is composed of bricks and mortar, and so on. While the definition of inheritance is simple, it can become a complicated, tangled thing when used unwisely. Inheritance is more of an abstraction that we can only talk about, not touch directly. Though it is possible to mimic inheritance using composition in many situations, it is often unwieldy to do so. The purpose of composition is obvious: make wholes out of parts. The purpose of inheritance is a bit more complex because inheritance serves two purposes, semantics and mechanics.
//this is inheritance
//class Fruit {

    //...
// }

// class Apple extends Fruit {
//
//     //...
// }

//this is composition
//class Fruit {

    //...
// }

// class Apple {
//
//     private Fruit fruit = new Fruit();
//     //...
// }

// 2. Remove extra spaces from a string
// Input:
// var str = "   Hello Geeks . Welcome   to  GeeksforGeeks   .    ";
// Output:
// "Hello Geeks. Welcome to GeeksforGeeks."
// so idea is create to pointers and increment pointer1 and pointer2 accordignly
//it almost works, just need fix for .,!?
// const spacesRemover = (str) => {
//   str = str.split('');
//   var pointer1 = 0;
//   var pointer2 = 0;
//   // console.log(str);
//   while (pointer2 < str.length) {
//     if (str[pointer2] === '.' || str[pointer2] === ',' || str[pointer2] === '!') {
//
//         str[pointer1] = str[pointer2];
//         pointer1++;
//         str[pointer1] = ' ';
//         pointer1++;
//         pointer2++;
//     } else if (str[pointer2] !== ' ') {
//       if (str[pointer2 + 1] === ' ') {
//         str[pointer1] = str[pointer2];
//         pointer1++;
//         str[pointer1] = ' ';
//         pointer1++;
//         pointer2++;
//       } else {
//         str[pointer1] = str[pointer2];
//         pointer1++;
//         pointer2++;
//       }
//
//     } else {
//       pointer2++;
//     }
//   }
//   // console.log(str);
//   return str.join('').slice(0, pointer1 - 1).concat('!');
// }

// 3. Reverse an integer
// var int = -3421; //output -1243
//
// const solution = (int) => {
//   var intStr = int + '';
//   if (intStr[0] === '-') {
//     return parseInt('-'.concat(intStr.split('-').join('').split('').reverse().join('')));
//   } else {
//     return parseInt(intStr.split('').reverse().join(''))
//   }
// }
//
// console.log(solution(int));
//another math solution without transforming into string

// function rev_num(n) {
//   var rev = 0, rem;
//   while (n>0) {
//     rem = n % 10; console.log('rem is', rem);
//     rev = rev * 10 + rem ; console.log('rev is', rev);
//     n = Math.floor(n/10); console.log('n is ', n);
//     console.log('-------------');
//   }
//   return rev;
// }

// console.log(rev_num(123));

// 4. Stack / LIFO / stack of dishes
// A stack is a data structure based on the principle
// Last In First Out. stack is container to hold nodes
// and has two operations — push and pop. The push
// operation is to add nodes into the stack and
// pop operation is to delete nodes from the stack
//  and returns the top most node.
// push: Constant — O(1)
// pop: Constant — O(1)
// peek: Constant — O(1)
// empty: Constant — O(1)
// size: Constant — O(1)
// swap: Constant — O(1)

// Creates a stack
// var Stack = function() {
//     this.count = 0;
//     this.storage = {};
// }
//
// // Adds a value onto the end of the stack
// Stack.prototype.push = function(value) {
//     this.storage[this.count] = value;
//     this.count++;
// }
//
// // Removes and returns the value at the end of the stack
// Stack.prototype.pop = function() {
//     // Check to see if the stack is empty
//     if (this.count === 0) {
//         return undefined;
//     }
//
//     this.count--;
//     var result = this.storage[this.count];
//     delete this.storage[this.count];
//     return result;
// }
//
// // Returns the length of the stack
// Stack.prototype.size = function() {
//     return this.count;
// }


// 5. QUEUE / FIFO
// enqueue: Constant — O(1)
// dequeue: Constant — O(1)
// This Stack is written using the pseudoclassical pattern

// Creates the queue
// var Queue = function() {
//     this.storage = {};
//     this.count = 0;
//     this.lowestCount = 0;
// }


//
// // Adds a value to the end of the chain
// Queue.prototype.enqueue = function(value) {
//     // Check to see if value is defined
//     if (value) {
//         this.storage[this.count] = value;
//         this.count++;
//     }
// }
//
// // Removes a value from the beginning of the chain
// Queue.prototype.dequeue = function() {
//     // Check to see if queue is empty
//     if (this.count - this.lowestCount === 0) {
//         return undefined;
//     }
//
//     var result = this.storage[this.lowestCount];
//     delete this.storage[this.lowestCount];
//     this.lowestCount++;
//     return result;
// }
//
// // Returns the length of the queue
// Queue.prototype.size = function() {
//     return this.count - this.lowestCount;
// }

// 4. Design an address book which we can use to:
//   - Get the info of a person from the name
//   - Get the info of a person from a number

// First solution is using SQL, create table User with info about user(number, DOB etc.)
// Second, right solution - is create hashTable. with keys as a number or name and values as info.
// for names, since they are not unique - we need to store data as an array or
// linked list (to avoid collision). worst case lookup would be 0(n) - if all keys hashed to one bucket.
 // if we implement BST lookup would be O(log n).
// video about hashtables https://www.youtube.com/watch?v=MfhjkfocRR0


// 5. BST
// A binary search tree (BST) is a node-based tree data structure in
//  which each node can have at most two children. A BST supports several
// methods common to any search tree such as contains, insert and
// depthFirstLog, and delete.
//
// A BST is just a tree where each left child has a value that’s less than
//  the the parent’s value, and a right child that has a value that’s greater
//   than or equal to the parent’s value.

// Methods
// BSTs have four main methods:
//
// insert(value): Accepts a value and places in the tree in the correct position.
// contains(value): Accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// depthFirstLog(callback): Accepts a callback and executes it on every value contained in the tree.
// and sometimes contains:
// delete(value): Accepts a value and deletes that specific value within the BST.

// Binary Search
// [1, 2, 3, 4, 5, 6, 9, 14, 65], 14 => output 7
// binary search O(1) memory with tail-call optimization


// const bSearch = (target, array, start, len) => {
//   if (array.length === 0 || len === 0) {
//     return -1;
//   }
//
//   var start = start || 0;
//   var len = len || array.length;
//   var pivot_idx = start + Math.floor(len / 2);
//
//   switch (sort(target, array[pivot_idx])) {
//     case 0:
//       return pivot_idx;
//     case -1:
//       return bSearch(target, array, start, pivot_idx - start);
//     case 1:
//       return bSearch(target, array, pivot_idx + 1, (start + len) - (pivot_idx + 1) )
//   }
// }
//
// const sort = (num1, num2) => {
//   if (num1 < num2) {
//     return -1;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(bSearch(64, [1, 2, 3, 4, 5, 6, 9, 14, 65]));

// Implementing BST
// function BST(value) {
//   this.value = value;
//   this.right = null;
//   this.left = null;
// }
//
//
// BST.prototype.insert = function(value) {
//   if (value < this.value) { //not sure about equal sign
//     if (!this.left) {
//       this.left = new BST(value);
//     } else {
//       this.left.insert(value);
//     }
//   } else if(value >= this.value) {
//     if (!this.right) {
//       this.right = new BST(value);
//     } else {
//       console.log('else');
//       this.right.insert(value);
//     }
//   }
// }

// BST.prototype.contains = function(value) {
//   if (this.value === value) {
//     return true;
//   } else if (value < this.value) {
//     if (this.left === null) {
//       return false;
//     } else {
//       return this.left.contains(value);
//     }
//   } else if (value > this.value) {
//     if (this.right === null) {
//       return false;
//     } else {
//       return this.right.contains(value);
//     }
//   }
// }

// we can traverse a tree, means touch each node in the tree
// using DFS -depth-first search and BFS -breadth ...
// I am not going to implement it, if needed - google it

// Min/Max
// BST.prototype.min = () => {
//   if (!this.left) {
//     return this.value;
//   } else {
//     return this.left.min();
//   }
// }
//
// BST.prototype.max = () => {
//   if (!this.right) {
//     return this.value;
//   } else {
//     return this.right.max();
//   }
// }

// Lowest Common Ancestor of a Binary Search Tree BST
// var lowestCommonAncestor = function(root, node1, node2) {
//   if (root.value > node1.value && root.value > node2.value) {
//     return lowestCommonAncestor(root.left, node1, node2);
//   } else if (root.value < node1.value && root.value < node2.value) {
//     return lowestCommonAncestor(root.right, node1, node2);
//   } else {
//     return root;
//   }
// }

// Find distance between two nodes of a Binary Tree
// Dist(n1, n2) = Dist(root, n1) + Dist(root, n2) - 2*Dist(root, lca)
// 'n1' and 'n2' are the two given keys
// 'root' is root of given Binary Tree.
// 'lca' is lowest common ancestor of n1 and n2
// Dist(n1, n2) is the distance between n1 and n2.

//distance between root and element
// const dist = function(root, node, distance = 0) {
//   if (!root.contains(node)) {
//     return 'BST does not contain this node '
//   }
//
//   if (root.value === node.value) {
//     return distance;
//   } else if (root.value < node.value) {
//     distance++;
//     return dist(root.right, node, distance)
//   } else {
//     distance++;
//     return dist(root.left, node, distance)
//   }
// }

// var isValidBST = function(root) {
//     return validate(root, -Infinity, Infinity);
// };
//
// var validate = function(node, min, max){
//     if(node === null){
//         return true;
//     }
//
//     if(node.value <= min || node.value >= max){
//         return false;
//     }
//     return validate(node.left,min,node.value) && validate(node.right,node.value,max);
// }

 // var a = new BST(50);
 // // console.log(a);
 // var array = [17, 72, 12, 23, 54, 76, 9, 14, 19]
 //
 // for (var i = 0; i < array.length; i++) {
 //   a.insert(array[i]);
 // }

 //isValidBST(a) //true

// var b = new BST(50);
// b.left = new BST(55);
// isValidBST(b) //false

// https://github.com/chihungyu1116/leetcode-javascript leetcode problems
// -----------------------------

// 3SUM
// var threeSum = (nums) => {
//   var result = [];
//   var sortedNums = nums.sort((a,b) => a-b);
//   // console.log(sortedNums);
//   if (!nums.length || nums.length < 3) {
//     return false;
//   }
//
//   for (var a = 0; a < sortedNums.length - 2; a++) {
//     if (a === 0 || sortedNums[a] > sortedNums[a - 1]) { //first check for duplicates
//       var b = a + 1;
//       var c = sortedNums.length - 1;
//
//       while (b < c) { //do not forget it
//
//         var sum = sortedNums[a] + sortedNums[b] + sortedNums[c];
//
//         if (sum === 0) {
//           result.push([sortedNums[a],sortedNums[b],sortedNums[c]]);
//           b++;
//           c--;
//
//           while(b < c && sortedNums[b] === sortedNums[b - 1]) { //second check for dupl
//             b++;
//           }
//
//           while (b < c && sortedNums[c] === sortedNums[c + 1]) { //third check for duplicates
//             c--;
//           }
//         } else if (sum < 0) {
//           b++;
//         } else {
//           c--;
//         }
//       }
//
//     }
//   }
//   return result;
// }

// var s = [-1, 0, 1, 2, -1, -4];
//
// console.log(threeSum(s));


// LRU and HashTable

// / Follow up for problem "Populating Next Right Pointers in Each Node".

// What if the given tree could be any binary tree? Would your previous solution still work?

// Note:

// You may only use constant extra space.
// For example,
// Given the following binary tree,
//          1
//        /  \
//       2    3
//      / \    \
//     4   5    7
// After calling your function, the tree should look like:
//          1 -> NULL
//        /  \
//       2 -> 3 -> NULL
//      / \    \
//     4-> 5 -> 7 -> NULL
// Hide Company Tags Microsoft Bloomberg Facebook
// Hide Tags Tree Depth-first Search
// Hide Similar Problems (M) Populating Next Right Pointers in Each Node



/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

// /**
//  * @param {TreeLinkNode} root
//  * @return {void} Do not return anything, modify tree in-place instead.
//  */
// var connect = function(root) {
//     if(!root) {
//         return;
//     }
//
//     // leftEnd is used to track the current left most node
//     var leftEnd = root;
//
//     while(leftEnd !== null) {
//         var cur = leftEnd;
//         // dummy is used to point to the next level's leftEnd
//         var dummy = new TreeLinkNode(0);
//         var pre = dummy;
//         // for each level we use leftEnd and leftEnd next to achieve level traversal
//         while(cur !== null) {
//             if(cur.left !== null) {
//                 pre.next = cur.left;
//                 pre = cur.left;
//             }
//
//             if(cur.right !== null) {
//                 pre.next = cur.right;
//                 pre = cur.right;
//             }
//
//             cur = cur.next;
//         }
//
//         leftEnd = dummy.next;
//     }
// };


//reverse words in the string
// Input  : s = "geeks quiz practice code"
// Output : s = "code practice quiz geeks"
//
// Input  : s = "getting good at coding needs a lot of practice"
// Output : s = "practice of lot a needs coding at good getting"


// const reverse = (input) => {
//   input = input.split(' ');
//   for (var i = 0; i < Math.floor(input.length / 2); i++) {
//     var temp = input[i];
//     input[i] = input[input.length - 1 - i];
//     input[input.length - 1 - i] = temp;
//   }
//   return input.join(' ');
// }

// ------------------------------------
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
//
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
//   if(l1 === null || l2 === null){
//         return l1 || l2;
//     }
//
//     var result = new ListNode(0);
//     var cur = result;
//     var p = l1;
//     var q = l2;
//     var carry = 0;
//
//     while(p || q){
//         var qval;
//         var pval;
//
//         if(q){
//             qval = q.val;
//             q = q.next;
//         } else {
//             qval = 0;
//         }
//
//         if(p){
//             pval = p.val;
//             p = p.next;
//         } else {
//             pval = 0;
//         }
//
//         var val = qval + pval + carry;
//
//         if(val > 9){
//             carry = 1;
//             val %= 10;
//         } else {
//             carry = 0;
//         }
//
//         cur.next = new ListNode(val);
//         cur = cur.next;
//     }
//
//     if(carry !== 0){
//         cur.next = new ListNode(1);
//     }
//
//     return result.next;
// };
// ---------------------------------
// Find the maximum element in an array which is first increasing and then decreasing
// 1. first solution is iterating O(n)
// 2. binary search O(logn)

// --------------------------
// finding anagrams from a set of strings
// 1. nested loop
// 2. better solution:
// Let us understand the steps with following input Sequence of Words:
//
// "cat", "dog", "tac", "god", "act"
// 1) Create two auxiliary arrays index[] and words[]. Copy all given words to words[] and store the original indexes in index[]
//
// index[]:  0   1   2   3   4
// words[]: cat dog tac god act
// 2) Sort individual words in words[]. Index array doesn’t change.
//
// index[]:   0    1    2    3    4
// words[]:  act  dgo  act  dgo  act
// 3) Sort the words array. Compare individual words using strcmp() to sort
//
// index:     0    2    4    1    3
// words[]:  act  act  act  dgo  dgo
// ---------------------------------
//
// var setZeroes = function(matrix) {
// 	var matrixDic = {};
// 	for(var i = 0;i < matrix.length;i++){
// 		for(var j = 0;j < matrix[0].length;j++){
// 			if(matrix[i][j] === 0){
// 				matrixDic["row_" + i] = 1;
// 				matrixDic["col_" + j] = 1;
// 			}
// 		}
// 	}
//   console.log(matrixDic);
//
// 	for(var i = 0;i < matrix.length;i++){
// 		for(var j = 0;j < matrix[0].length;j++){
// 			if(matrixDic["row_" + i] === 1 || matrixDic["col_" + j] === 1){
// 				matrix[i][j] = 0;
// 			}
// 		}
// 	}
// };
//
// var result = [[1,1,1],
// 						 [1,1,2],
// 						 [1,2,0]];
//
// // console.log(result);
// setZeroes(result);
// // console.log(result);


// ------------------------------------------
// Flatten array: cool solution
// const flatten = (ary) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

// regular
// const flatten = (ary) => {
//   if (ary.length === 1) {
//     return ary;
//   }
//
//   var result = [];
//
//   for (var i = 0; i < ary.length; i++) {
//     if (ary[i] instanceof Array) {
//       result = result.concat(flatten(ary[i]));
//     } else {
//       result.push(ary[i])
//     }
//   }
//   return result;
// }
//
// // console.log(flatten([1, [2, 3]]));

// ------------------------------------------------
// Problem
// Given two sorted integer arrays A and B, merge B into A as one sorted array.
//
// Note:
// You may assume that A has enough space to hold additional elements from B. The number of elements initialized in A and B are m and n respectively.
//
// Example:
// input array 1 : 1,3,5,7
// input array 2 : 2,4,6,8
//
// function merge(A, m, B, n) {
//     var i = m - 1;
//     var j = n - 1;
//     var k = m + n - 1;
//
//     while (k >= 0) {
//         if (j < 0 || (i >= 0 && A[i] > B[j]))
//             A[k--] = A[i--];
//         else
//             A[k--] = B[j--];
//     }
//     return A;
// }

// BTW A[k--] => A[k]; k--;

// ------------------------------------------------
// Traffic
// Twitter has about 300M active users per month. Let's assume we are 10% popular as Twitter and each user generates 1 shortened URL per day. This leads to 30M service calls per month (1M calls/day). If we are going to keep our service for 5 years, our service will generate about 1.8B records.
//
// URL length
// Shortened URL can be combinations of numbers(0-9) and characters(a-Z). If we have shortened URL length as k, it gives us 62^k unique combinations. Let's set k = 6, this will render 56.8B combinations which is far more than what we need.
//
// Database data model
// The table design is simple. We just need original_url and short_url with id. Since id is auto increment, we can simply use it as our hash key to generate shortened URL
//
// function getShortUrl(id, base) {
//   var res = [];
//   var digit;
//   while (id > 0) {
//     digit = id % base;
//     res.push(digitMap(digit));
//     id = Math.floor(id / base);
//   }
//   while (res.length < 6) {
//     res.push(digitMap(0));
//   }
//   return res;
// }
//
// function digitMap(digit) {
//   if (digit <= 9) {
//     return String.fromCharCode(48 + digit);
//   } else if (digit <= 35) {
//     return String.fromCharCode(65 + digit);
//   } else {
//     return String.fromCharCode(97 + digit);
//   }
// }
// // console.log(getShortUrl(345376222, 62))
// --------------------------------


// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Hide Company Tags Amazon LinkedIn Apple Microsoft
// Hide Tags Linked List
// Hide Similar Problems (H) Merge k Sorted Lists (E) Merge Sorted Array (M) Sort List (M) Shortest Word Distance II

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
// var mergeTwoLists = function(l1, l2) {
//     var p1 = l1;
//     var p2 = l2;
//     var fn = new ListNode(-1);
//     var p = fn;
//
//
//     while(p1 && p2){
//         if(p1.val >= p2.val){
//             p.next = p2;
//             p2 = p2.next;
//         } else {
//             p.next = p1;
//             p1 = p1.next;
//         }
//         p = p.next;
//     }
//
//     if(p1){
//         p.next = p1;
//     } else {
//         p.next = p2;
//     }
//
//     return e.next;
// };
------------------------------
// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
//
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
//
//
// Example:
// Given 1->2->3->4->5->NULL,
// return 1->3->5->2->4->NULL.
//
//
// Note:
// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...
//
//
// Credits:Special thanks to @DjangoUnchained for adding this problem and creating all test cases.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
//  */
// var oddEvenList = function(head) {
//     if (head === null || head.next === null || head.next.next === null) {
//         return head;
//     }
//     var p_odd = head, p_even = head.next, head_of_even = p_even;
//     while(p_even !== null &&  p_even.next !== null ) {
//         p_odd.next = p_even.next ;
      // 		p_even.next = p_odd.next.next ;
      //
      // 		p_odd = p_odd.next ;
      // 		p_even = p_even.next;
      //     }
//     p_odd.next = head_of_even;
//     return head;
// };
// -----------------------------
// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

// Note: The input string may contain letters other than the parentheses ( and ).

// Examples:
// "()())()" -> ["()()()", "(())()"]
// "(a)())()" -> ["(a)()()", "(a())()"]
// ")(" -> [""]
// Credits:
// Special thanks to @hpplayer for adding this problem and creating all test cases.

// Hide Company Tags Facebook
// Hide Tags Depth-first Search Breadth-first Search
// Hide Similar Problems (E) Valid Parentheses


//
// function isValid(s) {
//     var count = 0;
//
//     for(var i = 0; i < s.length; i++) {
//         if(s[i] === '(') {
//             count++;
//         } else if(s[i] === ')') {
//             count--;
//         }
//
//         if(count < 0) {
//             return false;
//         }
//     }
//
//     return count === 0;
// }
//
// var removeInvalidParentheses = function(s) {
//     var queue = [];
//     queue.push(s);
//     var visited = {};
//     var res = [];
//     var found = false;
//
//
//     // breadth first search since we are looking for the minimum changes
//     while(queue.length > 0) {
//         s = queue.shift();
//
//         // things stored in the queue represent the same level (same number of changes)
//         // once we found a valid one, we should not look further into the next level (by setting found to true)
//         if(isValid(s)) {
//             res.push(s);
//             found = true;
//         }
//
//         if(found) {
//             continue;
//         }
//
//         // if nothing found, then loop through the entire string and remove one of the parenthesis.
//         for(var i = 0; i < s.length; i++) {
//             if(s[i] !== '(' && s[i] !== ')') {
//                 continue;
//             }
//
//             var newS = s.substring(0,i) + s.substring(i + 1);
//
//             if(!visited[newS]) {
//                 visited[newS] = true;
//                 queue.push(newS);
//             }
//         }
//     }
//
//     return res;
// };
// -------------------------------
// convert int into str eng and indian style
// const strRepres = (int, style) => {
//
//   if (style === "EN") {
//     var set = new Set([3, 6, 9, 12, 15, 18, 21])
//   } else {
//     //indian style
//     var set = new Set([3, 5, 7, 9, 11, 13, 15])
//   }
//
//   var str = '' + int;
//   var res = '';
//   var j = 0;
//   for (var i = str.length - 1; i >= 0; i--) {
//     var cur = str[i];
//     if (style === 'EN') {
//       if (set.has(j)) {
//         res = cur + ','+ res;
//         j++;
//       } else {
//         res = cur + res;
//         j++
//       }
//     } else {
//       if (set.has(j)) {
//         res = cur + ','+ res;
//         j++;
//       } else {
//         res = cur + res;
//         j++
//       }
//     }
//
//   }
//   return res;
// }
//
// console.log(strRepres(1000000, "IND"));
///////////////////////////////////////////////////
//given an empId return all employees reporting to him directly or indirectly
// var hier = { 1: [2, 3, 4],
//   3: [5, 6, 7],
//   5: [8, 9, 10] }
//
// const employeeManager = (hier, empId) => {
//   var result = [];
//   if (hier[`${empId}`]) {
//     result = result.concat(hier[`${empId}`]);
//   for (var i = 0; i < hier[`${empId}`].length; i++) {
//     result = result.concat(employeeManager(hier, hier[`${empId}`][i]))
//   }
// }
//   return result;
// }
/////////////////////////////////////////////////
//Write a function that return true/false if it had been called more than 3 times within 3 seconds
//it is a case of debounce function

// var arr = [];
//
// var func = () => {
//   var a = new Date();
//   if (arr.length >= 4) {
//     arr.shift();
//     arr.push(a.getTime());
//   } else {
//     arr.push(a.getTime());
//   }
//   //heavy logic
//   for (var i = 0; i < 10000000; i++) {
//
//   }
//   if (arr[arr.length - 1] - arr[0] < 3000 && arr.length > 3) {
//     return true;
//   } else {
//     return false;
//   }
// }
