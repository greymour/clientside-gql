import { graphql } from "@/__generated__";

export const SigninMutation = graphql(`
  mutation SigninMutation($input: AuthInput!) {
    signin(input: $input) {
      token
    }
  }
`);

export const SignupMutation = graphql(`
  mutation SignupMutation($input: AuthInput!) {
    createUser(input: $input) {
    token
    }
  }
`);
