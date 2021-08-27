import { Meta, Story } from "@storybook/react/types-6-0";
import { Email } from "@styled-icons/material-outlined";

import TextField, { TextFieldProps } from ".";

export default {
    title: "Form/TextField",
    component: TextField,
    args: {
        label: "E-mail",
        labelFor: "email",
        id: "email",
        initialValue: "",
        placeholder: "email@email.com"
    },
    argTypes: {
        onInput: { action: "changed" },
        icon: { type: "" }
    }
} as Meta;

export const Basic: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} />
    </div>
);

export const withIcon: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} />
    </div>
);

withIcon.args = {
    icon: <Email />
};

export const withError: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} />
    </div>
);

withError.args = {
    error: "ops.. um erro!",
    icon: <Email />
};
