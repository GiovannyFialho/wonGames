import { render, screen } from "utils/test-utils";

import Empty, { EmptyProps } from ".";

const props: EmptyProps = {
    title: "A simple title",
    description: "A simple description"
};

describe("<Empty />", () => {
    it("should render correctly", () => {
        const { container } = render(<Empty {...props} hasLink />);

        expect(
            screen.getByRole("image", {
                name: /a game in a couch playing videogame/i
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", { name: /a simple title/i })
        ).toBeInTheDocument();

        expect(screen.getByText(/a simple description/i)).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: /go back to store/i })
        ).toHaveAttribute("href", "/");

        expect(container.firstChild).toMatchSnapshot();
    });

    it("should not render link when hasLink is not passed", () => {
        render(<Empty {...props} />);

        expect(
            screen.queryByRole("link", { name: /go back to store/i })
        ).not.toBeInTheDocument();
    });
});
