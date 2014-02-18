// framework.js
var source   = document.getElementById("book-template").innerHTML.trim();
var template = Handlebars.compile(source);
var context = book;
var html = template(context);
document.getElementById("outlet").innerHTML = html;
