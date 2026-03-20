/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { cookies } from "next/headers";

export const addToCartAction = async (productPayload: any) => {
    try {
        const cookieStore = await cookies();
        const existingCartCookie = cookieStore.get("amkov_cart");
        
        let cart = [];
        if (existingCartCookie?.value) {
            cart = JSON.parse(existingCartCookie.value);
        }

        // Check if product with the exact same configuration (id + color) already exists
        const existingProductIndex = cart.findIndex(
            (item: any) => item.id === productPayload.id && item.color === productPayload.color
        );

        if (existingProductIndex > -1) {
            // Update quantity if it exists
            cart[existingProductIndex].quantity += productPayload.quantity;
        } else {
            // Add new product
            cart.push(productPayload);
        }

        // Save back to cookies (valid for 30 days)
        cookieStore.set("amkov_cart", JSON.stringify(cart), {
            httpOnly: false, // Set to false if you need to read it on the client side, true for strict server-side
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 30, 
            path: "/",
            sameSite: "lax",
        });

        return { success: true, message: "Product added to cart successfully!" };
    } catch (error) {
        console.error("Cart Error:", error);
        return { success: false, message: "Failed to add product to cart." };
    }
}