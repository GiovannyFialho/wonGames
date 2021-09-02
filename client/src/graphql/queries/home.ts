import { gql } from "@apollo/client";
import { BannerFragment } from "graphql/fragments/banner";
import { GameFragment } from "graphql/fragments/game";

export const QUERY_HOME = gql`
    query QueryHome {
        banners {
            ...BannerFragment
        }

        newGames: games(
            where: { release_date_lte: "2021-09-01" }
            sort: "release_date:desc"
            limit: 5
        ) {
            ...GameFragment
        }

        upcomingGames: games(
            where: { release_date_gt: "2021-09-01" }
            sort: "release_date:asc"
            limit: 5
        ) {
            ...GameFragment
        }

        freeGames: games(where: { price: 0 }, sort: "release_date:desc") {
            ...GameFragment
        }
    }

    ${BannerFragment}
    ${GameFragment}
`;
