import { gql } from "@apollo/client";

export const CREATE_USEDITEM = gql`
  mutation createUseditem($createUseditemInput: createUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const UPDATE_USEDITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
    UpdateUseditemInput(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
      _id
      name
      remarks
      contentsprice
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
      createdAt
    }
  }
`;
