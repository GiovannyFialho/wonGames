import { Meta, Story } from "@storybook/react/types-6-0";

import CartDropdown from ".";
import itemsMock from "components/CartList/mock";

export default {
    title: "CartDropdown",
    component: CartDropdown,
    argTypes: {
        cartContextValue: {
            type: ""
        }
    },
    parameters: {
        backgrounds: {
            default: "won-dark"
        }
    }
} as Meta;

export const Basic: Story = (args) => (
    <div
        style={{
            maxWidth: "98%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem"
        }}
    >
        <CartDropdown {...args} />
    </div>
);

Basic.args = {
    cartContextValue: {
        items: itemsMock,
        quantity: itemsMock.length,
        total: "R$ 330,00"
    }
};

export const Empty: Story = () => (
    <div
        style={{
            maxWidth: "98%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem"
        }}
    >
        <CartDropdown />
    </div>
);
