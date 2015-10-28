import React from 'react';

function Hello(props) {
  return <h1>Hello {props.name}</h1>;
}

const App = <Hello name="React" />;

export default App;
