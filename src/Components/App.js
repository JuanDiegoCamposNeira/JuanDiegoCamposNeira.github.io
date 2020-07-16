import React from "react";
import NavigationBar from "./Navigationbar.js";
import Screen from "./Screen.js";

//Variables for colors
const mainColor = "#e4e3e3";
const changeColor = "#84a9ac";
const middleColor = "#204051";

class App extends React.Component {
  //Constructor of the class
  constructor(props) {
    super(props);
    this.state = {
      numbers: [], // This will holds the numbers on the array to perform binary search
      result: "",
      animationArray: [],
    };
  }

  //Function to handle add a number to the array
  addNumber(number) {
    //If the parameter is not a number or an empty string
    if (isNaN(number) || number === "") return;
    //Otherwise, add the number to the array
    let newNumbers = this.state.numbers;
    let newNumber = { val: parseInt(number), col: mainColor };
    newNumbers.push(newNumber);
    this.setState({ numbers: newNumbers });
  }

  //Function to handle the clear option of the array
  clearArray() {
    this.setState({ numbers: [], result: "", animationArray: [] });
  }

  //Function to handle the search of a number
  search(number) {
    //If the parameter is not a number, empty or the length of the numbers array is 0
    if (!number || isNaN(number) || this.state.numbers.length === 0) return;
    //Otherwise, execute the search mecanism
    let index;
    this.binarySearch(number) >= 0
      ? (index = this.binarySearch(number))
      : (index = "Not Found");
    //Set the result of the search
    this.animatedBinarySearch();
    this.setState({ result: index, animationArray: [] });
  }

  //Function to color the sub array
  animatedBinarySearch() {
    //Create the array from the map
    let animation = this.state.animationArray;
    let array = this.state.numbers;
    for (let i = 0; i < animation.length; i++) {
      setTimeout(() => {
        for (let j = 0; j < array.length; j++) {
          let updatedColors = this.state.numbers;
          if (j === animation[i][1]) updatedColors[j].col = middleColor;
          else if (j >= animation[i][0] && j <= animation[i][2])
            updatedColors[j].col = changeColor;
          else updatedColors[j].col = mainColor;
          //Set the new state
          this.setState({ numbers: updatedColors });
        }
      }, 3000 * i);
    }
  }

  //Binary Search algorithm
  binarySearch(num) {
    //Array of numbers and the number to be searched
    const numbers = this.state.numbers,
      number = parseInt(num);
    //Bounds of the search
    let left = 0,
      right = parseInt(numbers.length - 1),
      middle = 0;
    //While left bound is less than or equal to the right bound, search
    while (left <= right) {
      //Calculate the middle
      middle = parseInt(left + (right - left) / 2);
      //Put the bounds into the array
      this.state.animationArray.push([left, middle, right]);
      //If the number equals the middle, return the position (middle)
      if (numbers[middle].val === number) return middle;
      //If number < numbers[middle]
      if (number < numbers[middle].val) right = middle - 1;
      //If number > numbers[middle]
      else if (number > numbers[middle].val) left = middle + 1;
    }
    //Return -1 if the element is not in the array
    return -1;
  }

  //Function to generate a random arrray
  ramdonArray() {
    const array = [];
    let item = {};
    for (let i = 0; i < 15; i++) {
      item = { val: this.randomNumber(0, 99), col: mainColor };
      array.push(item);
    }
    //Set the new state
    this.setState({ numbers: array });
  }
  //Generate the random number
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  //Render function
  render() {
    return (
      <div>
        <NavigationBar
          add={this.addNumber.bind(this)}
          clear={this.clearArray.bind(this)}
          search={this.search.bind(this)}
          random={this.ramdonArray.bind(this)}
        />
        <Screen numbers={this.state.numbers} result={this.state.result} />
      </div>
    );
  }
}

//------------  Export the component  ----------------
export default App;
