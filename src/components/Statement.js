import React, { PureComponent } from 'react';

class Statement extends PureComponent {
  static defaultProps = {
    inputStatement: '',
    returnStatement: ''
  }

  render() {
    return (
      <div className="statement">
        <div className="input-statement">{this.props.inputStatement}</div>
        <div className="return-statement">{this.props.returnStatement}</div>
      </div>
    );
  }
}

export default Statement;
