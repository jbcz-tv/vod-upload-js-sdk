export let fetch = null;

const isNode = new Function('try {return this===global;}catch(e){return false;}');

// tests if global scope is bound to "global"
if (isNode()) {
  // eslint-disable-next-line no-undef
  fetch = require('node-fetch');
} else {
  fetch = window.fetch;
}
