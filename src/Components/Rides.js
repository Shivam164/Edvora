import { useContext } from "react";
import { FilterContext } from "../Contexts/GlobalState";
import '../Styles/Rides.css';
const Rides = () => {

    const {rides} = useContext(FilterContext);

    return (
        <div className="ride_card">
            {rides && <img className="ride_image" src = {rides[0].map_url}/>}
            {rides && 
                <div className="ride_detail">
                    <p>Ride id : {rides[0].id}</p>
                    <p>Origin Station : {rides[0].origin_station_code}</p>
                    <p>station_path : {toString(rides[0].station_path)}</p>
                    <p>Date : {rides[0].date}</p>
                    <p>Distance : 0</p>
                </div>
            }
            {rides && 
                <div className="ride_location">
                    <small>City Name</small>
                    <small>State Name</small>
                </div>
            }
        </div>
    );
}

export default Rides;