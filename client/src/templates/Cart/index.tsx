import Base from "templates/Base";

import { Container } from "components/Container";
import Heading from "components/Heading";
import { Divider } from "components/Divider";
import Showcase from "components/Showcase";
import { GamecardProps } from "components/Gamecard";
import { HighlightProps } from "components/Highlight";
import CartList, { CartListProps } from "components/CartList";
import PaymentOptions, { PaymentOptionsProps } from "components/PaymentOptions";

import { Content } from "./styles";

export type CartProps = {
    recommendedTitle: string;
    recommendedGames: GamecardProps[];
    recommendedHighlight: HighlightProps;
} & CartListProps &
    Pick<PaymentOptionsProps, "cards">;

const Cart = ({
    recommendedTitle,
    recommendedGames,
    recommendedHighlight,
    cards
}: CartProps) => {
    const handlePayment = () => ({});

    return (
        <Base>
            <Container>
                <Heading color="white" lineLeft lineColor="secondary">
                    My Cart
                </Heading>

                <Content>
                    <CartList />
                    <PaymentOptions
                        cards={cards}
                        handlePayment={handlePayment}
                    />
                </Content>

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

export default Cart;
