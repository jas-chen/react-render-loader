# React render loader for webpack

A webpack loader that renders React components to HTML strings.

## Usage
```javascript
// App.js
import React from 'react';

function Hello(props) {
  return <h1>Hello {props.name}</h1>;
}

const App = <Hello name="React" />;

export default App;



// index.js

// Use ReactDOMServer.renderToString
import AppHtml from 'react-render-loader!./App.js';

// Use ReactDOMServer.renderToStaticMarkup
// import AppHtml from 'react-render-loader?static=true!./App.js';

document.getElementById('root').innerHTML = AppHtml;

```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)
