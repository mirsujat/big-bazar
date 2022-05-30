import {useQuery} from "react-query";


type Rating = {
    rate: number;
    count: number;
}

type ProductType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    rating: Rating;
    amount: number;
}

const getProducts = async (): Promise<ProductType[]> =>

     await(await fetch("https://fakestoreapi.com/products")).json();


     export const useFetchData = () => {
         const {  data, isError, error, isLoading } = useQuery("products", getProducts);

         return {  data, isError, error, isLoading };
     }