import React from 'react';

class HelloClass extends React.Component {
  render() {
    const name = this.props.name ? this.props.name : 'Class';
    return <h1>Hello {name}</h1>
  }
}

export default HelloClass;
