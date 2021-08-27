import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "utils/tests/helpers";

import UserDropdown from ".";

describe("<UserDropdown />", () => {
    it("should render username", () => {
        renderWithTheme(<UserDropdown username="Giovanny" />);

        expect(screen.getByText(/giovanny/i)).toBeInTheDocument();
    });

    it("should render the menu", () => {
        renderWithTheme(<UserDropdown username="Giovanny" />);

        userEvent.click(screen.getByText(/giovanny/i));

        expect(
            screen.getByRole("link", { name: /My profile/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /Wishlist/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /Sign out/i })
        ).toBeInTheDocument();
    });
});
