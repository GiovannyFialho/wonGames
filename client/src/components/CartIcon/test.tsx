import { render, screen } from "utils/test-utils";

import CartIcon from ".";

describe("<CartIcon />", () => {
    it("should render without badge", () => {
        render(<CartIcon />);

        expect(screen.getByLabelText(/Shopping Cart/i)).toBeInTheDocument();
        expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
    });

    it("should render with badge", () => {
        render(<CartIcon quantity={3} />);

        expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument();
        expect(screen.getByText(/3/)).toBeInTheDocument();
    });

    it("should render with badge only if has positive numbers", () => {
        render(<CartIcon quantity={-3} />);

        expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
        expect(screen.queryByLabelText(/-3/)).not.toBeInTheDocument();
    });
});
