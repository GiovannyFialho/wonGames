import { useState } from "react";
import { Close, FilterList } from "styled-icons/material-outlined";

import Button from "components/Button";
import Checkbox from "components/Checkbox";
import Heading from "components/Heading";
import Radio from "components/Radio";

import {
    Wrapper,
    Overlay,
    IconWrapper,
    Content,
    Items,
    Footer
} from "./styles";

export type ItemProps = {
    title: string;
    name: string;
    type: "checkout" | "radio" | string;
    fields: Field[];
};

type Field = {
    label: string;
    name: string;
};

type Values = {
    [field: string]: boolean | string;
};

export type ExploreSidebarProps = {
    items: ItemProps[];
    initialValues?: Values;
    onFilter: (values: Values) => void;
};

const ExploreSidebar = ({
    items,
    initialValues = {},
    onFilter
}: ExploreSidebarProps) => {
    const [values, setValues] = useState(initialValues);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (name: string, value: boolean | string) => {
        setValues((s) => ({ ...s, [name]: value }));
    };

    const handleFilter = () => {
        onFilter(values);
        setIsOpen(false);
    };

    return (
        <Wrapper isOpen={isOpen}>
            <Overlay aria-hidden={isOpen} />
            <IconWrapper>
                <FilterList
                    aria-label="open filters"
                    onClick={() => setIsOpen(true)}
                />

                <Close
                    aria-label="close filters"
                    onClick={() => setIsOpen(false)}
                />
            </IconWrapper>

            <Content>
                {items?.map((item) => (
                    <Items key={item.title}>
                        <Heading lineColor="secondary" size="small" lineBottom>
                            {item.title}
                        </Heading>

                        {item.type === "checkbox" &&
                            item.fields.map((field) => (
                                <Checkbox
                                    key={field.name}
                                    name={field.name}
                                    label={field.label}
                                    labelFor={field.name}
                                    isChecked={!!values[field.name]}
                                    onCheck={(v) => handleChange(field.name, v)}
                                />
                            ))}

                        {item.type === "radio" &&
                            item.fields.map((field) => (
                                <Radio
                                    key={field.name}
                                    id={field.name}
                                    name={item.name}
                                    label={field.label}
                                    labelFor={field.name}
                                    value={field.name}
                                    defaultChecked={
                                        field.name === values[item.name]
                                    }
                                    onChange={() =>
                                        handleChange(item.name, field.name)
                                    }
                                />
                            ))}
                    </Items>
                ))}
            </Content>
            <Footer>
                <Button fullWidth size="medium" onClick={handleFilter}>
                    Filter
                </Button>
            </Footer>
        </Wrapper>
    );
};

export default ExploreSidebar;
