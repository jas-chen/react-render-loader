[![npm version](https://img.shields.io/npm/v/react-render-loader.svg?style=flat-square)](https://www.npmjs.com/package/react-render-loader)

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
import AppHtml from 'react-render!./App.js';

// Use ReactDOMServer.renderToStaticMarkup
// import AppHtml from 'react-render?static=true!./App.js';

document.getElementById('root').innerHTML = AppHtml;

```

[Examples](https://github.com/jas-chen/react-render-loader/tree/master/examples)

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)
