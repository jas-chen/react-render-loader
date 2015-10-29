import HelloClassHtml from 'react-render?static=true!./components/class.js';
import HelloElementHtml from 'react-render?static=true!./components/element.js';
import HelloStaticHtml from 'react-render?static=true!./components/static.js';

const html = HelloClassHtml + HelloElementHtml + HelloStaticHtml ;
document.getElementById('root').innerHTML = html;
