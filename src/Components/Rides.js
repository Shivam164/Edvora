import { useContext } from "react";
import { FilterContext } from "../Contexts/GlobalState";
import '../Styles/Rides.css';

const Rides = ({id, origin_station_code, station_path, date, image_src, cityName, stateName, distance}) => {

    const {rides} = useContext(FilterContext);

    return (
        <div className="ride_card">
            {rides && <img className="ride_image" src = {image_src}/>}
            {rides && 
                <div className="ride_detail">
                    <p>Ride id : {id}</p>
                    <p>Origin Station : {origin_station_code}</p>
                    <p>station_path : {station_path}</p>
                    <p>Date : {date}</p>
                    <p>Distance : {distance}</p>
                </div>
            }
            {rides && 
                <div className="ride_location">
                    <small>{cityName}</small>
                    <small>{stateName}</small>
                </div>
            }
        </div>
    );
}

export default Rides;