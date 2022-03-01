import { gql } from "@apollo/client";

export const QUERY_PROFILE = gql`
    query QueryProfileMe {
        me {
            username
            email
        }
    }
`;
