// JavaScript Document
 $(function () { 
    $.ajax({
      url: "/~jperetz/fall2012/includes/menu.html"
     }).done(function(data) { 
     $(document.body).prepend(data);
});
 });