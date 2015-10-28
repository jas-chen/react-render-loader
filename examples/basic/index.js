import AppHtml from 'react-render!./App.js';
// import AppHtml from 'react-render?static=true!./App.js';

console.log(AppHtml);
document.getElementById('root').innerHTML = AppHtml;
