module.exports = {
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.ts(x)?",
        "!src/**/stories.tsx",
        "!src/pages/**/*.tsx",
        "!src/styles/**/*.ts",
        "!src/utils/apollo.ts",
        "!src/utils/apolloCache.ts",
        "!src/graphql/**/*.ts",
        "!src/types/*.d.ts",
        "!src/**/mock.ts",
        "!src/hooks/use-cart/index.tsx"
    ],
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
    modulePaths: ["<rootDir>/src/", "<rootDir>/.jest/"]
};
