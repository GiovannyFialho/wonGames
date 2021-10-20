import { render, screen } from "utils/test-utils";

import Wishlist, { WishlistTemplateProps } from ".";

import gamesMock from "components/GamecardSlider/mock";
import highlightMock from "components/Highlight/mock";

const props: WishlistTemplateProps = {
    games: gamesMock,
    recommendedTitle: "You may like these games",
    recommendedGames: gamesMock,
    recommendedHighlight: highlightMock
};

jest.mock("components/Showcase", () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Showcase Mock" />;
    }
}));

describe("<Wishlist />", () => {
    it("should render template with components", () => {
        render(<Wishlist {...props} />);

        expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
        expect(screen.getByTestId("Showcase Mock")).toBeInTheDocument();
    });

    it("should render empty there are no games", () => {
        render(
            <Wishlist
                recommendedTitle="You may like these games"
                recommendedGames={gamesMock}
                recommendedHighlight={highlightMock}
            />
        );

        expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();

        expect(
            screen.getByRole("heading", { name: /your wishlist is empty/i })
        ).toBeInTheDocument();
    });
});
