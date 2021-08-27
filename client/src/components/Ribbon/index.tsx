import { Wrapper } from "./styles";

export type RibbonColors = "primary" | "secondary";
export type RibbonSizes = "normal" | "small";

export type RibbonProps = {
    color?: RibbonColors;
    size?: RibbonSizes;
    children: React.ReactNode;
};

const Ribbon = ({
    color = "primary",
    size = "normal",
    children
}: RibbonProps) => (
    <Wrapper color={color} size={size}>
        {children}
    </Wrapper>
);

export default Ribbon;
