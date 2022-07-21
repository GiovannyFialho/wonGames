import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/client";

import { useQueryWishlist } from "graphql/queries/wishlist";
import { QueryWishlist_wishlists_games } from "graphql/generated/QueryWishlist";

import { gamesMapper } from "utils/mappers";

import { GamecardProps } from "components/Gamecard";
import { useMutation } from "@apollo/client";
import {
    MUTATION_CREATE_WISHLIST,
    MUTATION_UPDATE_WISHLIST
} from "graphql/mutations/wishlist";

export type WishlistContextData = {
    items: GamecardProps[];
    isInWishlist: (id: string) => boolean;
    addToWishlist: (id: string) => void;
    removeFromWishlist: (id: string) => void;
    loading: boolean;
};

export const WishlistContextDefaultValues = {
    items: [],
    isInWishlist: () => false,
    addToWishlist: () => null,
    removeFromWishlist: () => null,
    loading: false
};

export const WishlistContext = createContext<WishlistContextData>(
    WishlistContextDefaultValues
);

export type WisthListProviderProps = {
    children: React.ReactNode;
};

const WishlistProvider = ({ children }: WisthListProviderProps) => {
    const [session] = useSession();
    const [wishlistId, setWishlistId] = useState<string | null>();

    const [wishlistItems, setWishlistItems] = useState<
        QueryWishlist_wishlists_games[]
    >([]);

    const [createList, { loading: loadingCreate }] = useMutation(
        MUTATION_CREATE_WISHLIST,
        {
            context: { session },
            onCompleted: (data) => {
                setWishlistItems(data?.createWishlist?.wishlist?.games || []);
                setWishlistId(data?.createWishlist?.wishlist?.id);
            }
        }
    );

    const [updateList, { loading: loadingUpdate }] = useMutation(
        MUTATION_UPDATE_WISHLIST,
        {
            context: { session },
            onCompleted: (data) => {
                setWishlistItems(data?.updateWishlist?.wishlist?.games || []);
            }
        }
    );

    const { data, loading: loadingQuery } = useQueryWishlist({
        skip: !session?.user?.email,
        context: { session },
        variables: {
            identifier: session?.user?.email as string
        }
    });

    useEffect(() => {
        setWishlistItems(data?.wishlists[0]?.games || []);
        setWishlistId(data?.wishlists[0]?.id);
    }, [data]);

    const wishlistIds = useMemo(() => wishlistItems.map((game) => game.id), [
        wishlistItems
    ]);

    const isInWishlist = (id: string) =>
        !!wishlistItems.find((game) => game.id === id);

    const addToWishlist = (id: string) => {
        if (!wishlistId) {
            return createList({
                variables: { input: { data: { games: [...wishlistIds, id] } } }
            });
        }

        return updateList({
            variables: {
                input: {
                    where: { id: wishlistId },
                    data: { games: [...wishlistIds, id] }
                }
            }
        });
    };

    const removeFromWishlist = (id: string) => {
        return updateList({
            variables: {
                input: {
                    where: { id: wishlistId },
                    data: {
                        games: wishlistIds.filter(
                            (gameId: string) => gameId !== id
                        )
                    }
                }
            }
        });
    };

    return (
        <WishlistContext.Provider
            value={{
                items: gamesMapper(wishlistItems),
                isInWishlist,
                addToWishlist,
                removeFromWishlist,
                loading: loadingQuery || loadingUpdate || loadingCreate
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
