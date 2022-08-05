import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../Contexts/GlobalState";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

const Filter = () => {

    const {rides, allState, allCity, state, setCity, setState} = useContext(FilterContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [filteredCity, setFilteredCity] = useState(null);

    useEffect(() => {
        const _allCity = [];
        if(!state){
            setFilteredCity(allCity);
            return;
        }
        for(let ride = 0;ride < rides.length;ride++){
            if(rides[ride].state == state){
                _allCity.push(rides[ride].city);
            }
        }
        console.log("here");
        setFilteredCity(_allCity);
    }, [state]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    var __key = 100;

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx = {{
                    color :'#ffffff'
                }}
            >
                Filters
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <select onChange = {e => {setState(e.target.value); setCity("")}}>
                    {allState && allState.map(state => (
                        <option value = {state} key = {state} className="state">{state}</option>
                    ))}
                </select>
                {filteredCity && <select onChange = {e => setCity(e.target.value)}>
                    {filteredCity.map(city => (
                        <option value = {city} key = {__key++} className="city" >{city}</option>
                    ))}
                </select>}
                {!filteredCity && <select onChange = {e => {setCity(e.target.value); console.log(e.target.value)}}>
                    {allCity && allCity.map(city => (
                        <option value = {city} key = {__key++} className="city" >{city}</option>
                    ))}
                </select>}
            </Menu>
        </div>
    )
}

export default Filter;