import React from "react";
import "../Stylesheets/navbar.css";

class NavigationBar extends React.Component {
  //Constructor for the class
  constructor(props) {
    super(props);
    this.state = {
      search: "", //This will hold the numeber to search
      add: "", //This will hold the number to add
    };
  }

  //Function to set the variable for add
  numberAdd(number) {
    this.setState({ add: number.target.value });
  }
  //Function to set the variable for search
  numberSearch(number) {
    this.setState({ search: number.target.value });
  }

  //Function to add the number to the array on <App />
  handleAddNUmber() {
    let addNumber = this.state.add;
    this.props.add(addNumber);
    //Reset the state
    this.setState({ add: "" });
  }

  //Function to search the number
  handleSearchNumber(number) {
    //Variable that holds the number to search
    let num = this.state.search;
    //Clear the field of search
    this.setState({ search: "" });
    //Call the function to execute the search
    this.props.search(num);
  }

  //Render function
  render() {
    return (
      <div className="navbar">
        <h1>Binary Search algorithm</h1>
        <div className="inputs">
          <div>
            <label htmlFor="number">Add a number : </label>
            <input
              name="number"
              value={this.state.add}
              onChange={this.numberAdd.bind(this)}
            />
            <button onClick={this.handleAddNUmber.bind(this)}> Add </button>
          </div>
          <div>
            <label htmlFor="search">Search a number : </label>
            <input
              name="search"
              onChange={this.numberSearch.bind(this)}
              value={this.state.search}
            />
            <button onClick={this.handleSearchNumber.bind(this)}>Search</button>
          </div>
          <div>
            <button onClick={this.props.random}>Generate random Array</button>
          </div>
          <div>
            <button onClick={this.props.clear}>Clear</button>
          </div>
        </div>
      </div>
    );
  }
}

//------------  Export the component  ----------------
export default NavigationBar;
