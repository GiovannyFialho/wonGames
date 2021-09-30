import { QueryGames_games } from "graphql/generated/QueryGames";
import {
    QueryHome_banners,
    QueryHome_sections_upcomingGames_highlight
} from "graphql/generated/QueryHome";
import { bannerMapper, gamesMapper, hightlightMapper } from ".";

describe("bannerMapper()", () => {
    it("should return the right format when mapped", () => {
        const banner = {
            image: {
                url: "/img.jpg"
            },
            title: "Banner title",
            subtitle: "Banner subtitle",
            button: {
                label: "Button label",
                link: "button link"
            },
            ribbon: {
                text: "ribbon text",
                color: "primary",
                size: "small"
            }
        } as QueryHome_banners;

        expect(bannerMapper([banner])).toStrictEqual([
            {
                img: "http://localhost:1337/img.jpg",
                title: "Banner title",
                subtitle: "Banner subtitle",
                buttonLabel: "Button label",
                buttonLink: "button link",
                ribbon: "ribbon text",
                ribbonColor: "primary",
                ribbonSize: "small"
            }
        ]);
    });
});

describe("gamesMapper()", () => {
    it("should return empty array if there are no games", () => {
        expect(gamesMapper(null)).toStrictEqual([]);
    });

    it("should return the correct format when mapped", () => {
        const game = {
            id: "1",
            name: "game",
            developers: [
                {
                    name: "developer name"
                }
            ],
            slug: "game-slug",
            cover: {
                url: "/img.jpg"
            },
            price: 10
        } as QueryGames_games;

        expect(gamesMapper([game])).toStrictEqual([
            {
                id: "1",
                title: "game",
                slug: "game-slug",
                developer: "developer name",
                img: "http://localhost:1337/img.jpg",
                price: 10
            }
        ]);
    });
});

describe("hightlightMapper()", () => {
    it("should return empty object if no highlight", () => {
        expect(hightlightMapper(null)).toStrictEqual({});
    });

    it("should return mapped highlight", () => {
        const hightlight = {
            title: "hightlight title",
            subtitle: "hightlight subtitle",
            background: {
                url: "/img.jpg"
            },
            floatImage: {
                url: "/img.jpg"
            },
            buttonLabel: "button label",
            buttonLink: "button link",
            alignment: "left"
        } as QueryHome_sections_upcomingGames_highlight;

        expect(hightlightMapper(hightlight)).toStrictEqual({
            title: "hightlight title",
            subtitle: "hightlight subtitle",
            backgroundImage: "http://localhost:1337/img.jpg",
            floatImage: "http://localhost:1337/img.jpg",
            buttonLabel: "button label",
            buttonLink: "button link",
            alignment: "left"
        });
    });
});
