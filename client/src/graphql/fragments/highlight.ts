import { gql } from "@apollo/client";

export const HighlightFragment = gql`
    fragment HighlightFragment on ComponentPageHighlight {
        title
        subtitle
        background {
            url
            alternativeText
        }
        floatImage {
            url
            alternativeText
        }
        buttonLabel
        buttonLink
        alignment
    }
`;
