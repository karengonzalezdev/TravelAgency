import { Aerolinea } from "./aerolinea";
import { Ciudad } from "./ciudad";

export class flight {
    idFlight:number;
    code:String;
    cost:String;
	departureTime:String;
	arrivalTime:String;
    fkIdCitieOrigin:Ciudad;
    fkIdCitieDestination:Ciudad;
    fkIdAirline:Aerolinea;
}
