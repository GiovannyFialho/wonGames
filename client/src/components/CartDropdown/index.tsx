import { GameItemProps } from "components/GameItem";
import Dropdown from "components/Dropdown";
import CartIcon from "components/CartIcon";
import CartList from "components/CartList";

import { Wrapper } from "./styles";

export type CartDropdownProps = {
    items?: GameItemProps[];
    total?: string;
};

const CartDropdown = ({ items, total }: CartDropdownProps) => (
    <Wrapper>
        <Dropdown title={<CartIcon />}>
            <CartList items={items} total={total} hasButton />
        </Dropdown>
    </Wrapper>
);

export default CartDropdown;
