import { gql } from "urql";

export const CreateIssueMutation = gql`
  mutation CreateIssueMutation($input: CreateIssueInput!) {
    createIssue(input: $input) {
      createdAt
      name
      status
      id
    }
  }
`;
