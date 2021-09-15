import { MockedProvider } from "@apollo/client/testing";

import { QUERY_GAMES } from "graphql/queries/games";

import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import GamesTemplate from ".";

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
            <MockedProvider
                mocks={[
                    {
                        request: {
                            query: QUERY_GAMES,
                            variables: { limit: 15 }
                        },
                        result: {
                            data: {
                                games: [
                                    {
                                        name: "Silent Hill 4: The Room",
                                        slug: "silent-hill-4-the-room",
                                        price: 39.89,
                                        cover: {
                                            url:
                                                "/uploads/silent_hill_4_the_room_75abd0544a.jpg",
                                            __typename: "UploadFile"
                                        },
                                        developers: [
                                            {
                                                name: "Team Silent",
                                                __typename: "Developer"
                                            }
                                        ],
                                        __typename: "Game"
                                    }
                                ]
                            }
                        }
                    }
                ]}
            >
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
});
