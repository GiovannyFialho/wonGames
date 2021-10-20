import { render, screen } from "utils/test-utils";

import TextContent, { TextContentProps } from ".";

const props: TextContentProps = {
    title: "Description",
    content: `<h1>Content</h1>`
};

describe("<TextContent />", () => {
    it("should render title and component", () => {
        render(<TextContent {...props} />);

        expect(
            screen.getByRole("heading", { name: /description/i })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", { name: /content/i })
        ).toBeInTheDocument();
    });

    it("should render without title", () => {
        render(<TextContent content={props.content} />);

        expect(
            screen.queryByRole("heading", { name: /description/i })
        ).not.toBeInTheDocument();

        expect(
            screen.getByRole("heading", { name: /content/i })
        ).toBeInTheDocument();
    });

    it("should render the title and content", () => {
        render(<TextContent {...props} />);

        const wrapper = screen.getByRole("heading", { name: /description/i })
            .parentElement;

        expect(wrapper).toHaveStyle({
            color: "#FAFAFA"
        });

        expect(wrapper).toHaveStyleRule("color", "#030517", {
            media: "(min-width: 768px)"
        });
    });
});
