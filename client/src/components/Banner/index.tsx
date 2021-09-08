import { Wrapper, Image, Caption, Title, Subtitle } from "./styles";
import Button from "components/Button";
import Ribbon, { RibbonSizes, RibbonColors } from "components/Ribbon";

export type BannerProps = {
    img: string;
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonLink: string;
    ribbon?: React.ReactNode;
    ribbonSize?: RibbonSizes;
    ribbonColor?: RibbonColors;
};

const Banner = ({
    img,
    title,
    subtitle,
    buttonLabel,
    buttonLink,
    ribbon,
    ribbonSize = "normal",
    ribbonColor = "primary"
}: BannerProps) => (
    <Wrapper>
        {!!ribbon && (
            <Ribbon color={ribbonColor} size={ribbonSize}>
                {ribbon}
            </Ribbon>
        )}

        <Image src={img} role="img" aria-label={title} />

        <Caption>
            <Title>{title}</Title>
            <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }}></Subtitle>
            <Button as="a" href={buttonLink} size="large">
                {buttonLabel}
            </Button>
        </Caption>
    </Wrapper>
);

export default Banner;
