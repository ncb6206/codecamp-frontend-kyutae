import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HIDDEN_BANNER_NAVIGATION = ["/login", "/signup"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBannerNavigation = HIDDEN_BANNER_NAVIGATION.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      {!isHiddenBannerNavigation && <LayoutBanner />}
      {!isHiddenBannerNavigation && <LayoutNavigation />}
      <Body>{props.children}</Body>
    </>
  );
}
