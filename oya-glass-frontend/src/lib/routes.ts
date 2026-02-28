// denne filen inneholder logikk for å bygge ruter basert på data fra Sanity, 
// og er inspirert av Astro's dokumentasjon og eksempler på dynamiske ruter. 
// Koden er skapt ved hjelp av AI (ChatGPT).

import groq from "groq";
import { sanity } from "./sanityClient";

export type RouteDoc = {
  _id: string;
  title: string;
  slug: string;
  parentId?: string;
  type: "page" | "work";
};

export function buildPathSegments(page: RouteDoc, byId: Map<string, RouteDoc>) {
  const segments: string[] = [];
  let current: RouteDoc | undefined = page;
  const visited = new Set<string>();

  while (current) {
    if (visited.has(current._id)) break; // stopper loops
    visited.add(current._id);

    segments.unshift(current.slug);
    if (!current.parentId) break;
    current = byId.get(current.parentId);
  }

  return segments;
}

export const ROUTES_QUERY = groq`
[
  ...*[_type=="page" && defined(slug.current)]{
    _id,
    title,
    "slug": slug.current,
    "parentId": parent._ref,
    "type": "page"
  },
  ...*[_type=="work" && defined(slug.current) && defined(categoryPage._ref)]{
  _id,
  title,
  "slug": slug.current,
  "parentId": categoryPage._ref,
  "type": "work"
}
]
`;

export async function fetchRoutes(): Promise<RouteDoc[]> {
  return sanity.fetch(ROUTES_QUERY);
}
