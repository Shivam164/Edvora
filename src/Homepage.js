import axios from 'axios';
import react, { useContext, useEffect } from 'react';
import Navbar from './Components/Navbar';
import PageSwitch from './Components/PageSwitch';
import { FilterContext } from './Contexts/GlobalState';

const Homepage = () => {

    const {state, city, user} = useContext(FilterContext);

    const fetchRidesData = async() => {
        try{
            const { data } = await axios.get(
                "https://assessment.api.vweb.app/rides"
            );
            console.log(data);
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
        </>
    );
}

export default Homepage;