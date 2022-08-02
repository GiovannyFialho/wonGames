import Link from "next/link";

import formatPrice from "utils/formatPrice";

import Ribbon, { RibbonSizes, RibbonColors } from "components/Ribbon";
import CartButton from "components/CartButton";
import WishlistButton from "components/WishlistButton";

import {
    Wrapper,
    ImageBox,
    Info,
    Title,
    Developer,
    FavButton,
    BuyBox,
    Price,
    Content
} from "./styles";

export type GameCardProps = {
    id: string;
    slug: string;
    title: string;
    developer: string;
    img: string;
    price: number;
    promotionalPrice?: number;
    ribbon?: React.ReactNode;
    ribbonSize?: RibbonSizes;
    ribbonColor?: RibbonColors;
};

const GameCard = ({
    id,
    slug,
    title,
    developer,
    img,
    price,
    promotionalPrice,
    ribbon,
    ribbonColor = "primary",
    ribbonSize = "small"
}: GameCardProps) => (
    <Wrapper>
        {!!ribbon && (
            <Ribbon color={ribbonColor} size={ribbonSize}>
                {ribbon}
            </Ribbon>
        )}

        <Link href={`game/${slug}`} passHref>
            <ImageBox>
                <img src={img} alt={title} />
            </ImageBox>
        </Link>

        <Content>
            <Link href={`game/${slug}`} passHref>
                <Info>
                    <Title>{title}</Title>
                    <Developer>{developer}</Developer>
                </Info>
            </Link>
            <FavButton>
                <WishlistButton id={id} />
            </FavButton>
            <BuyBox>
                {!!promotionalPrice && (
                    <Price isPromotional>{formatPrice(price)}</Price>
                )}
                <Price>{formatPrice(promotionalPrice || price)}</Price>
                <CartButton id={id} />
            </BuyBox>
        </Content>
    </Wrapper>
);

export default GameCard;
