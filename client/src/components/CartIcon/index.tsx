import { ShoppingCart } from "styled-icons/material-outlined";

import { useCart } from "hooks/use-cart";

import { Wrapper, Badge } from "./styles";

const CartIcon = () => {
    const { quantity } = useCart();

    return (
        <Wrapper>
            {quantity > 0 && <Badge aria-label="Cart items">{quantity}</Badge>}
            <ShoppingCart aria-label="Shopping Cart" />
        </Wrapper>
    );
};

export default CartIcon;
