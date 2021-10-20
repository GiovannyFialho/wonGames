import "match-media-mock";

import BannerSlider from ".";

import { render } from "utils/test-utils";

const items = [
    {
        img: "https://source.unsplash.com/user/willianjusten/1042x580",
        title: "Defy death 1",
        subtitle: "<p>Play the new <strong>CrashLands</strong> season",
        buttonLabel: "Buy now",
        buttonLink: "/games/defy-death",
        ribbon: "Bestselling"
    },
    {
        img: "https://source.unsplash.com/user/willianjusten/1042x582",
        title: "Defy death 2",
        subtitle: "<p>Play the new <strong>CrashLands</strong> season",
        buttonLabel: "Buy now",
        buttonLink: "/games/defy-death"
    }
];

describe("<BannerSlider />", () => {
    it("should render vertical slider", () => {
        const { container } = render(<BannerSlider items={items} />);

        expect(container.querySelector(".slick-vertical")).toBeInTheDocument();
    });

    it("should render the dots", () => {
        const { container } = render(<BannerSlider items={items} />);

        expect(container.querySelector(".slick-dots")).toBeInTheDocument();
        expect(container.querySelector(".slick-dots")).toHaveStyle({
            display: "block"
        });
    });
});
