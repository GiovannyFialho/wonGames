import Heading from "components/Heading";
import { PaymentCard } from "components/PaymentOptions";

import { Card } from "./styles";

export type CardsListProps = {
    cards?: PaymentCard[];
};

const Cardslist = ({ cards }: CardsListProps) => (
    <>
        <Heading color="black" lineColor="primary" size="small" lineBottom>
            My cards
        </Heading>

        {cards?.map((card) => (
            <Card key={card.number}>
                <img src={card.img} alt={card.flag} />
                <span>{card.number}</span>
            </Card>
        ))}
    </>
);

export default Cardslist;
