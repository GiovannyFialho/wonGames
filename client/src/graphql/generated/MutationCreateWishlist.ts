/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateWishlist
// ====================================================

export interface MutationCreateWishlist_createWishlist_wishlist_user {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
}

export interface MutationCreateWishlist_createWishlist_wishlist_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface MutationCreateWishlist_createWishlist_wishlist_games_developers {
  __typename: "Developer";
  name: string;
}

export interface MutationCreateWishlist_createWishlist_wishlist_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  price: number;
  cover: MutationCreateWishlist_createWishlist_wishlist_games_cover | null;
  developers: MutationCreateWishlist_createWishlist_wishlist_games_developers[];
}

export interface MutationCreateWishlist_createWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  user: MutationCreateWishlist_createWishlist_wishlist_user | null;
  games: MutationCreateWishlist_createWishlist_wishlist_games[];
}

export interface MutationCreateWishlist_createWishlist {
  __typename: "createWishlistPayload";
  wishlist: MutationCreateWishlist_createWishlist_wishlist | null;
}

export interface MutationCreateWishlist {
  createWishlist: MutationCreateWishlist_createWishlist | null;
}

export interface MutationCreateWishlistVariables {
  input: createWishlistInput;
}
