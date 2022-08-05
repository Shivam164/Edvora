import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import PageSwitch from './Components/PageSwitch';
import Rides from './Components/Rides';
import { FilterContext } from './Contexts/GlobalState';

const Homepage = () => {

    const {state, city, user, rides, setRides, nearest, upcoming, past} = useContext(FilterContext);
    
    // key is to give a key to each card while mapping through rides
    var _key = 0;

     // sorting functionality for nearest rides
     function calculateDistance(stationPath, currUserStation){
        var closesetDistance = 1000000;
        for(let station = 0; station < stationPath.length; station++){
            closesetDistance = Math.min(Math.abs(stationPath[station] - currUserStation), closesetDistance);
        }
        return closesetDistance; 
     }

     // Nearest rides
     const nearestRides = () => {
        var _rides = [];

        // copying rides in _rides
        for(let ride = 0;ride < rides.length;ride++){
            _rides.push(rides[ride]);
        }

        _rides.sort(function(x, y){
            var distance1 = calculateDistance(x.station_path, user.station_code);
            var distance2 = calculateDistance(y.station_path, user.station_code);
            if(distance1 > distance2) return 1;
            if(distance1 < distance2) return -1;
            return 0;
        });

        return _rides;
     }

     // Seperating past rides
     const pastRides = () => {
        var _rides = [];
        for(let ride = 0; ride < rides.length; ride++){
            if(Date.now() > Date.parse(rides[ride].date)){
                _rides.push(rides[ride]);
            }
        }
        console.log(rides);
        return _rides;
     }

     // Seperating upcoming rides
     const upcomingRides = () => {
        const _rides = [];
        for(let ride = 0; ride < rides.length; ride++){
            if(Date.now() < Date.parse(rides[ride].date)){
                _rides.push(rides[ride]);
            }
        }
        return _rides;
     }

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
            {rides && past && pastRides().map(ride => (
                <Rides 
                    id = {ride.id} 
                    origin_station_code = {ride.origin_station_code} 
                    station_path = {ride.station_path} 
                    date = {ride.date} 
                    image_src = {ride.map_url}
                    key = {_key++}
                    cityName = {ride.city}
                    stateName = {ride.state}
                    distance = {calculateDistance(ride.station_path, user.station_code)}
                />
            ))}
            {rides && upcoming && upcomingRides().map(ride => (
                <Rides 
                    id = {ride.id} 
                    origin_station_code = {ride.origin_station_code} 
                    station_path = {ride.station_path} 
                    date = {ride.date} 
                    image_src = {ride.map_url}
                    key = {_key++}
                    cityName = {ride.city}
                    stateName = {ride.state}
                    distance = {calculateDistance(ride.station_path, user.station_code)}
                />
            ))}
            {rides && nearest && nearestRides().map(ride => (
                <Rides 
                    id = {ride.id} 
                    origin_station_code = {ride.origin_station_code} 
                    station_path = {ride.station_path} 
                    date = {ride.date} 
                    image_src = {ride.map_url}
                    key = {_key++}
                    cityName = {ride.city}
                    stateName = {ride.state}
                    distance = {calculateDistance(ride.station_path, user.station_code)}
                />
            ))}
        </>
    );
}

export default Homepage;