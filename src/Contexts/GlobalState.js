import {useState, createContext} from 'react';

export const FilterContext = createContext();

export const FilterContextProvider = (props) => {
    
      const [state,setState] = useState("");
      const [city,setCity] = useState("");
      const [user, setUser] = useState(null);
      const [rides, setRides] = useState(null);

      return(
          <FilterContext.Provider value = {{state, setState, city, setCity, user, setUser, rides, setRides}}>
              {props.children}
          </FilterContext.Provider>
      )
}