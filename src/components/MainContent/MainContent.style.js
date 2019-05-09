import styled from 'styled-components';

export const MainContentWrapper = styled.div`
  padding: 10px;
  background: #111;
  width: 100%;
  color: #f7f7f7;
  overflow: auto;

  h1,
  h2 {
    width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 55px;
  }

  h2 {
    font-size: 40px;
  }

  a {
    color: #f7f7f7;

    :hover {
      color: #ccc;
    }
  }
`;
