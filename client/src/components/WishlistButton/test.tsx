import userEvent from "@testing-library/user-event";
import { WishlistContextDefaultValues } from "hooks/use-wishlist";

import { act, render, screen, waitFor } from "utils/test-utils";

import WishlistButton from ".";

const useSession = jest.spyOn(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("next-auth/client"),
    "useSession"
);
const session = { jwt: "123", user: { email: "lorem@lorem.com" } };

useSession.mockImplementation(() => [session]);

describe("<WishlistButton />", () => {
    it("should render a button to add to wishlist", () => {
        const wishlistProviderProps = {
            ...WishlistContextDefaultValues,
            isInWishlist: () => false,
            addToWishlist: jest.fn()
        };

        render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

        act(() => {
            userEvent.click(screen.getByText(/add to wishlist/i));
        });

        waitFor(() => {
            expect(wishlistProviderProps.addToWishlist).toHaveBeenCalledWith(
                "1"
            );
        });
    });

    it("should render a button to remove from wishlist", () => {
        const wishlistProviderProps = {
            ...WishlistContextDefaultValues,
            isInWishlist: () => true,
            removeFromWishlist: jest.fn()
        };

        render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

        act(() => {
            userEvent.click(screen.getByText(/remove from wishlist/i));
        });

        waitFor(() => {
            expect(
                wishlistProviderProps.removeFromWishlist
            ).toHaveBeenCalledWith("1");
        });
    });

    it("should render a button with add to wishlist text", () => {
        const wishlistProviderProps = {
            ...WishlistContextDefaultValues,
            isInWishlist: () => false
        };

        render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

        expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument();
    });

    it("should render a button with remove from wishlist text", () => {
        const wishlistProviderProps = {
            ...WishlistContextDefaultValues,
            isInWishlist: () => true
        };

        render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

        expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument();
    });

    it("should not render if not logged", () => {
        const useSession = jest.spyOn(
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require("next-auth/client"),
            "useSession"
        );

        useSession.mockImplementationOnce(() => [null]);

        const wishlistProviderProps = {
            ...WishlistContextDefaultValues,
            isInWishlist: () => true
        };

        render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

        expect(
            screen.queryByText(/remove from wishlist/i)
        ).not.toBeInTheDocument();
    });
});
