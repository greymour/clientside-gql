
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  documents: "gql/",
  generates: {
    "__generated__/": {
      preset: "client",
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
