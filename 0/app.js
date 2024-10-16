// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// // Selectors
// console.log(document.getElementById("main-heading"));
// console.log(document.getElementsByClassName('list-items'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.querySelector("#main-heading"));

// DOM Manipulation

// // Styling Elements
// // inline styling
// const title = document.querySelector("#main-heading");
// title.style.color = "red";
// console.log(title);

// inline styling will not apply to multiple items at once.
// we need to apply it individually
// var listItems = document.querySelectorAll("list-items");
// for (var i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "5rem";
// }
// console.log(listItems);

// // Creating Elements
// const ul = document.querySelector("ul");
// const li = document.querySelector("li");

// //Adding Elements
// ul.append(li);

// //Modifying the text

// // const firstListItem = document.querySelector('.list-items');
// // console.log(firstListItem);
// // console.log(firstListItem.innerText);
// // console.log(firstListItem.textContent);
// // console.log(firstListItem.innerHTML);

// li.innerText = 'X-men';

// // Modifying Attributes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');
// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

// // Modifying Classes
// li.classList.add('list-items');
// // li.classList.remove('list-items');
// console.log(li.classList.contains('list-items'));

// // Remove ELements
// li.remove();

// // Parent Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.parentNode);
// console.log(ul.parentElement);
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);
// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

// // Child Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor = 'blue';
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// // Sibling Node Traversal
// let ul = document.querySelector('ul');
// const div = document.querySelector('div');
// console.log(div.childNodes);
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

/** // Event Listeners */
// // syntax: element.addEventListener("click", function);
// const buttonTwo = document.querySelector(".btn-2");
// function alertBtn() {
//   alert("I also love JavaScript");
// }
// buttonTwo.addEventListener("click", alertBtn);

// // Mouseover event

// const newBackgroundColor = document.querySelector(".box-3");
// function changeBgColor() {
//   newBackgroundColor.style.backgroundColor = "Grey";
// }
// newBackgroundColor.addEventListener("mouseover", changeBgColor);

// // Reveal Event

// const revealBtn = document.querySelector(".reveal-btn");
// const hiddenContent = document.querySelector(".hidden-content");

// function revealContent() {
//   if (hiddenContent.classList.contains("reveal-btn"))
//     hiddenContent.classList.remove("reveal-btn");
//   else hiddenContent.classList.add("reveal-btn");
// }
// revealBtn.addEventListener("click", revealContent);

// // Event Propagation

// window.addEventListener(
//   "click",
//   function () {
//     console.log("Window");
//   },
//   false
// );

// document.addEventListener(
//   "click",
//   function () {
//     console.log("Document");
//   },
//   false
// );

// document.querySelector(".div2").addEventListener(
//   "click",
//   function () {
//     // e.stopPropagation();
//     console.log("DIV 2");
//   },
//   { once: true }
// );

// document.querySelector(".div1").addEventListener(
//   "click",
//   function () {
//     console.log("DIV 1");
//   },
//   false
// );

// document.querySelector(".button").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     console.log((e.target.innerText = "Clicked!"));
//   },
//   false
// );

// Event Delegation
// It allows users to append a SINGLE event listener to a parent element
// that adds it to all of its
// present AND future descendants that match a selector.

// without delegation:
document.querySelector(".btn-testa").addEventListener("click", function (e) {
  console.log("button is clicked");
  const target = e.target;
  if (target.matches("button")) target.style.backgroundColor = "MediumSeaGreen";
});

// with delegation to a present element
document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is clicked");
  if (e.target.matches("li")) e.target.style.backgroundColor = "lightgrey";
});

// adding a future element to show delegation to future element
const newSport = document.createElement("li");
newSport.setAttribute("id", "rugby");
newSport.innerText = "Rugby";

const newSportList = document.querySelector("#sports");
newSportList.appendChild(newSport);
