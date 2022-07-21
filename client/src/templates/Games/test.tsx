import "session.mock";

import { MockedProvider } from "@apollo/client/testing";
import userEvent from "@testing-library/user-event";

import apolloCache from "utils/apolloCache";
import { render, screen } from "utils/test-utils";

import GamesTemplate from ".";

import mockFilter from "components/ExploreSidebar/mock";
import { fetchMoreMock, gamesMock, noGamesMock } from "./mocks";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            prefetch: () => null,
            push: jest.fn(),
            query: "",
            asPath: "",
            route: "/"
        };
    }
}));

jest.mock("templates/Base", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>;
    }
}));

describe("<GamesTemplate />", () => {
    it("should render sections", async () => {
        render(
            <MockedProvider mocks={[gamesMock]}>
                <GamesTemplate filterItems={mockFilter} />
            </MockedProvider>
        );

        expect(await screen.findByText(/Price/i)).toBeInTheDocument();

        expect(
            await screen.findByText(/Silent Hill 4: The Room/i)
        ).toBeInTheDocument();

        expect(
            await screen.findByRole("button", { name: /show more/i })
        ).toBeInTheDocument();
    });

    it("should render more games when show more is clicked", async () => {
        render(
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

    it("should render empty when no games found", async () => {
        render(
            <MockedProvider mocks={[noGamesMock]} addTypename={false}>
                <GamesTemplate filterItems={mockFilter} />
            </MockedProvider>
        );

        expect(
            await screen.findByText(
                /We didn't find any games with this filter/i
            )
        ).toBeInTheDocument();
    });
});
