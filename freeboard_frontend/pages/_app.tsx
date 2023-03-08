import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 나중에 하기
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
