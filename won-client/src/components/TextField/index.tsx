import React, { InputHTMLAttributes, useState } from "react";
import { Wrapper, InputWrapper, Input, Label, Icon, Error } from "./styles";

export type TextFieldProps = {
    label?: string;
    initialValue?: string;
    icon?: JSX.Element;
    positionIcon?: "left" | "right";
    disabled?: boolean;
    error?: string;
    onInput?: (value?: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
    label,
    name,
    initialValue = "",
    icon,
    positionIcon = "left",
    onInput,
    disabled = false,
    error,
    ...props
}: TextFieldProps) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setValue(newValue);

        !!onInput && onInput(newValue);
    };

    return (
        <Wrapper disabled={disabled} error={!!error}>
            {!!label && <Label htmlFor={name}>{label}</Label>}
            <InputWrapper>
                {!!icon && <Icon positionIcon={positionIcon}>{icon}</Icon>}
                <Input
                    type="text"
                    value={value}
                    onChange={onChange}
                    positionIcon={positionIcon}
                    disabled={disabled}
                    {...(label ? { id: name } : {})}
                    {...props}
                />
            </InputWrapper>
            {!!error && <Error>{error}</Error>}
        </Wrapper>
    );
};

export default TextField;
