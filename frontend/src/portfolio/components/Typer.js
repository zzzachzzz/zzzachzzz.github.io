import React, { useState, useEffect } from 'react';
import Statement from './Statement';
import { inputLines, returnLines } from './typerData';

export default function Typer() {
  const [currentInputLines, setCurrentInputLines] = useState(['']);
  const [currentReturnLines, setCurrentReturnLines] = useState([]);
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const handleTyping = async () => {
      const sleep = (ms) => {
        return new Promise(resolve => {
          timeout = setTimeout(resolve, ms);
        });
      };
      await sleep(1000); // Initial wait on page load
      const statementsLength = Object.keys(inputLines).length;
      for (let i = 0; i < statementsLength; i++) {
        setCurrentStatementIndex(i);
        await sleep(550);  // Delay before typing next input statement
        for (let j = 0; j < inputLines[i].length; j++) {
          setCurrentInputLines([...inputLines.slice(0, i), inputLines[i].substring(0, j+1)]);
          await sleep(30);  // Delay between characters
        }
        await sleep(200);  // Delay 'hitting Enter' after typing statement
        setCurrentReturnLines(returnLines.slice(0, i+1));
        if (i === statementsLength-1) {
          setCurrentInputLines([...inputLines.slice(0, i+1)])
        } else {
          // '' to begin next input statement, so prefix and cursor render immediately
          setCurrentInputLines([...inputLines.slice(0, i+1), ''])
        }
      }
    };
    handleTyping();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <React.Fragment>
      {currentInputLines.map((_, i) => (
        <Statement inputStatement={currentInputLines[i] || ''}
                   returnStatement={currentReturnLines[i] || ''}
                   showCursorHere={currentStatementIndex === i}
                   statementPrefix={i === 0 || i === 8 ? linuxPrefix : '>>> '}
                   key={i} />
      ))}
    </React.Fragment>
  );
}

const linuxPrefix = (
  <React.Fragment>
    <span style={{color: 'mediumspringgreen'}}>zach@penguin</span>:<span style={{color: 'cyan'}}>~</span>$&nbsp;
  </React.Fragment>
);
