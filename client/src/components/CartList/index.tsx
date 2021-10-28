import Link from "next/link";

import { useCart } from "hooks/use-cart";
import GameItem from "components/GameItem";
import Button from "components/Button";
import Empty from "components/Empty";
import Loader from "components/Loader";

import { Wrapper, WrapperLoading, Footer, Total } from "./styles";

export type CartListProps = {
    hasButton?: boolean;
};

const CartList = ({ hasButton = false }: CartListProps) => {
    const { items, total, loading } = useCart();

    if (loading) {
        return (
            <WrapperLoading>
                <Loader />
            </WrapperLoading>
        );
    }

    return (
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
};

export default CartList;
