import { PlacesState } from "./PlacesProvider";

/**
 * el estado debe retornar algo on la misma 
 * configuracion del place state
 */
type placesAction={
    type:'setUserLocation',payload:[number,number]
}

export const PlacesReducer=(state:PlacesState,action:placesAction):PlacesState=>{
    switch (action.type) {
        case 'setUserLocation':
            
            return {
                ...state,
                isLoading:false,
                userLocation: action.payload
            }; 
    
        default:
            return state;
           
    }

}