import { graphql } from "@/__generated__";

export const IssuesQuery = graphql(`
  query IssuesQuery {
    issues {
      content
      createdAt
      id
      name
      status
    }
  }
`);
