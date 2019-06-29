import React, { PureComponent } from 'react';

class Statement extends PureComponent {
  static defaultProps = {
    statementPrefix: '>>> ',
    inputStatement: '',
    returnStatement: '',
    firstStatement: false
  }

  render() {
    const { inputStatement, returnStatement, showCursorHere,
            statementPrefix, statementReached } = this.props;
    return (
      <div className="statement">
        <div className="input-statement">
          {statementReached && statementPrefix}{inputStatement}{showCursorHere &&<span className="cursor">&nbsp;</span>}
        </div>
        {returnStatement && <div className="return-statement">{returnStatement}</div>}
      </div>
    );
  }
}

export default Statement;
