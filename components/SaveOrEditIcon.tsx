import styled from 'styled-components';

type SaveOrEditIconProps = {
  icon: 'save' | 'edit';
  onClick: () => void;
};

const SaveOrEditIcon = styled.img.attrs<SaveOrEditIconProps>(({ icon }) => ({
  src: `/assets/${icon}-icon.svg`,
}))<SaveOrEditIconProps>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export default SaveOrEditIcon;
