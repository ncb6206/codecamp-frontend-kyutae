import { AppProps } from "next/app";
import "antd/dist/antd.css";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSetting>
  );
}
