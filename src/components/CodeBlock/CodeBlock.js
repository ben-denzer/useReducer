import React from 'react';
import { CodeBlockWrapper } from './CodeBlock.style';

function CodeBlock(props) {
  return (
    <CodeBlockWrapper>
      {props.fileName && <div className="fileName">{props.fileName}</div>}
      {props.children}
    </CodeBlockWrapper>
  );
}

export default CodeBlock;
