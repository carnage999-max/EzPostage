import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EzPost",
    short_name: "EzPost",
    description:
      "EzPost ensures your mail gets delivered even when postage is pennies short.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#dc2626",
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
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32",
        type: "image/x-icon",
      },
    ],
  };
}
