import { useState, useEffect } from 'preact/hooks';
import type { NavSection } from '../../config/docs-nav';

interface Props {
  nav: NavSection[];
  currentSlug: string;
  sectionTitle: string;
}

export default function MobileSidebar({ nav, currentSlug, sectionTitle }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        class="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span>{sectionTitle}</span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          class="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <div
        class={`fixed top-0 left-0 bottom-0 w-72 bg-white z-50 transform transition-transform duration-200 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
          <a href="/docs" class="text-lg font-semibold text-text">
            Documentation
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            class="p-2 text-text-muted hover:text-text"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="p-4 space-y-6">
          {nav.map((section) => (
            <div key={section.title}>
              <h3 class="text-sm font-semibold text-text uppercase tracking-wider mb-2">
                {section.title}
              </h3>
              <ul class="space-y-1">
                {section.items.map((item) => {
                  const isActive = currentSlug === item.slug;
                  return (
                    <li key={item.slug}>
                      <a
                        href={`/docs/${item.slug}`}
                        class={`block py-1.5 px-3 text-sm rounded-md transition-colors ${
                          isActive
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-text-muted hover:text-text hover:bg-gray-100'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
