import { Permisos } from "./permisos";
import { Role } from "./role";

export class Rolpermiso {
    idRolePerm:number;
    fk_idRole: number;
    fk_idPermission: number;
    roleDTO:Role;
    permissionDTO:Permisos;
}
