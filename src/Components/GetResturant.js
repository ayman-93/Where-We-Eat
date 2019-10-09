import React, { useEffect } from 'react';


function GetResturant(){

	useEffect(() => {
		console.log('mounted')
		
		fetch("https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value",{mode: 'cors'})
    .then((data) => data.json())
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err))
	}, []);

	return(<h1> new Resturn is here </h1>)
}

export default GetResturant;