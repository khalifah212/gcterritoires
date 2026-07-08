import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GC Territoires",
    short_name: "GC Territoires",
    description:
      "Cabinet de conseil en développement territorial, aménagement et relations institutionnelles.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#C62828",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}