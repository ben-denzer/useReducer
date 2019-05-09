import styled from 'styled-components';

export const IntroWrapper = styled.div`
  .logoContainer {
    width: 100%;
    min-height: 250px;
    display: flex;
    justify-content: center;
  }

  .appLogo {
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
