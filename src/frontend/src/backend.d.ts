import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    country: string;
    name: string;
    company: string;
    message: string;
    timestamp: Time;
    products: ProductInterest;
}
export type Time = bigint;
export interface ProductInterest {
    hennaPowder: boolean;
    multaniMitti: boolean;
}
export interface backendInterface {
    countProductInterest(): Promise<[bigint, bigint]>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    getInquiriesByCountry(country: string): Promise<Array<Inquiry>>;
    getInquiryByTimestamp(timestamp: Time): Promise<Inquiry>;
    submitInquiry(name: string, company: string, country: string, hennaPowder: boolean, multaniMitti: boolean, message: string): Promise<void>;
}
