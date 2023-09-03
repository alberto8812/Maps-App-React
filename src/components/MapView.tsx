import { useContext } from "react";
import { PlacesContext } from "../context";
import { Loading } from "./";
/**
 * 
 * punto donde se cargara la gelo localización
 */


export const MapView = () => {

    const {isLoading,userLocation}= useContext(PlacesContext);

  if(isLoading){
    return(<Loading/>)
  }

  return (
    <div>
      {userLocation?.join(',')}
    </div>
  )
}
