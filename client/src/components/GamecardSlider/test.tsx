import "match-media-mock";

import { render, screen } from "utils/test-utils";

import GamecardSlider from ".";

const items = [
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        img: "https://source.unsplash.com/user/willianjusten/300x140",
        price: "R$ 235,00",
        promotionalPrice: "R$ 215,00"
    },
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        img: "https://source.unsplash.com/user/willianjusten/300x141",
        price: "R$ 235,00",
        promotionalPrice: "R$ 215,00"
    },
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        img: "https://source.unsplash.com/user/willianjusten/300x142",
        price: "R$ 235,00",
        promotionalPrice: "R$ 215,00"
    },
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        img: "https://source.unsplash.com/user/willianjusten/300x143",
        price: "R$ 235,00",
        promotionalPrice: "R$ 215,00"
    },
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        img: "https://source.unsplash.com/user/willianjusten/300x144",
        price: "R$ 235,00",
        promotionalPrice: "R$ 215,00"
    },
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        img: "https://source.unsplash.com/user/willianjusten/300x145",
        price: "R$ 235,00",
        promotionalPrice: "R$ 215,00"
    }
];

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
