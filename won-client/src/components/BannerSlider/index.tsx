import Banner, { BannerProps } from "components/Banner";
import Slider, { SliderSettings } from "components/Slider";

import { Wrapper } from "./styles";

export type BannerSliderProps = {
    items: BannerProps[];
};

const settings: SliderSettings = {
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                vertical: false,
                verticalSwiping: false
            }
        }
    ]
};

const BannerSlider = ({ items }: BannerSliderProps) => (
    <Wrapper>
        <Slider settings={settings}>
            {items.map((item, index) => (
                <Banner key={index} {...item} />
            ))}
        </Slider>
    </Wrapper>
);

export default BannerSlider;
