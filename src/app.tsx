import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
  content: string;
}

const Hello = (props: Props) => {
  const content = props.content;
  return (
    <h1>{content}</h1>
  )
};

ReactDOM.render(
  <Hello content='hello world!' />,
  document.getElementById('app')
);
