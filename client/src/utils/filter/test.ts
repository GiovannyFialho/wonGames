import { parseToQueryStringToWhere, parseQueryStringToFilter } from ".";

const filterItems = [
    { name: "price_lte", type: "radio" },
    { name: "plataforms", type: "checkbox" },
    { name: "developers", type: "checkbox" },
    { name: "sort", type: "radio" }
];

const queryString = {
    price_lte: 100,
    plataforms: ["windows", "linux"],
    developers: "Rockstar Games",
    sort: "price:asc"
};

describe("parseToQueryStringToWhere()", () => {
    it("should parse queryString to where format", () => {
        const parsedQuery = parseToQueryStringToWhere({
            queryString,
            filterItems
        });

        expect(parsedQuery).toStrictEqual({
            price_lte: 100,
            plataforms: { name_contains: ["windows", "linux"] },
            developers: { name_contains: "Rockstar Games" }
        });
    });
});

describe("parseQueryStringToFilter()", () => {
    it("should parse queryString to filter values format", () => {
        const parsedQuery = parseQueryStringToFilter({
            queryString,
            filterItems
        });

        expect(parsedQuery).toStrictEqual({
            price_lte: 100,
            plataforms: ["windows", "linux"],
            developers: ["Rockstar Games"],
            sort: "price:asc"
        });
    });
});
