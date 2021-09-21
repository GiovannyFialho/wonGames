import { Meta, Story } from "@storybook/react/types-6-0";

import ExploreSidebar, { ExploreSidebarProps } from ".";

import itemsMock from "./mock";
export default {
    title: "ExploreSidebar",
    component: ExploreSidebar,
    args: {
        items: itemsMock,
        onFilter: () => {
            console.log("filter");
        }
    },
    argTypes: {
        items: {
            type: ""
        }
    },
    parameters: {
        backgrounds: {
            default: "won-dark"
        }
    }
} as Meta;

export const Basic: Story<ExploreSidebarProps> = (args) => (
    <div style={{ padding: 16, maxWidth: 320 }}>
        <ExploreSidebar {...args} />
    </div>
);

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
    <div style={{ padding: 16, maxWidth: 320 }}>
        <ExploreSidebar
            {...args}
            initialValues={{
                plataforms: ["windows", "linux"],
                sort_by: "low-to-high"
            }}
        />
    </div>
);
