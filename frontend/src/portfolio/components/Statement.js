import React from 'react';

Statement.defaultProps = {
  statementPrefix: '>>> ',
  inputStatement: '',
  returnStatement: ''
}

export default function Statement (props) {
  const { inputStatement, returnStatement, showCursorHere, statementPrefix } = props;
  return (
    <div className="statement">
      <div className="input-statement">
        {statementPrefix}{inputStatement}{showCursorHere &&<span className="cursor">&nbsp;</span>}
      </div>
      {returnStatement && <div className="return-statement">{returnStatement}</div>}
    </div>
  );
}
