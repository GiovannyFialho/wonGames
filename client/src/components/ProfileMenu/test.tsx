import { render, screen } from "utils/test-utils";

import ProfileMenu from ".";

describe("<ProfileMenu />", () => {
    it("should render the menu", () => {
        const { container } = render(<ProfileMenu />);

        expect(
            screen.getByRole("link", { name: /My profile/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /My cards/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /My orders/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Logout/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });

    it("should render the menu with an active link defined", () => {
        render(<ProfileMenu activeLink="/profile/cards" />);

        expect(screen.getByRole("link", { name: /my cards/i })).toHaveStyle({
            background: "#F231A5",
            color: "#FAFAFA"
        });
    });
});
