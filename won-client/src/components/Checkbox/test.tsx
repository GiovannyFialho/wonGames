import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import userEvent from "@testing-library/user-event";

import Checkbox from ".";

describe("<Checkbox />", () => {
    it("should render with label", () => {
        const { container } = renderWithTheme(
            <Checkbox label="label aqui" labelFor="check" />
        );

        expect(screen.getByRole("checkbox")).toBeInTheDocument();
        expect(screen.getByLabelText(/label aqui/i)).toBeInTheDocument();
        expect(screen.getByText(/label aqui/i)).toHaveAttribute("for", "check");

        expect(container.firstChild).toMatchSnapshot();
    });

    it("should render without label", () => {
        renderWithTheme(<Checkbox />);

        expect(screen.queryByLabelText("Checkbox")).not.toBeInTheDocument();
    });

    it("should render with black label", () => {
        renderWithTheme(
            <Checkbox label="label aqui" labelFor="check" labelColor="black" />
        );

        expect(screen.getByText(/label aqui/i)).toHaveStyle({
            color: "#030517"
        });
    });

    it("should dispatch onCheck when status changes", async () => {
        const onCheck = jest.fn();

        renderWithTheme(<Checkbox label="label aqui" onCheck={onCheck} />);

        expect(onCheck).not.toHaveBeenCalled();
        userEvent.click(screen.getByRole("checkbox"));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1);
        });
        expect(onCheck).toHaveBeenCalledWith(true);
    });

    it("should verify value isChecked", async () => {
        const onCheck = jest.fn();

        renderWithTheme(
            <Checkbox label="label aqui" onCheck={onCheck} isChecked />
        );

        userEvent.click(screen.getByRole("checkbox"));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1);
        });
        expect(onCheck).toHaveBeenCalledWith(false);
    });

    it("should be accessible with tab", () => {
        renderWithTheme(<Checkbox label="label aqui" labelFor="check" />);

        expect(document.body).toHaveFocus();

        userEvent.tab();

        expect(screen.getByLabelText(/label aqui/i)).toHaveFocus();
    });
});
