var BookController = {};

// adapted from Alex MacCaw's JavaScript Web Applications Chapter 1
// TODO refactor for our Object Style?
(BookController.users = function($){
  'use strict';
  var titleClick = function() {
    alert('title was clicked');
  };
  // Attach event listeners on page load
  document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('title').onclick = titleClick;
  });

})();


