import { GetServerSidePropsContext } from "next";

import protectedRoutes from "utils/protected-routes";

import Wishlist, { WishlistTemplateProps } from "templates/Wishlist";

import { initializeApollo } from "utils/apollo";

import gamesMock from "components/GamecardSlider/mock";
import { QUERY_RECOMMENDED } from "graphql/queries/recommended";
import { QueryRecommended } from "graphql/generated/QueryRecommended";

import { gamesMapper, hightlightMapper } from "utils/mappers";

export default function wishlistPage(props: WishlistTemplateProps) {
    return <Wishlist {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await protectedRoutes(context);
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query<QueryRecommended>({
        query: QUERY_RECOMMENDED
    });

    return {
        props: {
            session,
            games: gamesMock,
            recommendedTitle: data.recommended?.section?.title,
            recommendedGames: gamesMapper(data.recommended?.section?.games),
            recommendedHighlight: hightlightMapper(
                data.recommended?.section?.highlight
            )
        }
    };
}
