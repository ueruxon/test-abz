import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  render = () => <div>React is Up</div>
}

ReactDOM.render(
  <Test>test</Test>,
  document.getElementById('react'),
);

