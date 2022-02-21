import { categoria } from 'src/app/interfaces/categoria';

export interface ofertas{
    acept:string,
    client:string,
    idOffer:string,
    idService:string,
    owner:string,
    price:number,
    service: categoria,
    status:string
}