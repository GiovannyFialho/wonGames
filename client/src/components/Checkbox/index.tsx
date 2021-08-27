import { InputHTMLAttributes, useState } from "react";
import { Wrapper, Label, Input } from "./styles";

export type CheckboxProps = {
    label?: string;
    labelFor?: string;
    labelColor?: "white" | "black";
    onCheck?: (status: boolean) => void;
    isChecked?: boolean;
    value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
    label,
    labelFor,
    labelColor = "white",
    onCheck,
    isChecked = false,
    value,
    ...props
}: CheckboxProps) => {
    const [checked, setChecked] = useState(isChecked);

    const onChange = () => {
        const status = !checked;
        setChecked(status);

        if (onCheck) {
            onCheck(status);
        }
    };

    return (
        <Wrapper>
            <Input
                id={labelFor}
                type="checkbox"
                onChange={onChange}
                checked={checked}
                value={value}
                {...props}
            />
            {!!label && (
                <Label htmlFor={labelFor} labelColor={labelColor}>
                    {label}
                </Label>
            )}
        </Wrapper>
    );
};

export default Checkbox;
