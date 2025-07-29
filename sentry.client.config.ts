import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://736c9ffa27d931f3aefc0afb9d887d70@o4509710088077312.ingest.us.sentry.io/4509710088994816",
  integrations: [
    // Sentry.feedbackIntegration({
    //   colorScheme: "system",
    //   isNameRequired: true,
    //   isEmailRequired: true,
    //   enabled: true,
    //   position: 'top-left',
    // }),
  ],
});
