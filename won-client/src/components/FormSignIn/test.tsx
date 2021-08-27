import { getByPlaceholderText, screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import FormSignIn from ".";

describe("<FormSignIn />", () => {
    it("should render the form", () => {
        const { container } = renderWithTheme(<FormSignIn />);

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
