

function GetResturant(latLng) {
	const { lat, lng } = latLng;
	console.log("lat:", lat);
	console.log("lng:", lng);

	return fetch(`/api/v1/GenerateFS.php?uid=${lat},${lng}&get_param=value`)
		.then((data) => data.json())
		.then((resp) => resp)
		.catch((err) => console.log("err: ", err))
}

export default GetResturant;