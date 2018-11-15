import { DateTime } from "ionic-angular";

export interface CreditoComprobar{
    id? : string,
    creditoTotal: number,
    creditoPendiente: number,
    clientel_id: string,
    venta_id: string
}