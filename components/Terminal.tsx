import styled from 'styled-components';
import Typer from './Typer';
import { codeFont } from '@/components/mixins';

export default function Terminal() {
  return (
    <div css="max-width: 900px; width: 90%;">
      <Header>
        <HeaderBtn css="background: #ee7751;" />
        <HeaderBtn css="background: #7f7e78;" />
        <HeaderBtn css="background: #7f7e78;" />
        <div css="justify-self: center;">zach@penguin</div>
      </Header>
      <Window>
        <Typer />
      </Window>
    </div>
  );
}

const Header = styled.div`
  display: grid;
  grid-template-columns: 23px 23px 23px auto 69px;
  align-content: center;
  height: 28px;
  background-color: #3e4d4f;
  border-radius: 10px 10px 0 0;
`;

const HeaderBtn = styled.div`
  float: left;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-left: 9px;
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

