export interface Producto{
    _id? : string,
    productoCodigo : string,
    productoNombre	: string,
    vencimiento : Date,
    precioCompra : number,
    precioVenta : number,
    disponibles : string,
    alerta : number,
    categoria_id : string,
    marca_id : string,
    proveedor_id : string

}