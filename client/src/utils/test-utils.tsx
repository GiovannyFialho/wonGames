import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "styles/theme";
import {
    CartContext,
    CartContextData,
    CartContextDefaultValues
} from "hooks/use-cart";

type CustomRenderProps = {
    cartProviderProps?: CartContextData;
} & Omit<RenderOptions, "queries">;

const customRender = (
    ui: ReactElement,
    {
        cartProviderProps = CartContextDefaultValues,
        ...renderOptions
    }: CustomRenderProps = {}
) =>
    render(
        <ThemeProvider theme={theme}>
            <CartContext.Provider value={cartProviderProps}>
                {ui}
            </CartContext.Provider>
        </ThemeProvider>,
        renderOptions
    );

export * from "@testing-library/react";
export { customRender as render };
