import { Ciudad } from "./ciudad";
import { Cuarto } from "./cuarto";

export class Hotel {
    idHotel: number;
    nameHotel:string;
    cityDestination: Ciudad;
    addressHotel: string;
    logo: Blob;
    statusHotel: number;
    codeHotel: string;
    idRoom: Cuarto;
    lstRoom: Array<Hotel>;
}
