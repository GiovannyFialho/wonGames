import formatPrice from "utils/formatPrice";

import Heading from "components/Heading";
import Ribbon from "components/Ribbon";

import { Wrapper, Description, ButtonWrapper } from "./styles";
import CartButton from "components/CartButton";
import WishlistButton from "components/WishlistButton";

export type GameInfoProps = {
    id: string;
    title: string;
    description: string;
    price: number;
};

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
    <Wrapper>
        <Heading color="black" lineBottom>
            {title}
        </Heading>

        <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

        <Description>{description}</Description>

        <ButtonWrapper>
            <CartButton id={id} size="large" hasText />

            <WishlistButton id={id} hasText size="large" />
        </ButtonWrapper>
    </Wrapper>
);

export default GameInfo;
