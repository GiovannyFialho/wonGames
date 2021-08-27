import { InputHTMLAttributes } from "react";
import { Wrapper, Input, Label } from "./styles";

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
    label?: string;
    labelFor?: string;
    labelColor?: "white" | "black";
    onCheck?: (value?: RadioValue) => void;
    value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
    label,
    labelFor = "",
    labelColor = "white",
    onCheck,
    value,
    ...props
}: RadioProps) => {
    const onChange = () => {
        !!onCheck && onCheck(value);
    };

    return (
        <Wrapper>
            <Input
                id={labelFor}
                type="radio"
                value={value}
                onChange={onChange}
                {...props}
            />
            {!!label && (
                <Label labelColor={labelColor} htmlFor={labelFor}>
                    {label}
                </Label>
            )}
        </Wrapper>
    );
};

export default Radio;
