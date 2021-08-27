import Home, { HomeTemplateProps } from "templates/Home";

import bannerMock from "components/BannerSlider/mock";
import gamesMock from "components/GamecardSlider/mock";
import highlightMock from "components/Highlight/mock";

export default function Index(props: HomeTemplateProps) {
    return <Home {...props} />;
}

export async function getServerSideProps() {
    return {
        props: {
            banners: bannerMock,
            newGames: gamesMock,
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
