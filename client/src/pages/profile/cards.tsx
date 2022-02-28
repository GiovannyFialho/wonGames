import { GetServerSidePropsContext } from "next";

import protectedRoutes from "utils/protected-routes";

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await protectedRoutes(context);

    return {
        props: {
            session,
            cards: cardsMock
        }
    };
}
