import { Meta, Story } from "@storybook/react/types-6-0";

import PaymentOptions, { PaymentOptionsProps } from ".";

import cardsMock from "./mock";

export default {
    title: "Payment/PaymentOptions",
    component: PaymentOptions,
    args: {
        cards: cardsMock
    },
    parameters: {
        backgrounds: {
            default: "won-dark"
        }
    },
    argTypes: {
        cards: {
            type: ""
        },
        handlePayment: {
            action: "clicked"
        }
    }
} as Meta;

export const Basic: Story<PaymentOptionsProps> = (args) => (
    <div style={{ margin: "auto", maxWidth: 400, padding: 16 }}>
        <PaymentOptions {...args} />
    </div>
);
