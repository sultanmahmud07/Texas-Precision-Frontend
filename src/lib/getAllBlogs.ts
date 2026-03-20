import { BASEURL } from "@/utils/constant";

export default async function getAllBlogs(limit:number) {
    try {
        const response = await fetch(
            `${BASEURL}/news/retrieve/all?page=1&limit=${limit}`,
            {
                // cache: "no-store"
                next: {
                    revalidate: 5,
                }
            }
        )
        const data = await response.json();
        return data || null;

    } catch (error) {
        console.log(error);
        throw new Error("There was an error fetching all latest news Data!")
    }
}