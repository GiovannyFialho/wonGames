import { QUERY_GAMES } from "graphql/queries/games";

export const noGamesMock = {
    request: {
        query: QUERY_GAMES,
        variables: { limit: 15, where: {} }
    },
    result: {
        data: {
            games: [],
            gamesConnection: {
                values: [],
                __typename: "GameConnection"
            }
        }
    }
};

export const gamesMock = {
    request: {
        query: QUERY_GAMES,
        variables: { limit: 15, where: {} }
    },
    result: {
        data: {
            games: [
                {
                    id: "1",
                    name: "Silent Hill 4: The Room",
                    slug: "silent-hill-4-the-room",
                    price: 39.89,
                    cover: {
                        url: "/uploads/silent_hill_4_the_room_75abd0544a.jpg",
                        __typename: "UploadFile"
                    },
                    developers: [
                        {
                            name: "Team Silent",
                            __typename: "Developer"
                        }
                    ],
                    __typename: "Game"
                }
            ],
            gamesConnection: {
                values: [{ id: "1" }, { id: "2" }],
                __typename: "GameConnection"
            }
        }
    }
};

export const fetchMoreMock = {
    request: {
        query: QUERY_GAMES,
        variables: { limit: 15, where: {}, start: 1 }
    },
    result: {
        data: {
            games: [
                {
                    id: "2",
                    name: "Metro Exodus - Gold Edition",
                    slug: "metro-exodus-gold-edition",
                    price: 25.79,
                    cover: {
                        url:
                            "/uploads/metro_exodus_gold_edition_ea0232c3ea.jpg",
                        __typename: "UploadFile"
                    },
                    developers: [{ name: "4A Games", __typename: "Developer" }],
                    __typename: "Game"
                }
            ],
            gamesConnection: {
                values: [{ id: "1" }, { id: "2" }],
                __typename: "GameConnection"
            }
        }
    }
};
