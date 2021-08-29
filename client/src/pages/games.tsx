import GamesTemplate, { GamesTemplateProps } from "templates/Games";

import { initializeApollo } from "utils/apollo";

import { QUERY_GAMES } from "graphql/queries/games";

import mockFilter from "components/ExploreSidebar/mock";
import { GetGame, GetGameVariables } from "graphql/generated/GetGame";

export default function GamesPage(props: GamesTemplateProps) {
    return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query<GetGame, GetGameVariables>({
        query: QUERY_GAMES,
        variables: {
            limit: 9
        }
    });

    return {
        props: {
            revalidate: 60, // O método indica o intervalo de minutos em que a página será recriada.
            games: data.games.map((game) => ({
                slug: game.slug,
                title: game.name,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover!.url}`,
                price: new Intl.NumberFormat("en", {
                    style: "currency",
                    currency: "USD"
                }).format(game.price)
            })),
            filterItems: mockFilter
        }
    };
}
