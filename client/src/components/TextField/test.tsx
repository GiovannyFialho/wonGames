import userEvent from "@testing-library/user-event";
import { Email } from "@styled-icons/material-outlined";

import { render, screen, waitFor } from "utils/test-utils";

import TextField from ".";

describe("<TextField />", () => {
    it("should render with label", () => {
        render(<TextField label="label aqui" name="label" />);

        expect(screen.getByLabelText(/label aqui/i)).toBeInTheDocument();
    });

    it("should render without label", () => {
        render(<TextField />);

        expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
    });

    it("should render with placeholder", () => {
        render(<TextField placeholder="hy you" />);

        expect(screen.getByPlaceholderText("hy you")).toBeInTheDocument();
    });

    it("changes its value when typing", async () => {
        const onInputChange = jest.fn();

        render(
            <TextField
                label="label aqui"
                name="input"
                id="input"
                onInputChange={onInputChange}
            />
        );

        const input = screen.getByRole("textbox");
        const text = "this is my new text";
        userEvent.type(input, text);

        await waitFor(() => {
            expect(input).toHaveValue(text);
            expect(onInputChange).toHaveBeenCalledTimes(text.length);
        });

        expect(onInputChange).toHaveBeenCalledWith(text);
    });

    it("is accessible by tab", () => {
        render(<TextField label="label aqui" name="input" />);

        expect(document.body).toHaveFocus();

        userEvent.tab();

        expect(screen.getByLabelText(/label aqui/i)).toHaveFocus();
    });

    it("should render with icon", () => {
        render(<TextField icon={<Email data-testid="icon" />} />);

        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("should render icon on right side", () => {
        render(
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
        const onInputChange = jest.fn();

        render(
            <TextField
                label="label aqui"
                name="input"
                onInputChange={onInputChange}
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

        expect(onInputChange).not.toHaveBeenCalled();
    });

    it("should is not accessible by tab when disabled", () => {
        render(<TextField label="label aqui" name="input" disabled />);

        expect(document.body).toHaveFocus();

        userEvent.tab();

        expect(screen.getByLabelText(/label aqui/i)).not.toHaveFocus();
    });

    it("should render with erros", () => {
        const { container } = render(
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
