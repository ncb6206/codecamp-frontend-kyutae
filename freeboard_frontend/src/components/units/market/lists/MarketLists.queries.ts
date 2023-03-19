import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        _id
        name
      }
    }
  }
`;

// export const FETCH_USEDITEMS_COUNT_IBOUGHT = gql`
//   query fetchUseditemsCountIBought(){
//     fetchUseditemsCountIBought
//   }
// `;

// export const FETCH_USEDITEMS_COUNT_IPICKED = gql`
//   query fetchUseditemsCountIPicked(){
//     fetchUseditemsCountIPicked
//   }
// `;

// export const FETCH_USEDITEMS_COUNT_ISOLD = gql`
//   query fetchUseditemsCountISold(){
//     fetchUseditemsCountISold
//   }
// `;
