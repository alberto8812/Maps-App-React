import { useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { PlacesReducer } from "./PlacesReducer";
import { getUserLocation } from "../../helper";


/**
 * definir como queremos el estado
 * 
 */
export interface PlacesState{
    isLoading: boolean;
    userLocation?: [number,number];
}

const Initaial_state: PlacesState ={
    isLoading: true,
    userLocation:undefined

}

interface Props{
    children:JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({children}:Props) => {
    const [state, dispatch] = useReducer(PlacesReducer, Initaial_state);


useEffect(() => {
    /**
     * obtener la geolocalitacion
     * se crea un helper
     */
    getUserLocation()
    .then((lngLat)=>dispatch({type: 'setUserLocation',payload:lngLat}))
}, [])

console.log(state)
  return (
    <PlacesContext.Provider value={{
     ...state //esparso el state del provideer  por todos los hijos  
    }
    }>
    
        {children}
    </PlacesContext.Provider>
  )
}
