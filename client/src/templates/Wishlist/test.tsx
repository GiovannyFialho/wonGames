import "session.mock";

import { render, screen } from "utils/test-utils";

import Wishlist, { WishlistTemplateProps } from ".";

import gamesMock from "components/GamecardSlider/mock";
import highlightMock from "components/Highlight/mock";
import { WishlistContextDefaultValues } from "hooks/use-wishlist";

const props: WishlistTemplateProps = {
    recommendedTitle: "You may like these games",
    recommendedGames: gamesMock,
    recommendedHighlight: highlightMock
};

jest.mock("templates/Base", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>;
    }
}));

jest.mock("components/Showcase", () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Showcase Mock" />;
    }
}));

describe("<Wishlist />", () => {
    it("should render template with components", () => {
        const wishlistProviderProps = {
            ...WishlistContextDefaultValues,
            items: [gamesMock[0]]
        };

        render(<Wishlist {...props} />, { wishlistProviderProps });

        expect(screen.getByText(/population zero/i)).toBeInTheDocument();
        expect(screen.getByTestId("Showcase Mock")).toBeInTheDocument();
    });

    it("should render empty there are no games", () => {
        const wishlistProviderProps = {
            ...WishlistContextDefaultValues,
            items: []
        };

        render(
            <Wishlist
                recommendedTitle="You may like these games"
                recommendedGames={gamesMock}
                recommendedHighlight={highlightMock}
            />,
            { wishlistProviderProps }
        );

        expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();

        expect(
            screen.getByRole("heading", { name: /your wishlist is empty/i })
        ).toBeInTheDocument();
    });
});
