import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "j6hvvg4b",
  dataset: "production",

  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
});
