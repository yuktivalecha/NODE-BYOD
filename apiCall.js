const https = require('https');

_EXTERNAL_URL = "https://openspeedtest.com/Get-widget.php?Auto=1";

const callNetworkAPiUsingHttps = (callback) => {
	console.log("In function ");
	https.get(_EXTERNAL_URL , (resp) => {
		let data = '';
		
		resp.on('data', (chunk) => {
			console.log("Working on data ");
			data+=chunk;
		})
		
		resp.on('end', (chunk) => {
			data+=chunk;
		})
		
		resp.on('error', (err) => {
			console.log("Error :", err.message);
		})
	})
}

module.exports.networkStat = callNetworkAPiUsingHttps 