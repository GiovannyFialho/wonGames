import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import GamesTemplate from ".";

import mockGames from "components/GamecardSlider/mock";
import mockFilter from "components/ExploreSidebar/mock";

jest.mock("templates/Base", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>;
    }
}));

jest.mock("components/ExploreSidebar", () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock explorer sider bar" />;
    }
}));

jest.mock("components/Gamecard", () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock gamecard" />;
    }
}));

describe("<GamesTemplate />", () => {
    it("should render components", () => {
        renderWithTheme(
            <GamesTemplate games={[mockGames[0]]} filterItems={mockFilter} />
        );

        expect(
            screen.getByTestId(/Mock explorer sider bar/)
        ).toBeInTheDocument();
        expect(screen.getByTestId(/Mock gamecard/)).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /show more/i })
        ).toBeInTheDocument();
    });
});
