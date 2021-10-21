import { Meta, Story } from "@storybook/react/types-6-0";

import CartList from ".";

import mockItems from "./mock";

export default {
    title: "CartList",
    component: CartList,
    parameters: {
        backgrounds: {
            default: "won-dark"
        }
    },
    argTypes: {
        cartContextValue: {
            type: ""
        },
        items: {
            type: ""
        }
    }
} as Meta;

export const Basic: Story = (args) => (
    <div style={{ maxWidth: 600, margin: "auto" }}>
        <CartList {...args} />
    </div>
);

Basic.args = {
    total: "R$330,00",
    cartContextValue: {
        items: mockItems
    }
};

export const WithButton: Story = (args) => (
    <div style={{ maxWidth: 600, margin: "auto" }}>
        <CartList {...args} hasButton />
    </div>
);

WithButton.args = {
    total: "R$330,00",
    cartContextValue: {
        items: mockItems
    }
};

export const Empty: Story = () => (
    <div style={{ maxWidth: 600, margin: "auto" }}>
        <CartList />
    </div>
);
