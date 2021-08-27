/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGame
// ====================================================

export interface GetGame_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GetGame_games_developers {
  __typename: "Developer";
  name: string;
}

export interface GetGame_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: GetGame_games_cover | null;
  developers: GetGame_games_developers[];
  price: number;
}

export interface GetGame {
  games: GetGame_games[];
}

export interface GetGameVariables {
  limit: number;
}
