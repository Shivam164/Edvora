import axios from 'axios';
import react, { useContext, useEffect } from 'react';
import Navbar from './Components/Navbar';
import PageSwitch from './Components/PageSwitch';
import Rides from './Components/Rides';
import { FilterContext } from './Contexts/GlobalState';

const Homepage = () => {

    const {state, city, user, rides, setRides} = useContext(FilterContext);

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
            <Rides/>
        </>
    );
}

export default Homepage;