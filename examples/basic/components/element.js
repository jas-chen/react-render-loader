import React from 'react';

class HelloClass extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

const element = <HelloClass name="Element" />;

export default element;
