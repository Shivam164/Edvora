import react from 'react';
import '../Styles/PageSwitch.css'
// import SortIcon from '@mui/icons-material/Sort';

const PageSwitch = () => {
    return (
        <div className='pages'>
            <div className='all_pages'>
                <h1 className='page_nearest_rides'>Nearest rides</h1>
                <h1 className='page_nearest_rides'>Upcoming rides</h1>
                <h1 className='page_past_rides'>Past rides</h1>
            </div>

            <div className='filters'>
                <h1>Filters</h1>
                {/* <SortIcon/> */}
            </div>
        </div>
    );
}

export default PageSwitch;