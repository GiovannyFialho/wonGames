import React, {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    forwardRef
} from "react";

import { ButtonElement, ButtonElementProps } from "./styles";

type ButtonTypes =
    | AnchorHTMLAttributes<HTMLAnchorElement>
    | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    icon?: JSX.Element;
    minimal?: boolean;
    as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<
    ButtonElementProps,
    ButtonProps
> = (
    {
        children,
        icon,
        size = "medium",
        fullWidth = false,
        minimal = false,
        ...props
    },
    ref
) => (
    <ButtonElement
        size={size}
        fullWidth={fullWidth}
        hasIcon={!!icon}
        minimal={minimal}
        ref={ref}
        {...props}
    >
        {!!icon && icon}
        {!!children && <span>{children}</span>}
    </ButtonElement>
);

export default forwardRef(Button);
