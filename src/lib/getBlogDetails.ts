import { BASEURL } from "@/utils/constant";

export default async function getBlogDetails(slug:string) {
    try {
        const response = await fetch(
            `${BASEURL}/news/retrieve/slug/${slug}`,
            // {
            //     cache: "no-store"
            // }
        )
        const data = await response.json();
        return data || null;

    }
    catch (error) {
        console.log(error);
        throw new Error("There was an error fetching Blog details!")
    }
}