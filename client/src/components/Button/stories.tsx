import { Meta, Story } from "@storybook/react/types-6-0";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

import Button, { ButtonProps } from ".";

export default {
    title: "Button",
    component: Button,
    argTypes: {
        children: {
            type: "string"
        },
        icon: {
            type: ""
        }
    }
} as Meta;

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />;

Basic.args = {
    children: "Buy now"
};

export const widthIcon: Story<ButtonProps> = (args) => <Button {...args} />;

widthIcon.args = {
    size: "small",
    children: "Buy now",
    icon: <AddShoppingCart />
};

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />;

asLink.args = {
    size: "large",
    children: "Buy now",
    as: "a",
    href: "/link"
};
