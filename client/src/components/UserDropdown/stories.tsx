import { Meta, Story } from "@storybook/react/types-6-0";

import UserDropdown, { UserDropdownProps } from ".";

export default {
    title: "UserDropdown",
    component: UserDropdown,
    parameters: {
        backgrounds: {
            default: "won-dark"
        }
    }
} as Meta;

export const Basic: Story<UserDropdownProps> = (args) => (
    <div
        style={{
            maxWidth: "98%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem"
        }}
    >
        <UserDropdown {...args} />
    </div>
);

Basic.args = {
    username: "Giovanny"
};
