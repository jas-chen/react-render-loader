'use strict';

var loaderUtils = require('loader-utils');
var React = require('react');
var ReactServer = require('react-dom/server');

module.exports = function(content) {
  this.cacheable && this.cacheable();

  var query = loaderUtils.parseQuery(this.query);
	var fn = query.static ? 'renderToStaticMarkup' : 'renderToString';

  var classOrElement = this.exec(
    'require("babel-core/register");' + content,
    this.resource
  );

  var element = typeof classOrElement === 'function' ?
    React.createElement(classOrElement)
    : classOrElement;

  var html = ReactServer[fn](element);
  var result = "module.exports = '" + html + "';";

  return result;
};
