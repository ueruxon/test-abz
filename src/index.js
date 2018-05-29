import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Test/>,
  document.getElementById('react'),
);


class Test extends React.Component {
  render = () => <div>React is Up</div>
}
