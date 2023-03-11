import { useRouter } from "next/router";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </>
  );
}
