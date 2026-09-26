
import { Product } from "@/app/typs/prodcutINterface";

export async function getallprodcut(): Promise<Product[] | null> {

    try {
const rep = await fetch("https://ecommerce.routemisr.com/api/v1/products");
const data = await rep.json();
return data.data;

    } catch (error) {
        console.log(error);
        return null

    }
}
export async function prodcutdetils(id:string) {

    try {
const rep = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
const datadetils = await rep.json();
return datadetils

    } catch (error) {
        console.log(error);
        return null

    }
}