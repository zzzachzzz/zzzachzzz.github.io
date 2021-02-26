import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Statement from './Statement';

export default function Typer() {
  const [currentInputLines, setCurrentInputLines] = useState(['']);
  const [currentReturnLines, setCurrentReturnLines] = useState([]);
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);

  useEffect(() => {
    let timeout: number;
    const handleTyping = async () => {
      const sleep = (ms: number) => {
        return new Promise(resolve => {
          timeout = window.setTimeout(resolve, ms);
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
    <>
      {currentInputLines.map((_, i) => (
        <Statement inputStatement={currentInputLines[i] ?? ''}
                   returnStatement={currentReturnLines[i] ?? ''}
                   showCursorHere={currentStatementIndex === i}
                   statementPrefix={i === 0 || i === 8 ? linuxPrefix : '>>> '}
                   key={i} />
      ))}
    </>
  );
}

const linuxPrefix = (
  <>
    <span style={{color: 'mediumspringgreen'}}>zach@penguin</span>:<span style={{color: 'cyan'}}>~</span>$&nbsp;
  </>
);


const TerminalLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  text-decoration-line: none;
  color: DodgerBlue;
`;

const inputLines = [
  "python3",
  "import zach",
  "zach.full_name",
  "zach.current_location",
  "zach.skills",
  "zach.resume",
  "zach.links",
  "exit()",
  "",
];

const returnLines = [
  "Python 3.7.6",
  "",
  "'Zachary Rosenberger'",
  "'Boise, ID'",
  "['TypeScript', 'React', 'Redux', 'Express', 'Python', 'Git']",
  <>
    '<TerminalLink
       href="https://drive.google.com/open?id=1bQ3qTFrOGzH0jDxaLVAibP99uRxwepbh">
       zRosenbergerResume.pdf</TerminalLink>'
  </>,
  <>
    ['<TerminalLink href="https://github.com/zzzachzzz">github.com/zzzachzzz</TerminalLink>',<br/>
    &nbsp;'<TerminalLink href="mailto:zach1rosen@gmail.com">zach1rosen@gmail.com</TerminalLink>',<br/>
    &nbsp;'<TerminalLink href="https://www.linkedin.com/in/zach-rosenberger-36884ab1">
      linkedin.com/in/zach-rosenberger
    </TerminalLink>']
  </>,
  "",
  "",
];

