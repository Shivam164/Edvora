import react, { useContext } from 'react';
import { FilterContext } from '../Contexts/GlobalState';
import Filter from "./Filter.js";
import '../Styles/PageSwitch.css'
// import SortIcon from '@mui/icons-material/Sort';

const PageSwitch = () => {

    const {nearest, upcoming, past, setNearest, setUpcoming, setPast} = useContext(FilterContext);

    const nearestRides = () => {
        setNearest(true);
        setUpcoming(false);
        setPast(false);
    }

    const upcomingRides = () => {
        setNearest(false);
        setUpcoming(true);
        setPast(false);
    }

    const pastRides = () => {
        setNearest(false);
        setUpcoming(false);
        setPast(true);
    }
    
    return (
        <div className='pages'>
            <div className='all_pages'>
                <h1 className={(nearest)? 'active' : '' } onClick={nearestRides}>Nearest rides</h1>
                <h1 className={(upcoming)? 'active' : '' } onClick={upcomingRides}>Upcoming rides</h1>
                <h1 className={(past)? 'active' : '' }  onClick={pastRides}>Past rides</h1>
            </div>

            <div className='filters'>
                {/* <h1>Filters</h1> */}
                <Filter/>
            </div>
        </div>
    );
}

export default PageSwitch;