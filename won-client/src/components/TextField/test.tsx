import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Email } from "@styled-icons/material-outlined";

import { renderWithTheme } from "utils/tests/helpers";
import TextField from ".";

describe("<TextField />", () => {
    it("should render with label", () => {
        renderWithTheme(<TextField label="label aqui" name="label" />);

        expect(screen.getByLabelText(/label aqui/i)).toBeInTheDocument();
    });

    it("should render without label", () => {
        renderWithTheme(<TextField />);

        expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
    });

    it("should render with placeholder", () => {
        renderWithTheme(<TextField placeholder="hy you" />);

        expect(screen.getByPlaceholderText("hy you")).toBeInTheDocument();
    });

    it("changes its value when typing", async () => {
        const onInput = jest.fn();

        renderWithTheme(
            <TextField
                label="label aqui"
                name="input"
                id="input"
                onInput={onInput}
            />
        );

        const input = screen.getByRole("textbox");
        const text = "this is my new text";
        userEvent.type(input, text);

        await waitFor(() => {
            expect(input).toHaveValue(text);
            expect(onInput).toHaveBeenCalledTimes(text.length);
        });

        expect(onInput).toHaveBeenCalledWith(text);
    });

    it("is accessible by tab", () => {
        renderWithTheme(<TextField label="label aqui" name="input" />);

        expect(document.body).toHaveFocus();

        userEvent.tab();

        expect(screen.getByLabelText(/label aqui/i)).toHaveFocus();
    });

    it("should render with icon", () => {
        renderWithTheme(<TextField icon={<Email data-testid="icon" />} />);

        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("should render icon on right side", () => {
        renderWithTheme(
            <TextField
                icon={<Email data-testid="icon" />}
                positionIcon="right"
            />
        );

        expect(screen.getByTestId("icon").parentElement).toHaveStyle({
            order: 1
        });
    });

    it("should does not changes its value when disabled", async () => {
        const onInput = jest.fn();

        renderWithTheme(
            <TextField
                label="label aqui"
                name="input"
                onInput={onInput}
                disabled
            />
        );

        const input = screen.getByRole("textbox");
        expect(input).toBeDisabled();

        const text = "this is my new text";
        userEvent.type(input, text);

        await waitFor(() => {
            expect(input).not.toHaveValue(text);
        });

        expect(onInput).not.toHaveBeenCalled();
    });

    it("should is not accessible by tab when disabled", () => {
        renderWithTheme(<TextField label="label aqui" name="input" disabled />);

        expect(document.body).toHaveFocus();

        userEvent.tab();

        expect(screen.getByLabelText(/label aqui/i)).not.toHaveFocus();
    });

    it("should render with erros", () => {
        const { container } = renderWithTheme(
            <TextField
                label="label aqui"
                name="input"
                icon={<Email data-testid="icon" />}
                error="ops, um erro!"
            />
        );

        expect(screen.getByText(/ops, um erro!/i)).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
