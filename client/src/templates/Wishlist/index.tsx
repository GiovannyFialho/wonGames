import { useWishlist } from "hooks/use-wishlist";

import Base from "templates/Base";

import { Container } from "components/Container";
import { Grid } from "components/Grid";
import { Divider } from "components/Divider";
import Heading from "components/Heading";
import GameCard, { GameCardProps } from "components/GameCard";
import { HighlightProps } from "components/Highlight";
import Showcase from "components/Showcase";
import Empty from "components/Empty";
import Loader from "components/Loader";

import { LoadingWrapper } from "./styles";

export type WishlistTemplateProps = {
    recommendedTitle: string;
    recommendedGames: GameCardProps[];
    recommendedHighlight: HighlightProps;
};

const Wishlist = ({
    recommendedTitle,
    recommendedGames,
    recommendedHighlight
}: WishlistTemplateProps) => {
    const { items, loading } = useWishlist();

    return (
        <Base>
            <Container>
                <Heading color="white" lineLeft lineColor="secondary">
                    Wishlist
                </Heading>

                {loading ? (
                    <LoadingWrapper>
                        <Loader />
                    </LoadingWrapper>
                ) : items.length >= 1 ? (
                    <Grid>
                        {items?.map((game, index) => (
                            <GameCard key={`wishlist-${index}`} {...game} />
                        ))}
                    </Grid>
                ) : (
                    <Empty
                        title="Your wishlist is empty"
                        description="Games added to your wishlist will appear here"
                        hasLink
                    />
                )}

                <Divider />
            </Container>

            <Showcase
                title={recommendedTitle}
                highlight={recommendedHighlight}
                gamecardSlider={recommendedGames}
            />
        </Base>
    );
};

export default Wishlist;
