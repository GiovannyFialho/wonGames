import { render, screen } from "utils/test-utils";

import Highlight from ".";
import * as StyleComponent from "./styles";

const props = {
    title: "Heading 1",
    subtitle: "Heading 2",
    backgroundImage: "/img/red-dead.jpg",
    buttonLabel: "Buy now",
    buttonLink: "rh2"
};

describe("<Highlight />", () => {
    it("should render headings and button", () => {
        render(<Highlight {...props} />);

        expect(
            screen.getByRole("heading", { name: /Heading 1/i })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", { name: /Heading 2/i })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: /Buy now/i })
        ).toBeInTheDocument();
    });

    it("should render background image", () => {
        const { container } = render(<Highlight {...props} />);

        expect(container.firstChild).toHaveStyle({
            backgroundImage: `url(${props.backgroundImage})`
        });
    });

    it("should render float image", () => {
        render(<Highlight floatImage="/float-image.png" {...props} />);

        expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
            "src",
            "/float-image.png"
        );
    });

    it("should render align right by default", () => {
        const { container } = render(<Highlight {...props} />);

        expect(container.firstChild).toHaveStyleRule(
            "grid-template-areas",
            '"floatImage content"'
        );

        expect(container.firstChild).toHaveStyleRule("text-align", "right", {
            modifier: `${StyleComponent.Content}`
        });
    });

    it("should render align left", () => {
        const { container } = render(<Highlight {...props} alignment="left" />);

        expect(container.firstChild).toHaveStyleRule(
            "grid-template-areas",
            '"content floatImage"'
        );

        expect(container.firstChild).toHaveStyleRule("text-align", "left", {
            modifier: `${StyleComponent.Content}`
        });
    });
});
