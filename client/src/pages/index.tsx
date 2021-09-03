import Home, { HomeTemplateProps } from "templates/Home";

import bannerMock from "components/BannerSlider/mock";
import gamesMock from "components/GamecardSlider/mock";
import highlightMock from "components/Highlight/mock";
import { initializeApollo } from "utils/apollo";
import { QueryHome } from "graphql/generated/QueryHome";
import { QUERY_HOME } from "graphql/queries/home";

export default function Index(props: HomeTemplateProps) {
    return <Home {...props} />;
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    const {
        data: { banners, newGames }
    } = await apolloClient.query<QueryHome>({
        query: QUERY_HOME
    });

    return {
        props: {
            revalidate: 60,
            banners: banners.map((banner) => ({
                img: `http://localhost:1337${banner.image?.url}`,
                title: banner.title,
                subtitle: banner.subtitle,
                buttonLabel: banner.button?.label,
                buttonLink: banner.button?.link,
                ...(banner.ribbon && {
                    ribbon: banner.ribbon.text,
                    ribbonSize: banner.ribbon.size,
                    ribbonColor: banner.ribbon.color
                })
            })),
            newGames: newGames.map((newGame) => ({
                title: newGame.name,
                slug: newGame.slug,
                developer: newGame.developers[0].name,
                img: `http://localhost:1337${newGame.cover?.url}`,
                price: newGame.price
            })),
            mostPopularHighlight: highlightMock,
            mostPopularGames: gamesMock,
            upcomingGames: gamesMock,
            upcomingHighlight: highlightMock,
            upcomingMoreGames: gamesMock,
            freeGames: gamesMock,
            freeHighlight: highlightMock
        }
    };
}
