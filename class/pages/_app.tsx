// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // {  <Head>  모든 페이지에서 카카오맵을 다운로드 받으모로 비효율적임
    //   <script
    //     type="text/javascript"
    //     src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${String(KAKAO_KEY)}`}
    //   ></script>
    // </Head>  }
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
