require('babel-register')();

var jsdom = require('jsdom').jsdom;

// const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

// documentRef = document;