import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  documents: "./gql/**/{queries,fragments,mutations}.ts",
  generates: {
    "/__generated__/": {
      preset: "client",
      plugins: ["typescript"]
    }
  }
};

export default config;
