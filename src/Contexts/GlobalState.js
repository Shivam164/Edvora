import {useState, createContext} from 'react';

export const FilterContext = createContext();

export const FilterContextProvider = (props) => {
    
      const [state,setState] = useState("");
      const [city,setCity] = useState("");
      const [user, setUser] = useState(null);
      const [rides, setRides] = useState(null);
      const [nearest, setNearest] = useState(true);
      const [upcoming, setUpcoming] = useState(false);
      const [past, setPast] = useState(false);
      const [allState, setAllState] = useState(null);
      const [allCity, setAllCity] = useState(null);

      return(
          <FilterContext.Provider value = {{state, setState, city, setCity, user, setUser, rides, setRides, nearest, upcoming, past, setNearest, setUpcoming, setPast, allState, setAllState, allCity, setAllCity}}>
              {props.children}
          </FilterContext.Provider>
      )
}