import {
    AddShoppingCart,
    FavoriteBorder
} from "@styled-icons/material-outlined";

import formatPrice from "utils/formatPrice";

import Heading from "components/Heading";
import Ribbon from "components/Ribbon";
import Button from "components/Button";

import { Wrapper, Description, ButtonWrapper } from "./styles";

export type GameInfoProps = {
    title: string;
    description: string;
    price: number;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => (
    <Wrapper>
        <Heading color="black" lineBottom>
            {title}
        </Heading>

        <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

        <Description>{description}</Description>

        <ButtonWrapper>
            <Button icon={<AddShoppingCart />} size="large">
                Add to cart
            </Button>
            <Button icon={<FavoriteBorder />} size="large" minimal>
                wisthlist
            </Button>
        </ButtonWrapper>
    </Wrapper>
);

export default GameInfo;
