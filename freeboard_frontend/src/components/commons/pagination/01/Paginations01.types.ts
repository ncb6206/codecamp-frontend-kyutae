export interface Paginations01Props {
  count?: number;
  refetch: any;
}

export interface Paginations01UIProps {
  onClickPage: (value: number) => () => Promise<void>;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  startPage: number;
  lastPage: number;
  activedPage: number;
}
