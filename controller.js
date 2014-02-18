var BookController = {};

// from Alex MacCaw
// TODO refactor for our Object Style?
// TODO refactor for raw JS and not jQuery, ref youmightnotneedjquery.com
(Controller.users = function($){
  var titleClick = function() {
  // TODO do something
  };
  // Attach event listeners on page load
  $(function(){
    $("#view.title").click(titleClick)
  });

})(jQuery);


