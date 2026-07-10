/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "bella-pathwayanalytics",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "eu-west-2",
        },
      },
    };
  },
  async run() {
    const stage = $app.stage;
    const domain =
      stage === "production"
        ? "bella.pathwayanalytics.com"
        : `bella-${stage}.pathwayanalytics.com`;

    new sst.aws.Astro("BellaPortfolio", {
      domain: {
        name: domain,
        dns: sst.aws.dns(),
      },
    });
  },
});
