import Link from "next/link";

import GameItem, { GameItemProps } from "components/GameItem";
import Button from "components/Button";

import { Wrapper, Footer, Total } from "./styles";
import Empty from "components/Empty";

export type CartListProps = {
    items?: GameItemProps[];
    total?: string;
    hasButton?: boolean;
};

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
    <Wrapper isEmpty={!items.length}>
        {items.length ? (
            <>
                {items.map((item) => (
                    <GameItem key={item.title} {...item} />
                ))}

                <Footer>
                    {!hasButton && <span>Total:</span>}
                    <Total>{total}</Total>
                    {hasButton && (
                        <Link href="/cart">
                            <Button as="a">Buy it now</Button>
                        </Link>
                    )}
                </Footer>
            </>
        ) : (
            <Empty
                title="Your card is empty"
                description="Go back to the store and explore great games and offers."
                hasLink
            />
        )}
    </Wrapper>
);

export default CartList;
