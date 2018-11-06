

var url;


var key = 'lTE9cy7p9EmshOlbGT7LwB9xnCi5p1D2AEijsndhriT9RGvHcH'; 

// add the following code to require the RapidAPI SDK
var RapidAPI = new require('rapidapi-connect');
var rapid = new RapidAPI('volcanovideo_5be05406e4b09efa5fbce995', '/connect/auth/volcanovideo_5be05406e4b09efa5fbce995');
// var runSearch = function(){
// 	$.getJSON( url, function( data ) {
// 		if(data.query.search){
// 		  $('.results').empty()
// 		  var results = data.query.search
// 		  for (var i = 0; i <= results.length - 1; i++) {
// 		  	var title = results[i]['title']
// 		  	var description = results[i]['snippet']
// 		  	var currenthtml = $('.results').html()
// 		  	$('.results').html(currenthtml + '<h1>'+ title + '</h1><p>' + description + '</p>')
// 		  }
// 		} else {
// 			$('.results').html('no results')
// 		}

// 	});
// }

// $('button').on('click', function(){
// 	url = 'http://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&srsearch=' + $('input').val()
// 	runSearch()
// })

rapid.call('PackageName', 'FunctionName', { 
	'ParameterKey1': 'ParameterValue1',
	'ParameterKey2': 'ParameterValue2',
}).on('success', function (payload) {
	 /*YOUR CODE GOES HERE*/ 
}).on('error', function (payload) {
	 /*YOUR CODE GOES HERE*/ 
});



