import HelloClassHtml from 'react-render?static=true!./components/class.js';
import HelloElementHtml from 'react-render?static=true!./components/element.js';
import HelloFunctionHtml from 'react-render?static=true!./components/function.js';

const html = HelloClassHtml + HelloElementHtml + HelloFunctionHtml ;
document.getElementById('root').innerHTML = html;
