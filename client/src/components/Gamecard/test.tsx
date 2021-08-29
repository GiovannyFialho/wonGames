import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Gamecard from ".";
import theme from "styles/theme";

const props = {
    slug: "population-zero",
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://source.unsplash.com/user/willianjusten/300x140",
    price: 235
};

describe("<Gamecard />", () => {
    it("should render correctly", () => {
        renderWithTheme(<Gamecard {...props} />);

        expect(
            screen.getByRole("heading", { name: props.title })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", { name: props.developer })
        ).toBeInTheDocument();

        expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
            "src",
            props.img
        );

        expect(screen.getByRole("link", { name: props.title })).toHaveAttribute(
            "href",
            `/game/${props.slug}`
        );

        expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
    });

    it("should render price in label", () => {
        renderWithTheme(<Gamecard {...props} />);

        const price = screen.getByText("$235.00");

        expect(price).not.toHaveStyle({
            textDecoration: "line-through"
        });

        expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
    });

    it("should render a line-through in price when promotional", () => {
        renderWithTheme(<Gamecard {...props} promotionalPrice={50} />);

        expect(screen.getByText("$235.00")).toHaveStyle({
            textDecoration: "line-through"
        });

        expect(screen.getByText("$50.00")).not.toHaveStyle({
            textDecoration: "line-through"
        });
    });

    it("should render a filled Favorite icon when favorite is true", () => {
        renderWithTheme(<Gamecard {...props} favorite />);

        expect(
            screen.getByLabelText(/remove from wishlist/i)
        ).toBeInTheDocument();
    });

    it("should call onFav method when favorite is cliked", () => {
        const onFav = jest.fn();

        renderWithTheme(<Gamecard {...props} favorite onFav={onFav} />);

        fireEvent.click(screen.getAllByRole("button")[0]);

        expect(onFav).toBeCalled();
    });

    it("should render a Ribbon", () => {
        renderWithTheme(
            <Gamecard
                {...props}
                ribbon="My Ribbon"
                ribbonSize="small"
                ribbonColor="secondary"
            />
        );

        const ribbon = screen.getByText(/My Ribbon/i);

        expect(ribbon).toBeInTheDocument();
        expect(ribbon).toHaveStyle({ backgroundColor: "#3CD3C1" });
        expect(ribbon).toHaveStyle({
            height: "2.6rem",
            fontSize: "1.2rem"
        });
    });
});
