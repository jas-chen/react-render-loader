import React from 'react';

class HelloClass extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

export default <HelloClass name="Element" /> ;
