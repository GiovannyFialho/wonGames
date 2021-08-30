import { gql } from "@apollo/client";

export const QUERY_HOME = gql`
    query QueryHome {
        banners {
            image {
                url
            }
            title
            subtitle
            button {
                link
                label
            }
            ribbon {
                text
                color
                size
            }
        }
    }
`;
