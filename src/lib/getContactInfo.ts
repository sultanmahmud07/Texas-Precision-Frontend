import { BASEURL } from "@/utils/constant";

export default async function getContactInfo() {
    try {
        const response = await fetch(
            `${BASEURL}/web-setting/contact-us/retrieve`,
            {
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
        throw new Error("There was an error fetching contact info Data!")
    }
}