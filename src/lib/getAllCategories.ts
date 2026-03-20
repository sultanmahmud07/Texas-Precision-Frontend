import { BASEURL } from "@/utils/constant";

export default async function getAllCategories(limit:number) {
    try {
        const response = await fetch(
            `${BASEURL}/category/retrieve/all?limit=${limit}`,
            {
                // cache: "no-store",
                 next: {
                    revalidate: 5,
                }
            }
        )
        const data = await response.json();
        return data || null;

    }
    catch (error) {
        console.log(error);
        throw new Error("There was an error fetching Categories Data!")
    }
}