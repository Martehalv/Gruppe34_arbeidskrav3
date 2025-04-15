import { createClient } from "@sanity/client";

export default createClient({
  projectId: "j6hvvg4b",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});