import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 나중에 하기
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
