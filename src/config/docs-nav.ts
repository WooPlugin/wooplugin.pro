export interface NavItem {
  title: string;
  slug: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const docsNav: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Installation', slug: 'getting-started/installation' },
      { title: 'License Activation', slug: 'getting-started/license-activation' },
      { title: 'Migrating from Free', slug: 'getting-started/migrating-from-free' },
    ],
  },
  {
    title: 'Feed Channels',
    items: [
      { title: 'Google Shopping', slug: 'feeds/google-shopping' },
      { title: 'Facebook & Instagram', slug: 'feeds/facebook-instagram' },
      { title: 'Pinterest', slug: 'feeds/pinterest' },
      { title: 'TikTok', slug: 'feeds/tiktok' },
      { title: 'Bing Shopping', slug: 'feeds/bing-shopping' },
      { title: 'Snapchat', slug: 'feeds/snapchat' },
    ],
  },
  {
    title: 'Features',
    items: [
      { title: 'Smart Auto-Fill', slug: 'features/smart-auto-fill' },
      { title: 'Scheduled Updates', slug: 'features/scheduled-updates' },
      { title: 'Product Fields', slug: 'features/product-fields' },
      { title: 'Category Mapping', slug: 'features/category-mapping' },
      { title: 'Product Filters', slug: 'features/product-filters' },
    ],
  },
  {
    title: 'Troubleshooting',
    items: [
      { title: 'Common Errors', slug: 'troubleshooting/common-errors' },
      { title: 'FAQ', slug: 'troubleshooting/faq' },
    ],
  },
];

// Helper to get all docs in order (for prev/next navigation)
export function getAllDocsInOrder(): NavItem[] {
  return docsNav.flatMap((section) => section.items);
}

// Helper to find prev/next doc
export function getPrevNextDocs(currentSlug: string): { prev: NavItem | null; next: NavItem | null } {
  const allDocs = getAllDocsInOrder();
  const currentIndex = allDocs.findIndex((doc) => doc.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? allDocs[currentIndex - 1] : null,
    next: currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null,
  };
}

// Helper to find which section a doc belongs to
export function getDocSection(slug: string): NavSection | null {
  return docsNav.find((section) => section.items.some((item) => item.slug === slug)) || null;
}
