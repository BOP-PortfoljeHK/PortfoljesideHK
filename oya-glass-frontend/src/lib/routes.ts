export type RouteDoc = {
  _id: string;
  title: string;
  slug: string;
  parentId?: string;
};

export function buildPathSegments(page: RouteDoc, byId: Map<string, RouteDoc>) {
  const segments: string[] = [];
  let current: RouteDoc | undefined = page;

  while (current) {
    segments.unshift(current.slug);
    if (!current.parentId) break;
    current = byId.get(current.parentId);
  }

  return segments;
}
