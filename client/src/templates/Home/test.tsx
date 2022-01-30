import "match-media-mock";

import { render, screen } from "utils/test-utils";

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

jest.mock("templates/Base", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>;
    }
}));

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
        render(<Home {...props} />);

        expect(screen.getByTestId("Mock Banner Slider")).toBeInTheDocument();
        expect(screen.getAllByTestId("Mock Showcase")).toHaveLength(4);
    });
});
