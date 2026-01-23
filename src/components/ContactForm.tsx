import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ContactForm() {
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
      } else {
        setFormState('error');
        setErrorMessage(result.message || 'Something went wrong');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  }

  if (formState === 'success') {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-text mb-2">Message Sent!</h3>
        <p className="text-text-muted">
          Thanks for reaching out. I'll get back to you soon.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="mt-4 text-primary hover:text-primary-dark font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Web3Forms access key */}
      <input type="hidden" name="access_key" value="e7052da4-e499-4021-b697-e57fa41083ab" />

      {/* Optional: Customize email subject */}
      <input type="hidden" name="subject" value="New contact from WooPlugin.pro" />

      {/* Optional: Redirect after submit (we handle it in JS instead) */}
      <input type="hidden" name="from_name" value="WooPlugin Contact Form" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
          placeholder="How can I help?"
        />
      </div>

      {formState === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
        </div>
      )}

      {/* Honeypot for spam protection */}
      <input type="checkbox" name="botcheck" className="hidden" />

      <button
        type="submit"
        disabled={formState === 'loading'}
        className={cn(
          'w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors',
          'bg-primary hover:bg-primary-dark text-white',
          formState === 'loading' && 'opacity-70 cursor-not-allowed'
        )}
      >
        {formState === 'loading' ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
