import Base from "templates/Base";

import { Container } from "components/Container";
import { Grid } from "components/Grid";
import { Divider } from "components/Divider";
import Heading from "components/Heading";
import Gamecard, { GamecardProps } from "components/Gamecard";
import { HighlightProps } from "components/Highlight";
import Showcase from "components/Showcase";
import Empty from "components/Empty";

export type WishlistTemplateProps = {
    games?: GamecardProps[];
    recommendedGames: GamecardProps[];
    recommendedHighlight: HighlightProps;
};

const Wishlist = ({
    games = [],
    recommendedGames,
    recommendedHighlight
}: WishlistTemplateProps) => (
    <Base>
        <Container>
            <Heading color="white" lineLeft lineColor="secondary">
                Wishlist
            </Heading>

            {games.length ? (
                <Grid>
                    {games?.map((game, index) => (
                        <Gamecard key={`wishlist-${index}`} {...game} />
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
            title="You may like these games"
            highlight={recommendedHighlight}
            gamecardSlider={recommendedGames}
        />
    </Base>
);

export default Wishlist;
