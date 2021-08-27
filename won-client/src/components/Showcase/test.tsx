import "match-media-mock";

import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

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
        renderWithTheme(<Showcase {...props} />);

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
        renderWithTheme(
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
        renderWithTheme(
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
        renderWithTheme(
            <Showcase title={props.title} highlight={props.highlight} />
        );

        screen.getByRole("heading", { name: /most popular/i });
        screen.getByRole("heading", { name: highlightMock.title });

        expect(
            screen.queryByRole("heading", { name: gamesMock[0].title })
        ).not.toBeInTheDocument();
    });
});
