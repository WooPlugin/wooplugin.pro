import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: 'What feeds are supported?',
    answer: 'Currently, WooPlugin Feed supports Google Merchant Center XML feeds. Facebook and Instagram feed support is coming soon in the Pro version.',
  },
  {
    question: 'Does it work with variable products?',
    answer: 'Yes! You can set GTIN, Brand, and MPN on both parent products and individual variations. Each variation can have its own unique identifiers.',
  },
  {
    question: 'How often do feeds update?',
    answer: 'The free version supports manual feed generation. Pro versions include automatic updates whenever products change, plus scheduled regeneration twice daily.',
  },
  {
    question: 'Is it HPOS compatible?',
    answer: 'Yes, WooPlugin Feed is fully compatible with WooCommerce High-Performance Order Storage (HPOS). It\'s been tested with WooCommerce 8.0 and above.',
  },
  {
    question: 'What\'s the difference between free and pro?',
    answer: 'The free version includes basic product fields (GTIN, Brand, MPN), Google Shopping feed for up to 50 products, and manual feed generation. Pro versions add unlimited products, all feed formats, auto-sync, and priority support.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-muted">
            Everything you need to know about WooPlugin Feed
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-text">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-text-muted transition-transform',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <div className="px-6 pb-4 text-text-muted">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
