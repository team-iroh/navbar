import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 6.6rem;
  padding: 1.2rem 0;
  color: #282828;
  border-color: #e8e8e8;
  border-bottom: 0.1rem solid #dcdedd;
  display: flex;
  align-items: center;
`;

export const LinkContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${(props) => (props.leftAlign ? 'flex-start' : 'flex-end')};
`;

export const Link = styled.p`
  margin: 0 20px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: #037362;
  }
`;

export const PrettyLink = styled.p`
  margin: 0 20px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: #037362;
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
