import { Story, Meta } from "@storybook/react/types-6-0";

import { GamecardProps } from "components/Gamecard";
import GameCardSlider from ".";
import items from "./mock";

export default {
    title: "Game/GameCardSlider",
    component: GameCardSlider,
    args: { items },
    parameters: {
        layout: "fullscreen",
        backgrounds: {
            default: "won-dark"
        }
    }
} as Meta;

export const Basic: Story<GamecardProps[]> = (args) => (
    <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
        <GameCardSlider items={args} {...args} />
    </div>
);
