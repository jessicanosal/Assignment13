$(document).ready(function(){

	$.ajax({
		'url':"http https://swapi.co/api/people/",
		type: "GET", 
		dataType: "JSON",
		data:{
			'api-key':"",
			'q':"",
		},
		success:function(data){
			console.log(data);
		},
		error: function(error, textStatus, errorThrown){
			console.log("welp you tried");
			console.log(errorThrown)
		}

	})
})