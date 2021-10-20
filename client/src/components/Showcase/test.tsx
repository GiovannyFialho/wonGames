import "match-media-mock";

import { render, screen } from "utils/test-utils";

import Showcase from ".";
import highlightMock from "components/Highlight/mock";
import gamesMock from "components/GamecardSlider/mock";

const props = {
    title: "Most Popular",
    highlight: highlightMock,
    gamecardSlider: gamesMock.slice(0, 1)
};

describe("<Showcase />", () => {
    it("should render full component", () => {
        render(<Showcase {...props} />);

        expect(
            screen.getByRole("heading", { name: /Most Popular/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", { name: highlightMock.title })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", { name: gamesMock[0].title })
        ).toBeInTheDocument();
    });

    it("should render without title", () => {
        render(
            <Showcase
                highlight={props.highlight}
                gamecardSlider={props.gamecardSlider}
            />
        );

        screen.getByRole("heading", { name: highlightMock.title });
        screen.getByRole("heading", { name: gamesMock[0].title });

        expect(
            screen.queryByRole("heading", { name: /Most Popular/i })
        ).not.toBeInTheDocument();
    });

    it("should render without highlight", () => {
        render(
            <Showcase
                title={props.title}
                gamecardSlider={props.gamecardSlider}
            />
        );

        screen.getByRole("heading", { name: /most popular/i });
        screen.getByRole("heading", { name: gamesMock[0].title });

        expect(
            screen.queryByRole("heading", { name: highlightMock.title })
        ).not.toBeInTheDocument();
    });

    it("should render without gamesSlider", () => {
        render(<Showcase title={props.title} highlight={props.highlight} />);

        screen.getByRole("heading", { name: /most popular/i });
        screen.getByRole("heading", { name: highlightMock.title });

        expect(
            screen.queryByRole("heading", { name: gamesMock[0].title })
        ).not.toBeInTheDocument();
    });
});
