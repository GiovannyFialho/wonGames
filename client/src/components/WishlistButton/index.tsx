import { useState } from "react";
import Button, { ButtonProps } from "components/Button";
import { useWishlist } from "hooks/use-wishlist";
import { useSession } from "next-auth/client";
import { Favorite, FavoriteBorder } from "styled-icons/material-outlined";

import Spinner from "components/Spinner";

type WishlistButtonProps = {
    id: string;
    hasText?: boolean;
} & Pick<ButtonProps, "size">;

const WishlistButton = ({
    id,
    hasText,
    size = "small"
}: WishlistButtonProps) => {
    const [session] = useSession();
    const [loading, setLoading] = useState(false);
    const { isInWishlist, removeFromWishlist, addToWishlist } = useWishlist();

    const handleClick = async () => {
        setLoading(true);
        isInWishlist(id)
            ? await removeFromWishlist(id)
            : await addToWishlist(id);
        setLoading(false);
    };

    const ButtonText = isInWishlist(id)
        ? "Remove from Wishlist"
        : "Add to Wishlist";

    if (!session) return null;

    return (
        <Button
            icon={
                loading ? (
                    <Spinner />
                ) : isInWishlist(id) ? (
                    <Favorite aria-label={ButtonText} />
                ) : (
                    <FavoriteBorder aria-label={ButtonText} />
                )
            }
            onClick={handleClick}
            minimal
            size={size}
        >
            {hasText && ButtonText}
        </Button>
    );
};

export default WishlistButton;
