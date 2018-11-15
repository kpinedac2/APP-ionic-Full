import { DateTime } from "ionic-angular";

export interface Solicitud2{
    id?: string,
    horasPermiso : number,
    solicitudDescripcion : string,
    solicitudEstado : boolean,
    solicitudFecha : DateTime,
    tipo_solicitud_id : string,
    usuario_id : string
}