var BookController = {};

// from Alex MacCaw
// TODO refactor for our Object Style?
// TODO refactor for raw JS and not jQuery, ref youmightnotneedjquery.com
(BookController.users = function($){
  'use strict';
  var titleClick = function() {
    alert('title was clicked');
  };
  // Attach event listeners on page load
  $(function(){
    $('#title').click(titleClick)
  });

})(jQuery);


