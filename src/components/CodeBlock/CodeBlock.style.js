import styled from 'styled-components';

export const CodeBlockWrapper = styled.pre`
  font-size: 1.1em;
  font-family: monospace;
  color: white;
  margin: 5px 0 1.75em -2px;
  padding: 10px;
  background: #222;
  overflow-x: auto;
  white-space: pre;
  line-height: 1.4em;

  .fileName {
    width: 100%;
    text-align: center;
    font-size: 0.8em;
    color: #f2f2f2;
  }

  .highlight {
    color: yellow;
  }
`;
