import { graphql } from "@/__generated__";

export const CreateIssueMutation = graphql(`
  mutation CreateIssueMutation($input: CreateIssueInput!) {
    createIssue(input: $input) {
      createdAt
      name
      status
      id
    }
  }
`);

export const EditIssueMutation = graphql(`
  mutation EditIssueMutation($input: EditIssueInput!) {
    editIssue(input: $input) {
      createdAt
      id
      name
      status
    }
  }
`);

export const DeleteIssueMutation = graphql(`
  mutation DeleteIssueMutation($input: ID!) {
    deleteIssue(id: $input)
  }
`);
