/**
 * va a ser asincrona 
 * la declaramos como una promesa
 */
export const getUserLocation= async ():Promise<[number,number]> =>{
    return new Promise(
        (resolve,reject)=>{
            navigator.geolocation.getCurrentPosition(
                /**
                 * si todo sale bien
                 * vamos obtener un objetipo 
                 * tipo posicion
                 */
                ({coords})=>{
                    resolve([coords.longitude, coords.latitude])
                },
                (err)=>{
                    alert('No se Pudo Obtener la geolocalizacion');
                    console.log(err);
                }

            )
        }
    );
    
}