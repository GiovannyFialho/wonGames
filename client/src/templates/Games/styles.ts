import styled, { css } from "styled-components";
import media from "styled-media-query";

import { Container } from "components/Container";

export const Main = styled(Container)`
    ${({ theme }) => css`
        ${media.greaterThan("medium")`
            display: grid;
            grid-template-columns: 26rem 1fr;
            grid-gap: ${theme.grid.gutter};
        `}
    `}
`;

export const ShowMore = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        text-align: center;
        padding: ${theme.spacings.medium};
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
        > svg {
            color: ${theme.colors.primary};
        }
    `}
`;

export const ShowMoreLoading = styled.img`
    width: 4rem;
`;
