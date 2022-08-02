import Base from "templates/Base";
import GameInfo, { GameInfoProps } from "components/GameInfo";
import Gallery, { GalleryImageProps } from "components/Gallery";
import TextContent from "components/TextContent";
import GameDetails, { GameDetailsProps } from "components/GameDetails";

import Showcase from "components/Showcase";
import { GameCardProps } from "components/GameCard";
import { HighlightProps } from "components/Highlight";

import { Divider } from "components/Divider";

import {
    Cover,
    Main,
    SectionGameInfo,
    SectionGallery,
    SectionDescription,
    SectionGameDetails
} from "./styles";

export type GameTemplateProps = {
    cover: string;
    gameInfo: GameInfoProps;
    gallery?: GalleryImageProps[];
    description: string;
    details: GameDetailsProps;
    upcomingTitle: string;
    upcomingGames: GameCardProps[];
    upcomingHighlight: HighlightProps;
    recommendedTitle: string;
    recommendedGames: GameCardProps[];
};

const Game = ({
    cover,
    gameInfo,
    gallery,
    description,
    details,
    upcomingTitle,
    upcomingGames,
    upcomingHighlight,
    recommendedTitle,
    recommendedGames
}: GameTemplateProps) => (
    <Base>
        <Cover src={cover} role="image" aria-label="cover" />

        <Main>
            <SectionGameInfo>
                <GameInfo {...gameInfo} />
            </SectionGameInfo>

            <SectionGallery>
                {!!gallery && <Gallery items={gallery} />}
            </SectionGallery>

            <SectionDescription>
                <TextContent title="Description" content={description} />
            </SectionDescription>

            <SectionGameDetails>
                <GameDetails {...details} />

                <Divider />
            </SectionGameDetails>

            <Showcase
                title={upcomingTitle}
                highlight={upcomingHighlight}
                gamecardSlider={upcomingGames}
            />

            <Showcase
                title={recommendedTitle}
                gamecardSlider={recommendedGames}
            />
        </Main>
    </Base>
);

export default Game;
