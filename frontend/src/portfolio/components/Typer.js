import React, { Component } from 'react';
import Statement from './Statement';

class Typer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInputLines: [],
      currentReturnLines: [],
      currentStatementIndex: 0,
      typingSpeed: 45
    }

    this.inputLines = {
      0: "python3",
      1: "import zach",
      2: "zach.full_name",
      3: "zach.current_location",
      4: "zach.skills",
      5: "zach.resume",
      6: "zach.github",
      7: "zach.email",
      8: "exit()",
      9: "",
    }

    this.returnLines = {
      0: "Python 3.5.3",
      1: "",
      2: "'Zachary Rosenberger'",
      3: "'Boise, ID'",
      4: "['Python', 'JavaScript', 'React', 'Flask', 'Django', 'Git']",
      5: <React.Fragment>
           '<a className="terminal-link" target="_blank" rel="noopener noreferrer"
             href="https://drive.google.com/open?id=1bQ3qTFrOGzH0jDxaLVAibP99uRxwepbh">
             zRosenbergerResume.pdf</a>'
         </React.Fragment>,
      6: <React.Fragment>
           '<a className="terminal-link" target="_blank" rel="noopener noreferrer"
            href="https://github.com/zzzachzzz">github.com/zzzachzzz</a>'
         </React.Fragment>,
      7: <React.Fragment>
           '<a className="terminal-link" target="_blank" rel="noopener noreferrer"
           href="mailto:zach1rosen@gmail.com">zach1rosen@gmail.com</a>'
         </React.Fragment>,
      8: "",
      9: "",
    }
  }

  componentDidMount() {
    this.handleTyping();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleTyping = async () => {
    const sleep = (ms) => {
      return new Promise((resolve) => {
        this.timeout = setTimeout(resolve, ms);
      });
    }
    await sleep(1000);  // Initial wait on page load
    const { inputLines, returnLines } = this;
    const { currentInputLines, currentReturnLines, typingSpeed } = this.state;
    const statementsLength = Object.keys(inputLines).length;
    for (let i = 0; i < statementsLength; i++) {
      this.setState({ currentStatementIndex: i });
      await sleep(700);  // Delay before typing next input statement
      for (let j = 0; j < inputLines[i].length; j++) {
        if (this.state.currentInputLines[i] === undefined) {
          currentInputLines[i] = '';
        }
        currentInputLines[i] += inputLines[i][j];  // Type next character
        this.setState({ currentInputLines: currentInputLines });
        await sleep(typingSpeed);  // Delay between characters
      }
      await sleep(200);  // Delay 'hitting Enter' after typing statement
      currentReturnLines[i] = returnLines[i];
      this.setState({ currentReturnLines: currentReturnLines });
    }
  }

  render() {
    const { currentInputLines, currentReturnLines, currentStatementIndex } = this.state;
    return (
      <React.Fragment>
        <Statement inputStatement={currentInputLines[0] || ''}
                   returnStatement={currentReturnLines[0] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 0)}
                   statementReached={Boolean(currentStatementIndex >= 0)}
                   statementPrefix={linuxPrefix} />
        <Statement inputStatement={currentInputLines[1] || ''}
                   returnStatement={currentReturnLines[1] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 1)}
                   statementReached={Boolean(currentStatementIndex >= 1)} />
        <Statement inputStatement={currentInputLines[2] || ''}
                   returnStatement={currentReturnLines[2] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 2)}
                   statementReached={Boolean(currentStatementIndex >= 2)} />
        <Statement inputStatement={currentInputLines[3] || ''}
                   returnStatement={currentReturnLines[3] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 3)}
                   statementReached={Boolean(currentStatementIndex >= 3)} />
        <Statement inputStatement={currentInputLines[4] || ''}
                   returnStatement={currentReturnLines[4] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 4)}
                   statementReached={Boolean(currentStatementIndex >= 4)} />
        <Statement inputStatement={currentInputLines[5] || ''}
                   returnStatement={currentReturnLines[5] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 5)}
                   statementReached={Boolean(currentStatementIndex >= 5)} />
        <Statement inputStatement={currentInputLines[6] || ''}
                   returnStatement={currentReturnLines[6] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 6)}
                   statementReached={Boolean(currentStatementIndex >= 6)} />
        <Statement inputStatement={currentInputLines[7] || ''}
                   returnStatement={currentReturnLines[7] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 7)}
                   statementReached={Boolean(currentStatementIndex >= 7)} />
        <Statement inputStatement={currentInputLines[8] || ''}
                   returnStatement={currentReturnLines[8] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 8)}
                   statementReached={Boolean(currentStatementIndex >= 8)} />
        <Statement inputStatement={currentInputLines[9] || ''}
                   returnStatement={currentReturnLines[9] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 9)}
                   statementReached={Boolean(currentStatementIndex >= 9)}
                   statementPrefix={linuxPrefix} />
      </React.Fragment>
    );
  }
}

const linuxPrefix = (
  <React.Fragment>
    <span style={{color: 'mediumspringgreen'}}>zach@penguin</span>:<span style={{color: 'cyan'}}>~</span>$&nbsp;
  </React.Fragment>
);

export default Typer;
