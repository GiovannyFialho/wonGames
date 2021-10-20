import { render, screen } from "utils/test-utils";

import FormSignIn from ".";

describe("<FormSignIn />", () => {
    it("should render the form", () => {
        const { container } = render(<FormSignIn />);

        expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();

        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

        expect(
            screen.getByRole("button", { name: /sign in now/i })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: /Forgot your password?/i })
        ).toBeInTheDocument();

        expect(screen.getByText(/don't have an account?/i)).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: /sign Up/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
