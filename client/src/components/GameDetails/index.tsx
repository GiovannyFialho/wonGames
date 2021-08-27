import MediaMatch from "components/MediaMatch";
import Heading from "components/Heading";

import { Apple, Windows, Linux } from "@styled-icons/fa-brands";

import {
    Wrapper,
    Content,
    Block,
    Label,
    Description,
    IconsWrapper,
    Icon
} from "./styles";

type Plataform = "windows" | "linux" | "mac";

type Rating = "BR0" | "BR10" | "BR12" | "BR14" | "BR16" | "BR18";

export type GameDetailsProps = {
    developer: string;
    releaseDate: string;
    plataforms: Plataform[];
    publisher: string;
    rating: Rating;
    genres: string[];
};

const GameDetails = ({
    developer,
    releaseDate,
    plataforms,
    publisher,
    rating,
    genres
}: GameDetailsProps) => {
    const plataformIcons = {
        windows: <Windows title="windows" size={18} />,
        linux: <Linux title="linux" size={18} />,
        mac: <Apple title="mac" size={18} />
    };

    return (
        <Wrapper>
            <MediaMatch greaterThan="small">
                <Heading lineLeft lineColor="secondary">
                    Game Details
                </Heading>
            </MediaMatch>

            <Content>
                <Block>
                    <Label>Developer</Label>
                    <Description>{developer}</Description>
                </Block>

                <Block>
                    <Label>Release Date</Label>
                    <Description>
                        {new Intl.DateTimeFormat("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                        }).format(new Date(releaseDate))}
                    </Description>
                </Block>

                <Block>
                    <Label>Platforms</Label>
                    <IconsWrapper>
                        {plataforms.map((icon: Plataform, index) => (
                            <Icon key={index}>{plataformIcons[icon]}</Icon>
                        ))}
                    </IconsWrapper>
                </Block>

                <Block>
                    <Label>Publisher</Label>
                    <Description>{publisher}</Description>
                </Block>

                <Block>
                    <Label>Rating</Label>
                    <Description>
                        {rating === "BR0" ? "FREE" : rating.replace("BR", "+")}
                    </Description>
                </Block>

                <Block>
                    <Label>Genres</Label>
                    <Description>{genres.join(" / ")}</Description>
                </Block>
            </Content>
        </Wrapper>
    );
};

export default GameDetails;
