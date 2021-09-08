import Base from "templates/Base";

import { BannerProps } from "components/Banner";
import { GamecardProps } from "components/Gamecard";
import { HighlightProps } from "components/Highlight";
import { Container } from "components/Container";
import BannerSlider from "components/BannerSlider";
import Showcase from "components/Showcase";

import { SectionBanner, SectionNews, SectionUpcoming } from "./styles";

export type HomeTemplateProps = {
    banners: BannerProps[];
    newGames: GamecardProps[];
    mostPopularHighlight: HighlightProps;
    mostPopularGames: GamecardProps[];
    upcomingGames: GamecardProps[];
    upcomingHighlight: HighlightProps;
    upcomingMoreGames: GamecardProps[];
    freeGames: GamecardProps[];
    freeHighlight: HighlightProps;
};

const Home = ({
    banners,
    newGames,
    mostPopularHighlight,
    mostPopularGames,
    upcomingGames,
    upcomingHighlight,
    upcomingMoreGames,
    freeGames,
    freeHighlight
}: HomeTemplateProps) => (
    <Base>
        <Container>
            <SectionBanner>
                <BannerSlider items={banners} />
            </SectionBanner>
        </Container>

        <SectionNews>
            <Showcase title="News" gamecardSlider={newGames} color="black" />
        </SectionNews>

        <Showcase
            title="Most Popular"
            highlight={mostPopularHighlight}
            gamecardSlider={mostPopularGames}
        />

        <SectionUpcoming>
            <Showcase title="Upcoming" gamecardSlider={upcomingGames} />

            <Showcase
                highlight={upcomingHighlight}
                gamecardSlider={upcomingMoreGames}
            />
        </SectionUpcoming>

        <Showcase
            title="Free Games"
            highlight={freeHighlight}
            gamecardSlider={freeGames}
        />
    </Base>
);

export default Home;
