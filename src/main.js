const GetInfo = () => {
	fetch('https://raw.githubusercontent.com/Rooyca/1001M/master/current.json')
		.then(response => response.json())
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			console.error('Error:', error);
		});
}
GetInfo();