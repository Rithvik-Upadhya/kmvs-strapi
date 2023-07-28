module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_ACCESS_TOKEN,
      sites: [
        {
          name: "kmvs",
          id: "933f8fcc-7ea1-41a1-bdf2-f78dce392672",
          buildHook:
            "https://api.netlify.com/build_hooks/64c38792e3215d4eeaa02434",
          branch: "main",
        },
      ],
    },
  },
});
