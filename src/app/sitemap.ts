import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  "",
  "/nosotros",
  "/soluciones",
  "/como-trabajamos",
  "/para-quien",
  "/contacto",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
