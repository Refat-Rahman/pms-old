/* .on() used in case there is ajax loaded content. */
$("body").on("click", "#toggleMessage", function() {
    $("#box").toggle(); /*shows or hides #box*/
    
    /*$(this) refers to the targeted element: #toggleMessage*/
    var text = $(this).text();
    
    if (text=="Show") { /*if text inside #toggleMessage is Show...*/
      $(this).text("Hide"); /*Change button text to Hide*/
    }
    else {
      $(this).text("Show"); /*Change button text to Show*/
    }
  });