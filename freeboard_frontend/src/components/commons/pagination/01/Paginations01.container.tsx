import { MouseEvent, useState } from "react";
import Paginations01UI from "./Paginations01.presenter";
import { Paginations01Props } from "./Paginations01.types";

export default function Paginations01(props: Paginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = async (event: MouseEvent<HTMLSpanElement>) => {
    const activedPage = Number(event?.currentTarget.id);
    setActivedPage(activedPage);
    await props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivedPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage(startPage + 10);
    setActivedPage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <Paginations01UI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
    />
  );
}
