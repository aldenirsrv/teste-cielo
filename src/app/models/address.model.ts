export interface IADDRESS {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGEO
}
export interface IGEO {
    "lat": string;
    "lng": string;
}