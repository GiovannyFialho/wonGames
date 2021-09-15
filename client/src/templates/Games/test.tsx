import { MockedProvider } from "@apollo/client/testing";

import apolloCache from "utils/apolloCache";

import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import GamesTemplate from ".";

import mockFilter from "components/ExploreSidebar/mock";
import { fetchMoreMock, gamesMock } from "./mocks";

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

describe("<GamesTemplate />", () => {
    it("should render loading when starting template", () => {
        renderWithTheme(
            <MockedProvider mocks={[]} addTypename={false}>
                <GamesTemplate filterItems={mockFilter} />
            </MockedProvider>
        );

        expect(
            screen.getByRole("img", { name: /Loading more games.../i })
        ).toBeInTheDocument();
    });

    it("should render sections", async () => {
        renderWithTheme(
            <MockedProvider mocks={[gamesMock]}>
                <GamesTemplate filterItems={mockFilter} />
            </MockedProvider>
        );

        expect(
            screen.getByRole("img", { name: /Loading more games.../i })
        ).toBeInTheDocument();

        expect(
            await screen.findByTestId(/Mock explorer sider bar/)
        ).toBeInTheDocument();

        expect(
            await screen.findByText(/Silent Hill 4: The Room/i)
        ).toBeInTheDocument();

        expect(
            await screen.findByRole("button", { name: /show more/i })
        ).toBeInTheDocument();
    });

    it("should render more games when show more is clicked", async () => {
        renderWithTheme(
            <MockedProvider
                mocks={[gamesMock, fetchMoreMock]}
                cache={apolloCache}
            >
                <GamesTemplate filterItems={mockFilter} />
            </MockedProvider>
        );

        expect(
            await screen.findByText(/Silent Hill 4: The Room/i)
        ).toBeInTheDocument();

        userEvent.click(
            await screen.findByRole("button", { name: /show more/i })
        );

        expect(
            await screen.findByText(/Metro Exodus - Gold Edition/i)
        ).toBeInTheDocument();
    });
});
