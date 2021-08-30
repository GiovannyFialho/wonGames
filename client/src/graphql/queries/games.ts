import { gql } from "@apollo/client";

export const QUERY_GAMES = gql`
    query QueryGames($limit: Int!) {
        games(limit: $limit) {
            name
            slug
            cover {
                url
            }
            developers {
                name
            }
            price
        }
    }
`;

export const QUERY_GAME_BY_SLUG = gql`
    query QueryGameBySlug($slug: String!) {
        games(where: { slug: $slug }) {
            cover {
                src: url
            }
            name
            description
            short_description
            price
            rating
            release_date
            gallery {
                src: url
                label: alternativeText
            }
            developers {
                name
            }
            publisher {
                name
            }
            categories {
                name
            }
            platforms {
                name
            }
        }
    }
`;