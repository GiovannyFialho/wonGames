import Link from "next/link";

import {
    FavoriteBorder,
    Favorite,
    AddShoppingCart
} from "@styled-icons/material-outlined";

import formatPrice from "utils/formatPrice";

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

import Button from "components/Button";
import Ribbon, { RibbonSizes, RibbonColors } from "components/Ribbon";

export type GamecardProps = {
    slug: string;
    title: string;
    developer: string;
    img: string;
    price: number;
    promotionalPrice?: number;
    favorite?: boolean;
    onFav?: () => void;
    ribbon?: React.ReactNode;
    ribbonSize?: RibbonSizes;
    ribbonColor?: RibbonColors;
};

const Gamecard = ({
    slug,
    title,
    developer,
    img,
    price,
    promotionalPrice,
    favorite = false,
    onFav,
    ribbon,
    ribbonColor = "primary",
    ribbonSize = "small"
}: GamecardProps) => (
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
            <FavButton role="button" onClick={onFav}>
                {favorite ? (
                    <Favorite aria-label="Remove from wishlist" />
                ) : (
                    <FavoriteBorder aria-label="Add to Wishlist" />
                )}
            </FavButton>
            <BuyBox>
                {!!promotionalPrice && (
                    <Price isPromotional>{formatPrice(price)}</Price>
                )}
                <Price>{formatPrice(promotionalPrice || price)}</Price>
                <Button icon={<AddShoppingCart />} size="small" />
            </BuyBox>
        </Content>
    </Wrapper>
);

export default Gamecard;
