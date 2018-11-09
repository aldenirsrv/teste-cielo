import { IADDRESS } from './address.model'
export interface IUSER {
    id?: number;
    name: string;
    username: string;
    email: string;
    address: IADDRESS;
    phone: string;
    website: string;
    compay: ICOMPANY
}
export interface ICOMPANY {
    name: string;
    catchPhrase: string;
    bs: string
}