import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";

import Slider, { SliderSettings } from "components/Slider";
import GameCard, { GameCardProps } from "components/GameCard";

import { Wrapper } from "./styles";

export type GamecardSliderProps = {
    items: GameCardProps[];
    color?: "white" | "black";
};

const settings: SliderSettings = {
    infinite: false,
    slidesToShow: 4,
    lazyLoad: "ondemand",
    responsive: [
        {
            breakpoint: 1375,
            settings: {
                arrows: false,
                slidesToShow: 3.2
            }
        },
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 2.2
            }
        },
        {
            breakpoint: 570,
            settings: {
                arrows: false,
                slidesToShow: 1.2
            }
        },
        {
            breakpoint: 375,
            settings: {
                arrows: false,
                slidesToShow: 1.1
            }
        }
    ],
    nextArrow: <ArrowRight aria-label="next games" />,
    prevArrow: <ArrowLeft aria-label="previous games" />
};

const GamecardSlider = ({ items, color = "black" }: GamecardSliderProps) => (
    <Wrapper color={color}>
        <Slider settings={settings}>
            {items.map((item, index) => (
                <GameCard key={index} {...item} />
            ))}
        </Slider>
    </Wrapper>
);

export default GamecardSlider;
