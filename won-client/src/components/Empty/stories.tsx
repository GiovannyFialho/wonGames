import { Meta, Story } from "@storybook/react/types-6-0";

import Empty, { EmptyProps } from ".";

export default {
    title: "Empty",
    component: Empty,
    parameters: {
        backgrounds: {
            default: "won-dark"
        }
    }
} as Meta;

export const Basic: Story<EmptyProps> = (args) => (
    <div style={{ maxWidth: "30rem", margin: "auto" }}>
        <Empty {...args} />
    </div>
);

Basic.args = {
    title: "Your wishlist is empty",
    description: "Games added to your wishlist will appear here",
    hasLink: true
};
