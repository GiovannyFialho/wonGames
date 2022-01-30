import userEvent from "@testing-library/user-event";

import { render, screen } from "utils/test-utils";

import UserDropdown from ".";

describe("<UserDropdown />", () => {
    it("should render username", () => {
        render(<UserDropdown username="Giovanny" />);

        expect(screen.getByText(/giovanny/i)).toBeInTheDocument();
    });

    it("should render the menu", () => {
        render(<UserDropdown username="Giovanny" />);

        userEvent.click(screen.getByText(/giovanny/i));

        expect(
            screen.getByRole("link", { name: /My profile/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /Wishlist/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Sign out/i })
        ).toBeInTheDocument();
    });
});
