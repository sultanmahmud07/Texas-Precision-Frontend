import { BASEURL } from "@/utils/constant";

export default async function getProductDetails(slug:string) {
    try {
        const response = await fetch(
            `${BASEURL}/product/retrieve/${slug}`,
            // {
            //     cache: "no-store"
            //     // next: {
            //     //     revalidate: 5,
            //     // }
            // }
        )
        const data = await response.json();
        return data.data || null;

    }
    catch (error) {
        console.log(error);
        throw new Error("There was an error fetching product details!")
    }
}