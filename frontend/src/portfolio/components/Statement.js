import React, { memo } from 'react';

export default memo(function Statement(
  { showCursorHere, statementPrefix, inputStatement = '', returnStatement = '' }
) {
  return (
    <div className="statement">
      <div className="input-statement">
        {statementPrefix}{inputStatement}{showCursorHere &&<span className="cursor">&nbsp;</span>}
      </div>
      {returnStatement && <div className="return-statement">{returnStatement}</div>}
    </div>
  );
});

