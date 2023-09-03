/**
 * 
 * conteste de los lugares
 * es lo que queremos que los otros componentes queremos que miuestren
 */
import {createContext } from "react";

export interface PlacesContextProps{
    isLoading: boolean;
    userLocation?: [number,number];

}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);