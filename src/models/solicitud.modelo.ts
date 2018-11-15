import { DateTime } from "ionic-angular";

export interface Solicitud{
    id?: string,
    createdAt : DateTime,
    horasPermiso : number,
    solicitudDescripcion : string,
    solicitudEstado : boolean,
    solicitudFecha : DateTime,
    tipoSolicitudId : string,
    usuarioId : string
}