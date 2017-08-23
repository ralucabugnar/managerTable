$(document).ready(function () {
   $('#btnLoad').click(function () {
     $.getJSON('FreeDays.json', function (data) {
		 for(i in data){
			//console.log(data[i].name); 
		 }
		 for (var i=0;i<data.length;++i)
    {
    //now json variable contains data in json format
    //let's display a few items

    // we'll put all our html in here for now
    var html = '';
    for (var i=0;i<data.length;++i)
    {
      // if on first loop, create the col headers
      if(i===0){
        html += '<thead><tr>';
        $.each(data[i], function(key, value){
			console.log(key);
			
			if((key == "name") || (key == "position") || (key == "email")){
				 html += '<td>'+key+'</td>' ;
			}else if(key == "freeDays"){
				$.each(data[i].freeDays, function(key, value){
					console.log(key.days);
				});
				 html += '<td>'+key+'</td>' ;
			}
          });
        html += '</thead></tr>';
      }

      // loop through all the json objects and for every key add a column with the value
        html += '<tr>';
        $.each(data[i], function(key, value){
			//html += '<td>'+i+'</td>' ;
			if((key == "name") || (key == "position") || (key == "email")){
				html += '<td>'+value+'</td>' ;
			}else if(key == "freeDays"){
				console.log(value.days);
				html += '<td>'+value.days+'</td>' ;
			}
        });
      html += '</tr>';
    }
    // push all the html in one go to the page
    //$('#showData').append(html);
	 $('.table').append(html);
  }
    });
  });
 });