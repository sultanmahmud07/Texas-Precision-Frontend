import { BASEURL } from "@/utils/constant";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function getProductsByCategory(searchParams: any) {
  try {
    const params = new URLSearchParams();

    // ✅ Required: Always include page and limit (with default values if not set)
    params.set("page", searchParams?.page || "1");
    params.set("limit", searchParams?.limit || "9");


// console.log("My_Specs:", searchParams?.specs);
// console.log("My_Tags:", searchParams?.tags);
    // ✅ Optional query filters
    if (searchParams?.category) params.set("category", searchParams.category);
    if (searchParams?.viewOnRootPage) params.set("viewOnRootPage", searchParams.viewOnRootPage);
    if (searchParams?.specs) params.set("specs", searchParams.specs);
    if (searchParams?.tags) params.set("tags", searchParams.tags);
    if (searchParams?.inStock) params.set("inStock", searchParams.inStock);
    if (searchParams?.minPrice) params.set("minPrice", searchParams.minPrice);
    if (searchParams?.maxPrice) params.set("maxPrice", searchParams.maxPrice);
    if (searchParams?.sortBy) params.set("sortBy", searchParams.sortBy);
    if (searchParams?.sortOrder) params.set("sortOrder", searchParams.sortOrder);
    const url = `${BASEURL}/product/retrieve/all?${params.toString()}`;

    const response = await fetch(url, {
      cache: "no-store",
    });

    const data = await response.json();
    return data || null;

  } catch (error) {
    console.error("Product fetch error:", error);
    throw new Error("Error fetching product by quries!");
  }
}
