
//checks given username matchs the password
function authenticate(username, password) {
	
	var jqXHR = $.ajax({
		method : "POST",
		url : 'trickoreat-api/select.php',

		//put your query here
		data : { query : "SELECT password FROM accountTable WHERE email=" + username },

		datatype : 'json',
		async : false
	});
}

function testSelect() {
	//dicks in ass
	//POST request
	var jqXHR = $.ajax({
		method : "POST",
		url : 'trickoreat-api/select.php',

		//put your query here
		data : { query : "SELECT * FROM fuckthisshit" },

		datatype : 'json',
		async : false
	});

	//return values (processed or un-processed) to caller here
	console.log(jqXHR.responseText);
}

function testInsert() {

	//POST request
	$.ajax({
		method : "POST",
		url : 'trickoreat-api/insert.php',

		//put your query here
		data : { query : "INSERT INTO fuckthisshit (asshole) VALUES ('shit')" },

		success : function() {
			console.log("Insert success");
		}
	});
}

testSelect();