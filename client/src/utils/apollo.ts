import { useMemo } from "react";
import { ApolloClient, HttpLink, NormalizedCacheObject } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Session } from "next-auth";

import apolloCache from "./apolloCache";

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient(session?: Session | null) {
    const httpLink = new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
    });

    const authLink = setContext((_, { headers, session: clientSession }) => {
        const jwt = session?.jwt || clientSession?.jwt || "";
        const authorization = jwt ? `Bearer ${jwt}` : "";

        return { headers: { ...headers, authorization } };
    });

    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: authLink.concat(httpLink),
        cache: apolloCache
    });
}

export function initializeApollo(
    initialState = null,
    session?: Session | null
) {
    // Verifica se já existe uma instância, para não criar outra.
    const apolloClientGlobal = apolloClient ?? createApolloClient(session);

    // Verifica se já existe um estado inicial, e recupera os dados do cache.
    if (initialState) {
        apolloClientGlobal.cache.restore(initialState);
    }

    // Verifica se está no servidor, para iniciar no SSR com cache limpo.
    if (typeof window === "undefined") return apolloClientGlobal;

    apolloClient = apolloClient ?? apolloClientGlobal;

    return apolloClient;
}

export function useApollo(initialState = null, session?: Session) {
    const store = useMemo(() => initializeApollo(initialState, session), [
        initialState,
        session
    ]);

    return store;
}
