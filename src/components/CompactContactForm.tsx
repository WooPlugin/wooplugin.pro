import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-preact';
import { cn } from '../lib/utils';

interface Props {
  subject?: string;
}

export default function CompactContactForm({ subject = 'Pro Question from WooPlugin.pro' }: Props) {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setFormState('success');
        form.reset();
        // Track successful form submission
        if (typeof window !== 'undefined' && (window as any).umami) {
          (window as any).umami.track('contact_form_submit', {
            page: window.location.pathname,
            form_type: 'pro_inquiry'
          });
        }
      } else {
        setFormState('error');
        setErrorMessage(result.message || 'Something went wrong');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('Failed to send. Please try again.');
    }
  }

  if (formState === 'success') {
    return (
      <div className="flex items-center justify-center gap-3 py-4 px-6 bg-green-50 rounded-xl border border-green-200">
        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
        <span className="text-green-800 font-medium">Message sent! I'll reply soon.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
      <input type="hidden" name="access_key" value="e7052da4-e499-4021-b697-e57fa41083ab" />
      <input type="hidden" name="subject" value={subject} />
      <input type="hidden" name="from_name" value="WooPlugin Pro Inquiry" />
      <input type="checkbox" name="botcheck" className="hidden" />

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="compact-email" className="sr-only">Email</label>
          <input
            type="email"
            id="compact-email"
            name="email"
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
            placeholder="Your email *"
          />
        </div>
        <div>
          <label htmlFor="compact-name" className="sr-only">Name</label>
          <input
            type="text"
            id="compact-name"
            name="name"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
            placeholder="Your name (optional)"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="compact-message" className="sr-only">Message</label>
        <textarea
          id="compact-message"
          name="message"
          rows={2}
          required
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none text-sm"
          placeholder="Your question..."
        />
      </div>

      {formState === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm mb-4">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={formState === 'loading'}
        className={cn(
          'w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm transition-colors',
          'bg-primary hover:bg-primary-dark text-white',
          formState === 'loading' && 'opacity-70 cursor-not-allowed'
        )}
      >
        {formState === 'loading' ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Question
          </>
        )}
      </button>
    </form>
  );
}
