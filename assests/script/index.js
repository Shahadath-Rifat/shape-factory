'use strict';


// Define Shape class
class Shape {
  #name;
  #color;
  constructor(name, color) {
    this.name = name;
    this.color = color;
  };

  set name(name) {
    this.#name = name;
  };

  set color(color) {
    this.#color = color;
  };

  get name() {
    return this.#name;
  };

  get color() {
    return this.#color;
  };

  getInfo() {
    return `Name: ${this.#name} ||  Color: ${this.#color}`;
  };
};


let shapeText = document.querySelector(".shape-text");

// Array to store shapes
let shapesArray = [];
  
// Function to create a shape
function createShape() {
  // validation of max limit
  if (shapesArray.length >= 20) {
    shapeText.innerHTML ="Ooops! Max Limit Reached!";
    return;
  }

  // Get the selected shape and color
  let shapeSelect = document.getElementById("shape");
  let colorSelect = document.getElementById("color");
  let shapeValue = shapeSelect.value;
  let colorValue = colorSelect.value;
  
  // Create a new Shape object
  let newShape = new Shape(shapeValue, colorValue);
  
  // Add the new Shape object to the array
  shapesArray.push(newShape);
  
  // Create a new shape element and add it to the grid
  let grid = document.getElementById("shapes");
  let newShapeElement = document.createElement("div");
  newShapeElement.classList.add(shapeValue);
  newShapeElement.style.backgroundColor = colorValue;
  newShapeElement.addEventListener("click", function() {
    // Display information about the shape when it is clicked
    shapeText.textContent = newShape.getInfo();
    });
  grid.appendChild(newShapeElement);
  }
  
// Add event listener to create button

const createButton = document.getElementById("create");
createButton.addEventListener("click", createShape);























