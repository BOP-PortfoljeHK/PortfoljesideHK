import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from "@sanity/image-url";
import { sanity } from "./sanityClient";

// Fil for å kunne håndtere bilder fra Sanity, og bygge URL-er for disse. 
// Dette gjør at vi kan holde all logikk for bilder på ett sted, 
// og enkelt gjenbruke denne funksjonaliteten i hele prosjektet. Koden er skapt ved hjelp av AI (ChatGPT).

const builder = createImageUrlBuilder(sanity);

export function urlFor(source: SanityImageSource) {
  return builder.image(source).auto("format");
}

export function buildSrcset(source: SanityImageSource, widths = [320, 480, 640, 800, 1024, 1280, 1600]) {
  return widths.map((w) => `${urlFor(source).width(w).fit("max").url()} ${w}w`).join(", ");
}