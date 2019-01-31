import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statement from './Statement';

class Typer extends Component {
  state = {
    inputLines: [
      'python', '2nd input'
    ],
    returnLines: [
      'you are now in python :D', '2nd return'
    ],
    currentInputLines: ['python', '2nd input'],
    currentReturnLines: ['^_^', '2nd return'],
    text: '',
    typingSpeed: 150
  }

  componentDidMount() {
    this.handleTyping();
  }

  handleTyping = () => {

  }

  render() {
    const { currentInputLines, currentReturnLines } = this.state;
    return (
      <div>
        <div className="statement">
          <div className="input-statement non-py-statement">
            <span style={{color: 'mediumspringgreen'}}>zach@penguin</span>:<span style={{color: 'cyan'}}>~</span>$&nbsp;
            {currentInputLines[0] || ''}
          </div>
          <div className="return-statement">
            {currentReturnLines[0] || ''}
          </div>
        </div>
        <Statement inputStatement={currentInputLines[1] || ''}
                   returnStatement={currentReturnLines[1] || ''} />
      </div>
    );
  }
}

Typer.propTypes = {
  inputLines: PropTypes.arrayOf(PropTypes.string),
  returnLines: PropTypes.arrayOf(PropTypes.string)
}

export default Typer;
