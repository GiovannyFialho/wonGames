import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "utils/tests/helpers";

import Radio from ".";

describe("<Radio />", () => {
    it("should render with label white", () => {
        const { container } = renderWithTheme(
            <Radio label="radio label" labelFor="check" value="any value" />
        );

        expect(screen.getByText(/radio label/i)).toBeInTheDocument();
        expect(screen.getByText(/radio label/i)).toHaveStyle({
            color: "#FAFAFA"
        });

        expect(container.firstChild).toMatchSnapshot();
    });

    it("should render with label black", () => {
        const { container } = renderWithTheme(
            <Radio
                label="radio label"
                labelFor="check"
                labelColor="black"
                value="any value"
            />
        );

        expect(screen.getByText(/radio label/i)).toBeInTheDocument();
        expect(screen.getByText(/radio label/i)).toHaveStyle({
            color: "#030517"
        });

        expect(container.firstChild).toMatchSnapshot();
    });

    it("should render without label", () => {
        renderWithTheme(<Radio />);

        expect(screen.queryByLabelText("Radio")).not.toBeInTheDocument();
    });

    it("should dispatch onCheck when label status changes", async () => {
        const onCheck = jest.fn();

        renderWithTheme(
            <Radio
                label="radio label"
                labelFor="check"
                value="any value"
                onCheck={onCheck}
            />
        );

        expect(onCheck).not.toHaveBeenCalled();

        userEvent.click(screen.getByLabelText(/radio label/i));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1);
        });
        expect(onCheck).toHaveBeenCalledWith("any value");
    });

    it("should be accessible with tab", () => {
        renderWithTheme(
            <Radio label="radio label" labelFor="check" value="any value" />
        );

        expect(document.body).toHaveFocus();

        userEvent.tab();

        expect(screen.getByLabelText(/radio label/i)).toHaveFocus();
    });
});
