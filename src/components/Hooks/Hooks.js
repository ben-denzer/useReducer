import React from 'react';
import { HooksWrapper } from './Hooks.style';
import CodeBlock from '../CodeBlock';
import Counter from './Counter';

function Hooks(props) {
  return (
    <HooksWrapper>
      <h1>React Hooks</h1>
      <h2>Add lifecycle hooks and state to your functional components</h2>
      <p style={{ width: '100%', textAlign: 'center' }}>
        <a
          target="_blank"
          href="https://reactjs.org/docs/hooks-intro.html#classes-confuse-both-people-and-machines"
        >
          React Docs
        </a>
      </p>

      <CodeBlock>
        {`
  import React, `}
        <span className="highlight">{`{ useState }`}</span>
        {` from 'react';

  function Counter(props) {
    `}
        <span className="highlight">{`const [count, setCount] = useState(0);
    `}</span>
        {`const increment = () => {`}
        <span className="highlight">{` setCount(count + 1)`}</span>{' '}
        {`}

    return (
      <>
        <button onClick={increment}> + </button> {count}
      </>
    );
  }

  export default Counter;
        `}
      </CodeBlock>
      <hr />
      <Counter />
      <br />
      <br />
      <br />
    </HooksWrapper>
  );
}

export default Hooks;
