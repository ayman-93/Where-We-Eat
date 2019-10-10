import React from 'react';
import GetResturant from './GetResturant'
import "rbx/index.css";
import { Button } from "rbx";

import './App.css'
import Map from './Map'
import logo from '../Assesst/logo.png';
import { async } from 'q';

// {
// 	Ulat: "50.2017993"
// 	Ulon: "26.2716025"
// 	cat: "Café"
// 	catId: "4bf58dd8d48988d16d941735"
// 	error: "no"
// 	id: "5acf81a1c0cacb3aaf2dd43d"
// 	image: []
// 	lat: "26.303880298225"
// 	link: "https://foursquare.com/v/5acf81a1c0cacb3aaf2dd43d"
// 	lon: "50.202622091881"
// 	name: "Rural Caffe (رورال كافيه)"
// 	open: ""
// 	rating: "-1"
// }
class App extends React.Component {
	// const[defaultCenter, setDefaultCenter] = useState();
	// const[markerPosition, setMarkerPosition] = useState();
	state = {
		suggest: false,
		currentLocation: { lat: '', lng: '' },
		markerPosition: { lat: "", lng: "" },
		cat: "",
		name: "",
		link: "",
		open: "",
		rating: 0,
		image: [],
	}

	async componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(Position => {
				let lat = Position.coords.latitude;
				let lng = Position.coords.longitude;
				this.setState({ currentLocation: { lat, lng }, markerPosition: { lat, lng } }, async () => {
					let resturantData = await GetResturant(this.state.currentLocation)
					this.setState({ markerPosition: { lat: +resturantData.lat, lng: +resturantData.lon }, cat: resturantData.cat, name: resturantData.name, open: resturantData.open, rating: resturantData.rating, link: resturantData.link, image: resturantData.image })

				});
			});
		}


	}

	async getResturant() {
		let resturantData = await GetResturant(this.state.currentLocation)
		this.setState({ markerPosition: { lat: +resturantData.lat, lng: +resturantData.lon }, cat: resturantData.cat, name: resturantData.name, open: resturantData.open, rating: resturantData.rating, link: resturantData.link, image: resturantData.image })
	}
	render() {


		return (
			<div className="container">
				<div className="section">
					<img src={logo} />
					{this.state.suggest ?
						<div>
							<h1> {this.state.name}</h1>
							<Map markerPosition={this.state.markerPosition} currentLocation={this.state.currentLocation} />
							<Button className="btn" onClick={() => this.getResturant()}>اقتراح اخر</Button>
						</div>
						: <Button className="btn" onClick={() => {
							// this.getResturant()
							this.setState({ suggest: true })
						}}>اقترح</Button>}
				</div>
			</div>
		)
	}
}
export default App;

// marker { lat: -34.397, lng: 150.644 }
//default { lat: -34.397, lng: 150.644 }