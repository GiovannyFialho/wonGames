import "match-media-mock";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import bannerMock from "components/BannerSlider/mock";
import gamesMock from "components/GamecardSlider/mock";
import highlightMock from "components/Highlight/mock";

import Home, { HomeTemplateProps } from ".";

const props: HomeTemplateProps = {
    banners: bannerMock,
    newGamesTitle: "New games",
    newGames: [gamesMock[0]],
    mostPopularGamesTitle: "Jogos populares",
    mostPopularHighlight: highlightMock,
    mostPopularGames: [gamesMock[0]],
    upcomingGamesTitle: "Jogos que estão por vir",
    upcomingGames: [gamesMock[0]],
    upcomingHighlight: highlightMock,
    freeGamesTitle: "Jogos grátis",
    freeGames: [gamesMock[0]],
    freeHighlight: highlightMock
};

jest.mock("components/BannerSlider", () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Banner Slider"></div>;
        }
    };
});

jest.mock("components/Showcase", () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Showcase"></div>;
        }
    };
});

describe("<Home />", () => {
    it("should render banner slider and showcases", () => {
        renderWithTheme(<Home {...props} />);

        expect(screen.getByTestId("Mock Banner Slider")).toBeInTheDocument();
        expect(screen.getAllByTestId("Mock Showcase")).toHaveLength(4);
    });
});
