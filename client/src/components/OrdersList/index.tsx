import Empty from "components/Empty";
import GameItem, { GameItemProps } from "components/GameItem";
import Heading from "components/Heading";
import { Wrapper } from "./styles";

export type OrdersListProps = {
    items?: GameItemProps[];
};

const OrdersList = ({ items = [] }: OrdersListProps) => (
    <Wrapper>
        <Heading size="small" color="black" lineColor="primary" lineBottom>
            My orders
        </Heading>

        {items.length ? (
            items.map((item) => <GameItem key={item.downloadLink} {...item} />)
        ) : (
            <Empty
                title="You have no orders yet"
                description="Go back to the store and explore great games and offsers"
                hasLink
            />
        )}
    </Wrapper>
);

export default OrdersList;
