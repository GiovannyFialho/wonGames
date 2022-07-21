import "session.mock";

import { render, screen } from "utils/test-utils";

import GameInfo from ".";

const props = {
    id: "1",
    title: "Game title",
    description: "Game description",
    price: 210
};

describe("<GameInfo />", () => {
    it("should render component", () => {
        const { container } = render(<GameInfo {...props} />);

        expect(
            screen.getByRole("heading", { name: /Game title/i })
        ).toBeInTheDocument();
        expect(screen.getByText(/Game description/i)).toBeInTheDocument();
        expect(screen.getByText(/\$210\.00/i)).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });

    it("should render buttons", () => {
        render(<GameInfo {...props} />);

        expect(
            screen.getByRole("button", { name: /add to cart/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Add to Wishlist/i })
        ).toBeInTheDocument();
    });
});
