import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import GameInfo from ".";

const props = {
    title: "Game title",
    description: "Game description",
    price: 210
};

describe("<GameInfo />", () => {
    it("should render component", () => {
        const { container } = renderWithTheme(<GameInfo {...props} />);

        expect(
            screen.getByRole("heading", { name: /Game title/i })
        ).toBeInTheDocument();
        expect(screen.getByText(/Game description/i)).toBeInTheDocument();
        expect(screen.getByText(/\$210\.00/i)).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });

    it("should render buttons", () => {
        renderWithTheme(<GameInfo {...props} />);

        expect(
            screen.getByRole("button", { name: /add to cart/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /wisthlist/i })
        ).toBeInTheDocument();
    });
});
