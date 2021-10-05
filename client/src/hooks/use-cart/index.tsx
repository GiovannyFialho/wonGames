import { useContext, createContext, useState, useEffect } from "react";
import { getStorageItem } from "utils/localStorage";

const CART_KEY = "cartItems";

export type CartContextData = {
    items: string[];
};

export const CartContextDefaultValues = {
    items: []
};

export const CartContext = createContext<CartContextData>(
    CartContextDefaultValues
);

export type CartProviderProps = {
    children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItem, setCartItem] = useState<string[]>([]);

    useEffect(() => {
        const data = getStorageItem(CART_KEY);

        if (data) {
            setCartItem(data);
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                items: cartItem
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
