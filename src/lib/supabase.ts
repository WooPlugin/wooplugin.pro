import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function submitLead(data: { email: string; name?: string; message?: string }) {
  if (!supabase) {
    console.warn('Supabase not configured');
    return { error: 'Contact form not configured' };
  }

  const { error } = await supabase.from('leads').insert({
    email: data.email,
    name: data.name || null,
    message: data.message || null,
    source: 'contact_form',
  });

  if (error) {
    console.error('Supabase error:', error);
    return { error: error.message };
  }

  return { success: true };
}
