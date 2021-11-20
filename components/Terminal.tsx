import styled from 'styled-components';
import Typer from './Typer';
import { codeFont } from '@/components/mixins';

export default function Terminal() {
  return (
    <div css="max-width: 900px; width: 90%;">
      <Header>
        <div css="justify-self: center;">zach@penguin</div>
        <XBtn />
      </Header>
      <Window>
        <Typer />
      </Window>
    </div>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  background-color: #353535;
  border-radius: 10px 10px 0 0;
  position: relative;
`;

const XBtn = styled.div`
  &:after {
    display: inline-block;
    content: "\\00d7";
  }
  position: absolute;
  right: 14px;
  font-size: 1.4rem;
`;

const Window = styled.div`
  font-family: ${codeFont};
  font-weight: bold;
  height: 480px;
  max-height: 80vh;
  background-color: black;
  opacity: 0.75;
  border-radius: 0 0 10px 10px;
  padding-top: 5px;
`;

