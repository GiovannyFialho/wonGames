import { Meta, Story } from "@storybook/react/types-6-0";

import Gamecard, { GamecardProps } from ".";

export default {
    title: "Game/Gamecard",
    component: Gamecard,
    args: {
        title: "Population Zero",
        developer: "Rockstar Games",
        img: "https://source.unsplash.com/user/willianjusten/300x140",
        price: "R$235,00",
        promotionalPrice: "R$50,00"
    },
    argTypes: {
        onFav: {
            action: "cliked"
        },
        ribbon: {
            type: "string"
        }
    },
    parameters: {
        backgrounds: {
            default: "won-dark"
        }
    }
} as Meta;

export const Basic: Story<GamecardProps> = (args) => (
    <div style={{ maxWidth: "30rem", margin: "0 auto" }}>
        <Gamecard {...args} />
    </div>
);

export const WithRibbon: Story<GamecardProps> = (args) => (
    <div style={{ maxWidth: "30rem", margin: "0 auto" }}>
        <Gamecard {...args} />
    </div>
);

WithRibbon.args = {
    ribbon: "20% OFF",
    ribbonSize: "small",
    ribbonColor: "primary"
};
