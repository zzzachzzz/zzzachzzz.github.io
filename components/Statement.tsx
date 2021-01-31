import * as React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  inputStatement: string;
  returnStatement: string;
  statementPrefix: React.ReactNode
  showCursorHere: boolean;
};

export default React.memo(function Statement(
  { inputStatement, returnStatement, statementPrefix, showCursorHere }: Props
) {
  return (
    <Statement_>
      <InputStatement>
        {statementPrefix}{inputStatement}{showCursorHere &&<Cursor>&nbsp;</Cursor>}
      </InputStatement>
      {returnStatement && <ReturnStatement>{returnStatement}</ReturnStatement>}
    </Statement_>
  );
});

const Statement_ = styled.div`
  margin-left: 35px;
  margin-right: 35px;
`;

const InputStatement = styled.div`
  padding-top: 5px;
`;

const ReturnStatement = styled.div`
  margin-top: 5px;
`;

const blink = keyframes`50% { background-color: transparent; }`;

const Cursor = styled.span`
  background-color: MediumSpringGreen;
  animation: ${blink} 1s steps(1) infinite;
`;

