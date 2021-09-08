import Base from "templates/Base";

import { BannerProps } from "components/Banner";
import { GamecardProps } from "components/Gamecard";
import { HighlightProps } from "components/Highlight";
import { Container } from "components/Container";
import BannerSlider from "components/BannerSlider";
import Showcase from "components/Showcase";

import { SectionBanner, SectionNews } from "./styles";

export type HomeTemplateProps = {
    banners: BannerProps[];
    newGamesTitle: string;
    newGames: GamecardProps[];
    mostPopularGamesTitle: string;
    mostPopularHighlight: HighlightProps;
    mostPopularGames: GamecardProps[];
    upcomingGamesTitle: string;
    upcomingGames: GamecardProps[];
    upcomingHighlight: HighlightProps;
    freeGamesTitle: string;
    freeGames: GamecardProps[];
    freeHighlight: HighlightProps;
};

const Home = ({
    banners,
    newGamesTitle,
    newGames,
    mostPopularGamesTitle,
    mostPopularHighlight,
    mostPopularGames,
    upcomingGamesTitle,
    upcomingGames,
    upcomingHighlight,
    freeGamesTitle,
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
            <Showcase
                title={newGamesTitle}
                gamecardSlider={newGames}
                color="black"
            />
        </SectionNews>

        <Showcase
            title={mostPopularGamesTitle}
            highlight={mostPopularHighlight}
            gamecardSlider={mostPopularGames}
        />

        <Showcase
            title={upcomingGamesTitle}
            highlight={upcomingHighlight}
            gamecardSlider={upcomingGames}
        />

        <Showcase
            title={freeGamesTitle}
            highlight={freeHighlight}
            gamecardSlider={freeGames}
        />
    </Base>
);

export default Home;
