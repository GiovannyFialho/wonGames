import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import { initializeApollo } from "utils/apollo";

import { QueryGames, QueryGamesVariables } from "graphql/generated/QueryGames";
import {
    QueryGameBySlug,
    QueryGameBySlugVariables
} from "graphql/generated/QueryGameBySlug";
import { QueryRecommended } from "graphql/generated/QueryRecommended";
import { QueryUpcoming } from "graphql/generated/QueryUpcoming";

import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from "graphql/queries/games";
import { QUERY_RECOMMENDED } from "graphql/queries/recommended";
import { QUERY_UPCOMING } from "graphql/queries/upcoming";

import Game, { GameTemplateProps } from "templates/Game";

import { gamesMapper, hightlightMapper } from "utils/mappers";

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
    const router = useRouter();

    if (router.isFallback) return null;

    return <Game {...props} />;
}

export async function getStaticPaths() {
    const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
        query: QUERY_GAMES,
        variables: {
            limit: 9
        }
    });

    const paths = data.games.map(({ slug }) => ({
        params: { slug }
    }));

    return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Get games data
    const { data: gamesData } = await apolloClient.query<
        QueryGameBySlug,
        QueryGameBySlugVariables
    >({
        query: QUERY_GAME_BY_SLUG,
        variables: { slug: `${params?.slug}` }
    });

    if (!gamesData.games.length) {
        return { notFound: true };
    }

    const game = gamesData.games[0];

    // Get recommended data
    const {
        data: recommendedData
    } = await apolloClient.query<QueryRecommended>({
        query: QUERY_RECOMMENDED
    });

    // Get upcoming data
    const TODAY = new Date().toISOString().slice(0, 10);
    const { data: upcomingData } = await apolloClient.query<QueryUpcoming>({
        query: QUERY_UPCOMING,
        variables: {
            date: TODAY
        }
    });

    return {
        props: {
            revalidate: 60,
            cover: `http://localhost:1337${game.cover?.src}`,
            gameInfo: {
                title: game.name,
                price: game.price,
                description: game.short_description
            },
            gallery: game.gallery.map((image) => ({
                src: `http://localhost:1337${image.src}`,
                label: image.label
            })),
            description: game.description,
            details: {
                developer: game.developers[0].name,
                releaseDate: game.release_date,
                plataforms: game.platforms.map((plataform) => plataform.name),
                publisher: game.publisher?.name,
                rating: game.rating,
                genres: game.categories.map((categorie) => categorie.name)
            },
            upcomingTitle: upcomingData.showcase?.upcomingGames?.title,
            upcomingGames: gamesMapper(upcomingData.upcomingGames),
            upcomingHighlight: hightlightMapper(
                upcomingData.showcase?.upcomingGames?.highlight
            ),
            recommendedTitle: recommendedData.recommended?.section?.title,
            recommendedGames: gamesMapper(
                recommendedData.recommended?.section?.games
            )
        }
    };
};
