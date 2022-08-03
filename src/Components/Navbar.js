import React, { useContext, useEffect } from 'react';
import '../Styles/Navbar.css';
import axios from 'axios';
import { FilterContext } from '../Contexts/GlobalState';

const Navbar = () => {

    const {user, setUser} = useContext(FilterContext);

    const fetchUserData = async() => {
        try{
            const { data } = await axios.get(
                "https://assessment.api.vweb.app/user"
            );
            console.log(data);
            setUser(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUserData();
    },[]);

    return(
        <div className="navbar_container">
            <h1 className= "navbar_logo">Edvora</h1>

            <div className="navbar_person_info">
                {user && <h2 className="navbar_person_name">{user.name}</h2>}
                {user && <img className='navbar_person_image' src = {user.url}/>}
            </div>
        </div>
    );
}

export default Navbar;