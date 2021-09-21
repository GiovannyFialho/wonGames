import { useEffect, useState } from "react";
import { Close, FilterList } from "styled-icons/material-outlined";
import { ParsedUrlQueryInput } from "querystring";
import xor from "lodash.xor";

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

type Values = ParsedUrlQueryInput;

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

    const handleRadio = (name: string, value: boolean | string) => {
        setValues((s) => ({ ...s, [name]: value }));
    };

    const handleCheckbox = (name: string, value: string) => {
        const currentList = (values[name] as []) || [];

        setValues((s) => ({ ...s, [name]: xor(currentList, [value]) }));
    };

    const handleFilterMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        onFilter(values);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

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
                                    isChecked={(values[
                                        item.name
                                    ] as string[])?.includes(field.name)}
                                    onCheck={() =>
                                        handleCheckbox(item.name, field.name)
                                    }
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
                                        String(field.name) ===
                                        String(values[item.name])
                                    }
                                    onChange={() =>
                                        handleRadio(item.name, field.name)
                                    }
                                />
                            ))}
                    </Items>
                ))}
            </Content>
            <Footer>
                <Button fullWidth size="medium" onClick={handleFilterMenu}>
                    Filter
                </Button>
            </Footer>
        </Wrapper>
    );
};

export default ExploreSidebar;
