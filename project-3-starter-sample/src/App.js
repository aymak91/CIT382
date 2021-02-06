import React, { Component } from "react";
import "./styles.css";
// We are importing the caesarEncrypt function from our js file
import { caesarEncrypt } from "./Project1";
import { setConstantValue } from "typescript";

const Cipher = (props) => {
  let stuff = [...Array(126 + 1).keys()].filter((num) => num >= 33 && num <= 126);
  let {value, shiftLeft} = props;
  let renderedOutput = stuff.map(item => <div>{String.fromCharCode(item)}={caesarEncrypt(String.fromCharCode(item), value, shiftLeft)}</div>)
  return (
    <div>
      {renderedOutput}
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearText: "",
      encryptedText: "",
      value: 2,
      shiftLeft: false
    };

    console.log(this.state);

    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleShift = this.handleShift.bind(this);
  }

  /*
   * This function handles the change event for the text box.
   * You need to add handlers for the other input elements
   */
  textChangeHandler(e) {
    /*
     * You have to call the caesarEncrypt function with values
     * from the input elements. Right now I am only using the text
     * input element, but you have to tie up the shift num and
     * shift left checkbox yourself
     */

    // getting the value from the input element
    var clearText = e.target.value;
    // updating the state, so that it reflects in the UI
    /*
     * calliing the caesarEncrypt function with the text the user entered
     * You have to get the values of the other inputs
     * HINT: Store other input in state and use them
     */

    let {value, shiftLeft} = this.state;

    var encryptedText = caesarEncrypt(clearText, value, shiftLeft);
    /**
     * Update the state to have the encrypted text
     */
    this.setState({ encryptedText, clearText });
    console.log(this.state);
  }

  handleOnChange(e) {
    let value = e.target.value;
    let {shiftLeft, clearText} = this.state;
    let encryptedText = caesarEncrypt(clearText, value, shiftLeft);
    this.setState({ encryptedText, value });
  }

  handleShift(e) {
    let shiftLeft = !this.state.shiftLeft;    
    let {value, clearText} = this.state;
    let encryptedText = caesarEncrypt(clearText, value, shiftLeft);
    this.setState({ encryptedText, shiftLeft });
  }

  render() {
    return (

      <div className="App">
        <label htmlFor="clearText"> Clear Text </label>
        {/*
         * Tied input element to a state variable
         * Added change handler to update the value
         * Will call encrypt function inside the change handler
         */}
        <input
          type="text"
          name="clearText"
          id="clearText"
          onChange={this.textChangeHandler}
          value={this.state.clearText}
        />
        <br />
        <br />
        <p>Caesar Ciphertext: </p>
        {/* Showing the result here */}
        <p>{this.state.encryptedText}</p>

        <div>
          Number:{" "}
          <input id="number" type="range" min="0" max="26" value={this.state.value} onChange={this.handleOnChange}></input>
          <input id="outnum" type="number" value={this.state.value} min="0" max="26" onChange={this.handleOnChange}></input>
          ShiftLeft: <input id="shiftLeft" type="checkbox" value={this.state.shiftLeft} onClick={this.handleShift}></input>
        </div>
        <div id="Alphabet">
          {/* div placeholder for alphanumeric display */}
          < Cipher shiftLeft={this.state.shiftLeft} value={this.state.value}/>
        </div>
        <br />
      </div>


    );
  }
}