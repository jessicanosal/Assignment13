$(document).ready(function(){

		$.ajax({
		'url':"https://swapi.co/api/people/",
		type: "GET", 
		dataType: "JSON",
			
		success:function(data){
			console.log(data);
			// Luke
			$("#luke").click(function(){
				var name = data.results[0].name;
				var height= data.results[0].height;
				var mass= data.results[0].mass;
				var eye = data.results[0].eye_color;
				var hair= data.results[0].hair_color;

				var nameHeader= $("<h1>" + name + "</h1>" );
				$("#infoLuke").append(nameHeader);

				var heightHeader= $("<h2>" + height + " cm" + "</h2>" );
				$("#infoLuke").append(heightHeader);

				var massHeader= $("<h2>" + mass + " kg" + "</h2>" );
				$("#infoLuke").append(massHeader);

				var eyeHeader= $("<h2>" + "Eye color is " + eye + "</h2>" );
				$("#infoLuke").append(eyeHeader);

				var hairHeader= $("<h2>" + "Hair color is "+ hair + "</h2>" );
				$("#infoLuke").append(hairHeader);

			})

			// leia
			$("#leia").click(function(){
				var name = data.results[4].name;
				var height= data.results[4].height;
				var mass= data.results[4].mass;
				var eye = data.results[4].eye_color;
				var hair= data.results[4].hair_color;

				var nameHeader= $("<h1>" + name + "</h1>" );
				$("#infoLeia").append(nameHeader);

				var heightHeader= $("<h2>" + height + " cm" + "</h2>" );
				$("#infoLeia").append(heightHeader);

				var massHeader= $("<h2>" + mass + " kg" + "</h2>" );
				$("#infoLeia").append(massHeader);

				var eyeHeader= $("<h2>" + "Eye color is " + eye + "</h2>" );
				$("#infoLeia").append(eyeHeader);

				var hairHeader= $("<h2>" + "Hair color is "+ hair + "</h2>" );
				$("#infoLeia").append(hairHeader);

			})

			// darth
			$("#darth").click(function(){
				var name = data.results[3].name;
				var height= data.results[3].height;
				var mass= data.results[3].mass;
				var eye = data.results[3].eye_color;
				var hair= data.results[3].hair_color;

				var nameHeader= $("<h1>" + name + "</h1>" );
				$("#infoDarth").append(nameHeader);

				var heightHeader= $("<h2>" + height + " cm" + "</h2>" );
				$("#infoDarth").append(heightHeader);

				var massHeader= $("<h2>" + mass + " kg" + "</h2>" );
				$("#infoDarth").append(massHeader);

				var eyeHeader= $("<h2>" + "Eye color is " + eye + "</h2>" );
				$("#infoDarth").append(eyeHeader);

				var hairHeader= $("<h2>" + "Hair color is "+ hair + "</h2>" );
				$("#infoDarth").append(hairHeader);

			})

			
			},
			error: function(error, textStatus, errorThrown){
				console.log("welp you tried");
				console.log(errorThrown)
			}

			})

})
