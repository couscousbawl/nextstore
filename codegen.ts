
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://iadh-store-12237.eu.saleor.cloud/graphql/",
  documents: "graphql/**/*.graphql",
  generates: {
    "gql/": {
      preset: "client",
      config: {
        documentMode: "string",
        dedupeFragments: true,
      },
      presetConfig: {
        fargmentMasking: false
      },
      plugins: []
    }
  }
};

export default config;
