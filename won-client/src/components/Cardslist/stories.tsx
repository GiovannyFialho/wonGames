import { Meta, Story } from "@storybook/react/types-6-0";

import Cardslist, { CardsListProps } from ".";

import cardsMock from "components/PaymentOptions/mock";

export default {
    title: "Profile/Cardslist",
    component: Cardslist,
    args: {
        cards: cardsMock
    },
    argTypes: {
        cards: {
            type: ""
        }
    }
} as Meta;

export const Basic: Story<CardsListProps> = (args) => (
    <div style={{ maxWidth: 850, margin: "auto" }}>
        <Cardslist {...args} />
    </div>
);
