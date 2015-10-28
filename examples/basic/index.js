import AppHtml from 'react-render-loader!./App.js';
// import AppHtml from 'react-render-loader?static=true!./App.js';

console.log(AppHtml);
document.getElementById('root').innerHTML = AppHtml;
