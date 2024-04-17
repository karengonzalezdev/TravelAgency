import { Cuarto } from "./cuarto";
import { flight } from "./flight";
import { Prueba } from "./prueba";
import { Usuario } from "./usuario";

export class Reservaciones {
    idReservation: number;
    name:string;
    lastNameDad:string;
    lastNameMom: string;
    description: string;
    createDate: Date;
    startDate:Date;
    endDate:Date;
    flight:Prueba;
    room:Cuarto;
    user:Usuario;
}
