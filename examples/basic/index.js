import HelloClassHtml from 'react-render?static=true!./components/class.js';
import HelloElementHtml from 'react-render?static=true!./components/element.js';
import HelloFunctionHtml from 'react-render?static=true!./components/function.js';
import HelloArrayHtml from 'react-render?static=true!./components/array.js';


const html = HelloClassHtml + HelloElementHtml + HelloFunctionHtml + HelloArrayHtml;
document.getElementById('root').innerHTML = html;
