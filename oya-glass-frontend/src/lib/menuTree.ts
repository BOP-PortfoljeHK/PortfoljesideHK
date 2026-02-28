// Bygger en trestruktur for menyen basert på en flat liste av MenuItems

export type MenuItem = {
  _id: string;
  title: string;
  slug: string;
  parentId?: string;
};

export type MenuNode = MenuItem & {
  href: string;
  children: MenuNode[];
};

function buildPathSegments(item: MenuItem, byId: Map<string, MenuItem>) {
  const segments: string[] = [];
  let current: MenuItem | undefined = item;

  while (current) {
    segments.unshift(current.slug);
    if (!current.parentId) break;
    current = byId.get(current.parentId);
  }
  return segments;
}

export function buildMenuTree(items: MenuItem[]): MenuNode[] {
  const byId = new Map(items.map((i) => [i._id, i]));

  const nodes = new Map(
    items.map((i) => [
      i._id,
      {
        ...i,
        href: "/" + buildPathSegments(i, byId).join("/"),
        children: [],
      } as MenuNode,
    ])
  );

  const roots: MenuNode[] = [];

  for (const node of nodes.values()) {
    if (node.parentId && nodes.has(node.parentId)) {
      nodes.get(node.parentId)!.children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}