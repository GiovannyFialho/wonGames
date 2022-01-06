import styled, { css, DefaultTheme } from "styled-components";

import { TextFieldProps } from ".";

type poistionIconProps = Pick<TextFieldProps, "positionIcon">;

type wrapperProps = {
    error: boolean;
} & Pick<TextFieldProps, "disabled">;

export const InputWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        background: ${theme.colors.lightGray};
        border-radius: 0.2rem;
        padding: 0 ${theme.spacings.xsmall};
        border: 0.2rem solid;
        border-color: ${theme.colors.lightGray};
        &:focus-within {
            box-shadow: 0 0 0.5rem ${theme.colors.primary};
        }
    `}
`;

export const Input = styled.input<poistionIconProps>`
    ${({ theme, positionIcon }) => css`
        color: ${theme.colors.black};
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.xxsmall} 0;
        padding-${positionIcon}: ${theme.spacings.xxsmall};
        background: transparent;
        border: 0;
        outline: none;
        width: 100%;
        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.lightGray} inset;
            filter: none;
        }
    `}
`;

export const Label = styled.label`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.black};
        cursor: pointer;
    `}
`;

export const Icon = styled.div<poistionIconProps>`
    ${({ theme, positionIcon }) => css`
        display: flex;
        width: 2.2rem;
        color: ${theme.colors.gray};
        order: ${positionIcon === "right" ? 1 : 0};
        & > svg {
            width: 100%;
        }
    `}
`;

export const Error = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.red};
        font-size: ${theme.font.sizes.xsmall};
    `}
`;

const wrapperModifiers = {
    error: (theme: DefaultTheme) => css`
        ${Label},
        ${Icon} {
            color: ${theme.colors.red};
        }

        ${InputWrapper} {
            border-color: ${theme.colors.red};
        }
    `,
    disabled: (theme: DefaultTheme) => css`
        ${Label},
        ${Icon},
        ${Input} {
            cursor: not-allowed;
            color: ${theme.colors.gray};
            &::placeholder {
                color: currentColor;
            }
        }
    `
};

export const Wrapper = styled.div<wrapperProps>`
    ${({ theme, disabled, error }) => css`
        ${disabled && wrapperModifiers.disabled(theme)}
        ${error && wrapperModifiers.error(theme)}
    `}
`;
