import { ChangeEvent } from "react";
import SearchBars01UI from "./Searchbars01.presenter";
import { ISearchBars01Props } from "./Searchbars01.types";
import _ from "lodash";

export default function SearchBars01(props: ISearchBars01Props) {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return <SearchBars01UI onChangeSearch={onChangeSearch} />;
}
