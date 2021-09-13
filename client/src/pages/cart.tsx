import Cart, { CartProps } from "templates/Cart";

import { initializeApollo } from "utils/apollo";

import itemsMock from "components/CartList/mock";
import cardsMock from "components/PaymentOptions/mock";
import gamesMock from "components/GamecardSlider/mock";
import highlightMock from "components/Highlight/mock";

import { gamesMapper, hightlightMapper } from "utils/mappers";

import { QueryRecommended } from "graphql/generated/QueryRecommended";
import { QUERY_RECOMMENDED } from "graphql/queries/recommended";

export default function CartPage(props: CartProps) {
    return <Cart {...props} />;
}

export async function getServerSideProps() {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query<QueryRecommended>({
        query: QUERY_RECOMMENDED
    });

    return {
        props: {
            items: itemsMock,
            total: "R$ 330,00",
            cards: cardsMock,
            recommendedTitle: data.recommended?.section?.title,
            recommendedGames: gamesMapper(data.recommended?.section?.games),
            recommendedHighlight: hightlightMapper(
                data.recommended?.section?.highlight
            )
        }
    };
}
