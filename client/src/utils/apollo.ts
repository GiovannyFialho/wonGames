import { ApolloClient, HttpLink, NormalizedCacheObject } from "@apollo/client";
import { useMemo } from "react";

import apolloCache from "./apolloCache";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: new HttpLink({ uri: "http://localhost:1337/graphql" }),
        cache: apolloCache
    });
}

export function initializeApollo(initialState = {}) {
    // Verifica se já existe uma instância, para não criar outra.
    const apolloClientGlobal = apolloClient ?? createApolloClient();

    // Verifica se já existe um estado inicial, e recupera os dados do cache.
    if (initialState) {
        apolloClientGlobal.cache.restore(initialState);
    }

    // Verifica se está no servidor, para iniciar no SSR com cache limpo.
    if (typeof window === "undefined") return apolloClientGlobal;

    apolloClient = apolloClient ?? apolloClientGlobal;

    return apolloClient;
}

export function useApollo(initialState = {}) {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);

    return store;
}
