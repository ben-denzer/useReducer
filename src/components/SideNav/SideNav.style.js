import styled from 'styled-components';

const sideNavBgColor = '#171717';

export const SideNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${p => (p.closed ? 50 : 200)}px;
  transition: all 0.2s ease;
  background: ${sideNavBgColor};
  color: #f7f7f7;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid black;

  .topRow {
    display: flex;
    justify-content: space-between;

    a {
      margin: 5px;
      &[aria-current='page'] {
        background: ${sideNavBgColor};
      }
      :hover {
        background: ${sideNavBgColor};
      }
    }
  }

  img {
    height: 30px;
    width: 30px;
    margin: 10px;

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  a {
    height: 40px;
    padding-left: 15px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f7f7f7;

    &[aria-current='page'] {
      background: #333;
    }

    :hover {
      background: #333;
    }
  }
`;
