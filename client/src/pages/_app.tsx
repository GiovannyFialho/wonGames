import type { AppProps } from "next/app";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";

import { Provider as AuthProvider } from "next-auth/client";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "hooks/use-cart";
import { WishlistProvider } from "hooks/use-wishlist";

import { useApollo } from "utils/apollo";

import GlobalStyles from "styles/global";
import theme from "styles/theme";

function App({ Component, pageProps }: AppProps) {
    const client = useApollo(pageProps.initialApolloState);

    return (
        <AuthProvider session={pageProps.session}>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <CartProvider>
                        <WishlistProvider>
                            <Head>
                                <title>Won Games</title>
                                <link
                                    rel="shortcut icon"
                                    href="/img/icon-192.png"
                                />
                                <link
                                    rel="apple-touch-icon"
                                    href="/img/icon-512.png"
                                />
                                <meta
                                    name="description"
                                    content="The best Game Store in the world!"
                                />
                                <link rel="manifest" href="/manifest.json" />
                            </Head>
                            <GlobalStyles />
                            <NextNprogress
                                color="#F231A5"
                                startPosition={0.3}
                                stopDelayMs={200}
                                height={5}
                                showOnShallow={true}
                            />
                            <Component {...pageProps} />
                        </WishlistProvider>
                    </CartProvider>
                </ThemeProvider>
            </ApolloProvider>
        </AuthProvider>
    );
}

export default App;
