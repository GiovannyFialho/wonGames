import GamesTemplate, { GamesTemplateProps } from "templates/Games";

import { initializeApollo } from "utils/apollo";

import { QUERY_GAMES } from "graphql/queries/games";
import { QueryGames, QueryGamesVariables } from "graphql/generated/QueryGames";

import mockFilter from "components/ExploreSidebar/mock";

export default function GamesPage(props: GamesTemplateProps) {
    return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    await apolloClient.query<QueryGames, QueryGamesVariables>({
        query: QUERY_GAMES,
        variables: {
            limit: 15
        }
    });

    return {
        props: {
            revalidate: 60, // O método indica o intervalo de minutos em que a página será recriada.
            initialApolloState: apolloClient.cache.extract(),
            filterItems: mockFilter
        }
    };
}
