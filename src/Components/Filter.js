import { useContext } from "react";
import { FilterContext } from "../Contexts/GlobalState";

const Filter = () => {

    const {allState, allCity} = useContext(FilterContext);

    return (
        <div>
            <h1>Filters</h1>
            <select name = "State">
                {allState && allState.map(state => (
                    <option value = {state} key = {state}>{state}</option>
                ))}
            </select>
            <select name = "City">
                {allCity && allCity.map(city => (
                    <option value = {city} key = {city}>{city}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter;