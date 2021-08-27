import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { useApollo } from "utils/apollo";

import GlobalStyles from "styles/global";
import theme from "styles/theme";

function App({ Component, pageProps }: AppProps) {
    const client = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Won Games</title>
                    <link rel="shortcut icon" href="/img/icon-192.png" />
                    <link rel="apple-touch-icon" href="/img/icon-512.png" />
                    <meta
                        name="description"
                        content="The best Game Store in the world!"
                    />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;
