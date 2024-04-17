import { Aerolinea } from "./aerolinea";
import { Ciudad } from "./ciudad";

export class Prueba {
    idFlight:number;
    code:String;
    cost:number;
    status:number;
	departureTime:Date;
	arrivalTime:Date;
    fkIdCitieOrigin:Ciudad;
    fkIdCitieDestination:Ciudad;
    fkIdAirline:Aerolinea;
    idCitieDestination: number;
    idCitieOrigin:number;
}
