/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
function createInputElm(lab,type="text"){
  let label = document.createElement("label")
  label.innerText = lab;
  let input = document.createElement("input")
  input.setAttribute("type", type);
  label.append(input);
  
  return label
}

// TEST
console.log(createInputElm('Anish'))  ; //<label>Your name: <input type="text"></label>
console.log(createInputElm(20, 'number'))  ; //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
function createInputElm(label,type = "text"){
  let html =  `<label>${label} <input type=${type}></label>`
  return html
}

// TEST
console.log(createInputElm('Anish')); //<label>Your name: <input type="text"></label>
console.log(createInputElm('20',"number")) ; //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(array){
  // let ul = document.createElement("ul")
  // array.forEach(element => {
  //   let li = document.createElement("li");
  //  li.innerText = element;
  //  ul.append(li)
  // });
  // return ul;
  
}

// TEST
console.log(createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']))
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(array = []){
  let html = `<ul>${array.map(ele => `<li>${ele}</li>`).join()}</ul>`
  return html;
}


// TEST
// createTodoList([
//   { name: 'Learn DOM', isDone: false },
//   { name: 'Learn JS', isDone: true },
// ]);
// createTodoList([
//   { name: 'Learn DOM', isDone: false },
//   { name: 'Learn React', isDone: true },
//   { name: 'Learn JS', isDone: true },
// ]);
