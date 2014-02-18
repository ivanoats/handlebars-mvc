// helper.js
Handlebars.registerHelper('reverse', function(title){
  'use strict';
  return title.split('').reverse().join('');
});
