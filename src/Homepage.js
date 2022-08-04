import axios from 'axios';
import react, { useContext, useEffect } from 'react';
import Navbar from './Components/Navbar';
import PageSwitch from './Components/PageSwitch';
import Rides from './Components/Rides';
import { FilterContext } from './Contexts/GlobalState';

const Homepage = () => {

    const {state, city, user, rides, setRides} = useContext(FilterContext);
    var _key = 0;

    const fetchRidesData = async() => {
        try{
            const { data } = await axios.get(
                "https://assessment.api.vweb.app/rides"
            );
            console.log(data);
            setRides(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchRidesData();
    },[]);

    return (
        <>
            <Navbar/>
            <PageSwitch/>
            {rides && rides.map(ride => (
                <Rides 
                    id = {ride.id} 
                    origin_station_code = {ride.origin_station_code} 
                    station_path = {ride.station_path} 
                    date = {ride.date} 
                    image_src = {ride.map_url}
                    key = {_key++}
                    cityName = {ride.city}
                    stateName = {ride.state}
                />
            ))}
        </>
    );
}

export default Homepage;