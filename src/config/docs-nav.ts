export interface NavItem {
  title: string;
  slug: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface PluginDocs {
  id: string;
  name: string;
  description: string;
  icon: string; // SVG path
  sections: NavSection[];
}

export const pluginDocs: PluginDocs[] = [
  {
    id: 'google-shopping',
    name: 'Google Shopping',
    description: 'Product feeds for WooCommerce. GTIN, Brand, MPN fields and Merchant Center feeds.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />',
    sections: [
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
    ],
  },
  {
    id: 'accessibility-scanner',
    name: 'Accessibility Scanner',
    description: 'WCAG 2.2 compliance scanning, quick fixes, and accessibility reports.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />',
    sections: [
      {
        title: 'Getting Started',
        items: [
          { title: 'Installation', slug: 'accessibility/getting-started/installation' },
          { title: 'Your First Scan', slug: 'accessibility/getting-started/first-scan' },
          { title: 'License Activation', slug: 'accessibility/getting-started/license-activation' },
        ],
      },
      {
        title: 'Scanning',
        items: [
          { title: 'Single Page Scan', slug: 'accessibility/scanning/single-page' },
          { title: 'Full Site Crawl', slug: 'accessibility/scanning/full-site' },
          { title: 'Scheduled Scans', slug: 'accessibility/scanning/scheduled' },
          { title: 'Understanding Your Score', slug: 'accessibility/scanning/score' },
        ],
      },
      {
        title: 'Checks & Fixes',
        items: [
          { title: 'WCAG Level A Checks', slug: 'accessibility/checks/level-a' },
          { title: 'WCAG Level AA Checks', slug: 'accessibility/checks/level-aa' },
          { title: 'Quick Fixes', slug: 'accessibility/checks/quick-fixes' },
          { title: 'WooCommerce Checks', slug: 'accessibility/checks/woocommerce' },
        ],
      },
      {
        title: 'Reports & Compliance',
        items: [
          { title: 'Accessibility Statement', slug: 'accessibility/reports/statement' },
          { title: 'PDF Reports', slug: 'accessibility/reports/pdf' },
          { title: 'Monitoring & Alerts', slug: 'accessibility/reports/monitoring' },
        ],
      },
      {
        title: 'Troubleshooting',
        items: [
          { title: 'FAQ', slug: 'accessibility/troubleshooting/faq' },
        ],
      },
    ],
  },
];

// Flat nav for backwards compatibility — all sections across all plugins
export const docsNav: NavSection[] = pluginDocs.flatMap((plugin) => plugin.sections);

// Get sections for a specific plugin
export function getPluginSections(pluginId: string): NavSection[] {
  return pluginDocs.find((p) => p.id === pluginId)?.sections || [];
}

// Determine which plugin a slug belongs to
export function getPluginForSlug(slug: string): PluginDocs | null {
  for (const plugin of pluginDocs) {
    for (const section of plugin.sections) {
      if (section.items.some((item) => item.slug === slug)) {
        return plugin;
      }
    }
  }
  return null;
}

// Helper to get all docs in order within a plugin
export function getAllDocsInOrder(pluginId?: string): NavItem[] {
  if (pluginId) {
    return getPluginSections(pluginId).flatMap((section) => section.items);
  }
  return docsNav.flatMap((section) => section.items);
}

// Helper to find prev/next doc within the same plugin
export function getPrevNextDocs(currentSlug: string): { prev: NavItem | null; next: NavItem | null } {
  const plugin = getPluginForSlug(currentSlug);
  const allDocs = plugin
    ? getAllDocsInOrder(plugin.id)
    : getAllDocsInOrder();
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
