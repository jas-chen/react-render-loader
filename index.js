'use strict';

var loaderUtils = require('loader-utils');
var React = require('react-dom/server');

module.exports = function(content) {
  this.cacheable && this.cacheable();

  var query = loaderUtils.parseQuery(this.query);
	var fn = query.static ? 'renderToStaticMarkup' : 'renderToString';

  var el = this.exec(content, this.resource);
  var html = React[fn](el);
  return "module.exports = '" + html + "';";
};
