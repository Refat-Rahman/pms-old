$(document).ready(function(){
 
  // Initialize select2
  $("#SelExample").select2();
  $("#SelExample").select2("val", "0");
$('#SelExample option:selected').text('---নির্বাচন করুন---');
  // Read selected option
  $('#but_read').click(function(){
    var username = $('#SelExample option:selected').text();
    var userid = $('#SelExample').val();

    $('#result').text("id : " + userid + ", name : " + username);
  });
});

$(document).ready(function(){
 
    // Initialize select2
    $("#SelExample-m").select2();
    $("#SelExample-m").select2("val", "0");
  $('#SelExample-m option:selected').text('---নির্বাচন করুন---');
    // Read selected option
    $('#but_read').click(function(){
      var username = $('#SelExample-m option:selected').text();
      var userid = $('#SelExample-m').val();
  
      $('#result').text("id : " + userid + ", name : " + username);
    });
  });

  $(document).ready(function(){
 
    // Initialize select2
    $("#SelExample-rel").select2();
    $("#SelExample-rel").select2("val", "0");
  $('#SelExample-rel option:selected').text('---নির্বাচন করুন---');
    // Read selected option
    $('#but_read').click(function(){
      var username = $('#SelExample-rel option:selected').text();
      var userid = $('#SelExample-rel').val();
  
      $('#result').text("id : " + userid + ", name : " + username);
    });
  });

  $(document).ready(function(){
 
    // Initialize select2
    $("#SelExample-sm").select2();
    $("#SelExample-sm").select2("val", "0");
  $('#SelExample-sm option:selected').text('---নির্বাচন করুন---');
    // Read selected option
    $('#but_read').click(function(){
      var username = $('#SelExample-sm option:selected').text();
      var userid = $('#SelExample-sm').val();
  
      $('#result').text("id : " + userid + ", name : " + username);
    });
  });


  $(document).ready(function(){
 
    // Initialize select2
    $("#SelExample-sm-rm").select2();
    $("#SelExample-sm-rm").select2("val", "0");
  $('#SelExample-sm-rm option:selected').text('---নির্বাচন করুন---');
    // Read selected option
    $('#but_read').click(function(){
      var username = $('#SelExample-sm-rm option:selected').text();
      var userid = $('#SelExample-sm-rm').val();
  
      $('#result').text("id : " + userid + ", name : " + username);
    });
  });