import GamesTemplate, { GamesTemplateProps } from "templates/Games";

import mockFilter from "components/ExploreSidebar/mock";
import { initializeApollo } from "utils/apollo";
import { gql } from "@apollo/client";

export default function GamesPage(props: GamesTemplateProps) {
    return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query({
        query: gql`
            query GetGame {
                games {
                    name
                    slug
                    cover {
                        url
                    }
                    developers {
                        name
                    }
                    price
                }
            }
        `
    });

    return {
        props: {
            revalidate: 60, // O método indica de quanto em quanto tempo a página será regerada.
            games: data.games.map((game) => ({
                title: game.name,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover.url}` || "",
                price: new Intl.NumberFormat("en", {
                    style: "currency",
                    currency: "USD"
                }).format(game.price)
            })),
            filterItems: mockFilter
        }
    };
}
