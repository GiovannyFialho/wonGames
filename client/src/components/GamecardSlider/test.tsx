import "session.mock";
import "match-media-mock";

import { render, screen } from "utils/test-utils";

import GamecardSlider from ".";
import items from "./mock";

describe("<GamecardSlider />", () => {
    it("should render with 4 active items", () => {
        const { container } = render(<GamecardSlider items={items} />);

        expect(container.querySelectorAll(".slick-active")).toHaveLength(4);
    });

    it("should render white arrows if color passed", () => {
        render(<GamecardSlider color="white" items={items} />);

        expect(screen.getByLabelText(/next games/i)).toHaveStyle({
            color: "#FAFAFA"
        });
        expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
            color: "#FAFAFA"
        });
    });
});
