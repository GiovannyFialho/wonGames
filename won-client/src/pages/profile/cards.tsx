import Profile from "templates/Profile";
import Cardslist, { CardsListProps } from "components/Cardslist";

import cardsMock from "components/PaymentOptions/mock";

export default function Cards({ cards }: CardsListProps) {
    return (
        <Profile>
            <Cardslist cards={cards} />
        </Profile>
    );
}

export function getServerSideProps() {
    return {
        props: {
            cards: cardsMock
        }
    };
}
