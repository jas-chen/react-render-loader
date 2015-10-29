'use strict';

var loaderUtils = require('loader-utils');
var React = require('react');
var ReactServer = require('react-dom/server');

function renderWithFn(fn, module) {
  if (Array.isArray(module)) {
    return module.reduce((chunk, obj) => {
      return chunk + renderWithFn(fn, obj);
    }, '');
  }
  else if (typeof module === 'function') {
    return ReactServer[fn](React.createElement(module));
  }

  return ReactServer[fn](module);
}

module.exports = function(content) {
  this.cacheable && this.cacheable();

  var query = loaderUtils.parseQuery(this.query);
	var fn = query.static ? 'renderToStaticMarkup' : 'renderToString';

  var module = this.exec(
    'require("babel-core/register");' + content,
    this.resource
  );

  var html = renderWithFn(fn, module);
  var result = "module.exports = '" + html + "';";

  return result;
};
