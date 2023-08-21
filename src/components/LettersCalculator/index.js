// Write your code here.
import { Component } from 'react';
import './index.css';

class LetterCalculator extends Component {
  state = {
    inputText: '',
  };

  onChangeInputText = event => {
    const newText = event.target.value;
    this.setState({ inputText: newText });
  };

  render() {
    const { inputText } = this.state;
    const lettersCount = inputText.length;

    return (
      <div className="container">
        <div className="card">
          <div className="text-container">
            <h1>Calculate the Letters you enter</h1>
            <div>
              <label htmlFor="letter">Enter the phrase</label>
              <br />
              <input
                type="text"
                placeholder="Enter the phrase"
                id="letter"
                className="typing"
                onChange={this.onChangeInputText}
              />
            </div>
            <br />
            <p className="button">
              No. of letters: {lettersCount}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    );
  }
}

export default LetterCalculator;
