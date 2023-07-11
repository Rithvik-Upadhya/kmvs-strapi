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
  //   uncomment to enable custom image sizes.
  //   upload: {
  //     config: {
  //       breakpoints: {
  //         large: 1200,
  //         medium: 800,
  //         small: 400,
  //         xsmall: 40,
  //       },
  //     },
  //   },
});
