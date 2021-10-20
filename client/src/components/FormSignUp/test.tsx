import { render, screen } from "utils/test-utils";

import FormSignUp from ".";

describe("<FormSignUp />", () => {
    it("should render the form", () => {
        const { container } = render(<FormSignUp />);

        expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();

        expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();

        expect(screen.getByPlaceholderText("password")).toBeInTheDocument();

        expect(
            screen.getByPlaceholderText("confirm password")
        ).toBeInTheDocument();

        expect(
            screen.getByRole("button", { name: /sign up now/i })
        ).toBeInTheDocument();

        expect(
            screen.getByText(/already have an account?/i)
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: /sign In/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
