/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateIssueInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
  status?: InputMaybe<IssueStatus>;
};

export type EditIssueInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<IssueStatus>;
};

export type Issue = {
  __typename?: 'Issue';
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status?: Maybe<IssueStatus>;
  user: User;
  userId: Scalars['String']['output'];
};

export enum IssueStatus {
  Backlog = 'BACKLOG',
  Done = 'DONE',
  Inprogress = 'INPROGRESS',
  Todo = 'TODO'
}

export type IssuesFilterInput = {
  statuses?: InputMaybe<Array<InputMaybe<IssueStatus>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createIssue: Issue;
  createUser?: Maybe<User>;
  deleteIssue: Scalars['ID']['output'];
  editIssue: Issue;
  signin?: Maybe<User>;
};


export type MutationCreateIssueArgs = {
  input: CreateIssueInput;
};


export type MutationCreateUserArgs = {
  input: AuthInput;
};


export type MutationDeleteIssueArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditIssueArgs = {
  input: EditIssueInput;
};


export type MutationSigninArgs = {
  input: AuthInput;
};

export type Query = {
  __typename?: 'Query';
  issues: Array<Maybe<Issue>>;
  me?: Maybe<User>;
};


export type QueryIssuesArgs = {
  input?: InputMaybe<IssuesFilterInput>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  issues: Array<Maybe<Issue>>;
  token?: Maybe<Scalars['String']['output']>;
};

export type SigninMutationMutationVariables = Exact<{
  input: AuthInput;
}>;


export type SigninMutationMutation = { __typename?: 'Mutation', signin?: { __typename?: 'User', token?: string | null } | null };

export type SignupMutationMutationVariables = Exact<{
  input: AuthInput;
}>;


export type SignupMutationMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', token?: string | null } | null };

export type CreateIssueMutationMutationVariables = Exact<{
  input: CreateIssueInput;
}>;


export type CreateIssueMutationMutation = { __typename?: 'Mutation', createIssue: { __typename?: 'Issue', createdAt: string, name: string, status?: IssueStatus | null, id: string } };

export type IssuesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type IssuesQueryQuery = { __typename?: 'Query', issues: Array<{ __typename?: 'Issue', content: string, createdAt: string, id: string, name: string, status?: IssueStatus | null } | null> };


export const SigninMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SigninMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SigninMutationMutation, SigninMutationMutationVariables>;
export const SignupMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignupMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignupMutationMutation, SignupMutationMutationVariables>;
export const CreateIssueMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateIssueMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateIssueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateIssueMutationMutation, CreateIssueMutationMutationVariables>;
export const IssuesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IssuesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<IssuesQueryQuery, IssuesQueryQueryVariables>;