import { Meta, Story } from "@storybook/react/types-6-0";
import { CartContextData } from "hooks/use-cart";

import GameInfo, { GameInfoProps } from ".";
import mockGames from "./mock";

export default {
    title: "Game/GameInfo",
    component: GameInfo,
    args: mockGames,
    parameters: {
        backgrounds: {
            default: "won-dark"
        }
    }
} as Meta;

export const Basic: Story<GameInfoProps> = (args) => (
    <div style={{ maxWidth: "144rem", margin: "auto", padding: "1.5rem" }}>
        <GameInfo {...args} />
    </div>
);

export const IsInCart: Story<GameInfoProps & CartContextData> = (args) => (
    <div style={{ maxWidth: "144rem", margin: "auto", padding: "1.5rem" }}>
        <GameInfo {...args} />
    </div>
);

IsInCart.args = {
    isInCart: () => true
};
