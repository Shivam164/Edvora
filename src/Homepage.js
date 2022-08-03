import axios from 'axios';
import react, { useContext, useEffect } from 'react';
import Navbar from './Components/Navbar';
import { FilterContext } from './Contexts/GlobalState';

const Homepage = () => {

    const {state, city} = useContext(FilterContext);

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

    // useEffect(() => {

    // },[state, city])


    return (
        <>
            <Navbar/>
        </>
    );
}

export default Homepage;