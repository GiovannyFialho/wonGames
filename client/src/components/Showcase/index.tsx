import Heading from "components/Heading";
import Highlight, { HighlightProps } from "components/Highlight";
import GamecardSlider from "components/GamecardSlider";
import { GamecardProps } from "components/Gamecard";

import { Wrapper } from "./styles";

export type ShowcaseProps = {
    title?: string;
    highlight?: HighlightProps;
    gamecardSlider?: GamecardProps[];
    color?: "white" | "black";
};

const Showcase = ({
    title,
    highlight,
    gamecardSlider,
    color = "white"
}: ShowcaseProps) => (
    <Wrapper>
        {!!title && (
            <Heading lineLeft lineColor="secondary">
                {title}
            </Heading>
        )}

        {!!highlight && <Highlight {...highlight} />}
        {!!gamecardSlider && (
            <GamecardSlider items={gamecardSlider} color={color} />
        )}
    </Wrapper>
);

export default Showcase;
