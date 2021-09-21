import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { css } from "styled-components";
import { renderWithTheme } from "utils/tests/helpers";

import ExploreSidebar from ".";
import { Overlay } from "./styles";

import itemsMock from "./mock";

describe("<ExploreSidebar />", () => {
    it("should render heading", () => {
        renderWithTheme(
            <ExploreSidebar items={itemsMock} onFilter={jest.fn()} />
        );

        expect(
            screen.getByRole("heading", { name: /price/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", { name: /sort by/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", { name: /plataforms/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", { name: /genre/i })
        ).toBeInTheDocument();
    });

    it("should render inputs", () => {
        renderWithTheme(
            <ExploreSidebar items={itemsMock} onFilter={jest.fn()} />
        );

        expect(
            screen.getByRole("checkbox", { name: /under \$50/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("radio", { name: /high to low/i })
        ).toBeInTheDocument();
    });

    it("should render the filter button", () => {
        renderWithTheme(
            <ExploreSidebar items={itemsMock} onFilter={jest.fn()} />
        );

        expect(
            screen.getByRole("button", { name: /filter/i })
        ).toBeInTheDocument();
    });

    it("should check initial values are passed", () => {
        renderWithTheme(
            <ExploreSidebar
                items={itemsMock}
                initialValues={{
                    plataforms: ["windows"],
                    sort_by: "low-to-high"
                }}
                onFilter={jest.fn()}
            />
        );

        expect(
            screen.getByRole("checkbox", { name: /windows/i })
        ).toBeChecked();

        expect(
            screen.getByRole("radio", { name: /low to high/i })
        ).toBeChecked();
    });

    it("should filter with initial values", () => {
        const onFilter = jest.fn();

        renderWithTheme(
            <ExploreSidebar
                items={itemsMock}
                initialValues={{
                    plataforms: ["windows"],
                    sort_by: "low-to-high"
                }}
                onFilter={onFilter}
            />
        );

        userEvent.click(screen.getByRole("button", { name: /filter/i }));
        expect(onFilter).toHaveBeenCalledWith({
            plataforms: ["windows"],
            sort_by: "low-to-high"
        });
    });

    it("should filter with checked values", () => {
        const onFilter = jest.fn();

        renderWithTheme(
            <ExploreSidebar items={itemsMock} onFilter={onFilter} />
        );

        userEvent.click(screen.getByLabelText(/windows/i));
        userEvent.click(screen.getByLabelText(/linux/i));
        userEvent.click(screen.getByLabelText(/low to high/i));

        userEvent.click(screen.getByRole("button", { name: /filter/i }));

        expect(onFilter).toHaveBeenCalledWith({
            plataforms: ["windows", "linux"],
            sort_by: "low-to-high"
        });
    });

    it("should altern radio options", () => {
        const onFilter = jest.fn();

        renderWithTheme(
            <ExploreSidebar items={itemsMock} onFilter={onFilter} />
        );

        userEvent.click(screen.getByLabelText(/low to high/i));
        userEvent.click(screen.getByLabelText(/high to low/i));

        userEvent.click(screen.getByRole("button", { name: /filter/i }));

        expect(onFilter).toHaveBeenCalledWith({
            sort_by: "high-to-low"
        });
    });

    it("should open/close sidebar when filtering on mobile", () => {
        const { container } = renderWithTheme(
            <ExploreSidebar items={itemsMock} onFilter={jest.fn()} />
        );

        const variant = {
            media: "(max-width:768px)",
            modifier: String(css`
                ${Overlay}
            `)
        };

        const Element = container.firstChild;

        expect(Element).not.toHaveStyleRule("opacity", "1", variant);

        userEvent.click(screen.getByLabelText(/open filters/));

        expect(Element).toHaveStyleRule("opacity", "1", variant);

        userEvent.click(screen.getByLabelText(/close filters/));

        expect(Element).not.toHaveStyleRule("opacity", "1", variant);
    });
});
