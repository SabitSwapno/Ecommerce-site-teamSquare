import { useEffect, useState } from "react";
import { getStoredCart } from "../Utilities/LocalStorageDB";

const useCart = productx => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (productx?.length) {
            console.log("L S called");
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = productx.find(product => product._id == key);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

    }, [productx]);

    return [cart, setCart];
}

export default useCart;