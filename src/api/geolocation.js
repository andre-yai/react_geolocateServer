const $ = require('jquery');

export function geolocation(name) {
	return new Promise((resolve,reject) => {
		$.ajax({
			type : 'GET',
			url : 'http://ip-api.com/json/'+name,
			success : function(response){
				if(response.status =="success"){
					return resolve(response);
				}
				else {
					return reject("This URL does not exist:");
				}
			},
			error: function(err){
				return reject("Connetion failed!!");
			}
		});
	});
}
