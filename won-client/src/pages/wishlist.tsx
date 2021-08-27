import Wishlist, { WishlistTemplateProps } from "templates/Wishlist";

import gamesMock from "components/GamecardSlider/mock";
import highlightMock from "components/Highlight/mock";

export default function wishlistPage(props: WishlistTemplateProps) {
    return <Wishlist {...props} />;
}

export async function getStaticProps() {
    return {
        props: {
            games: gamesMock,
            recommendedGames: gamesMock,
            recommendedHighlight: highlightMock
        }
    };
}
