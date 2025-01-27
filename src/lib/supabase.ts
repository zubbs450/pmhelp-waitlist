import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://znlokpotuvjfqvelcned.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpubG9rcG90dXZqZnF2ZWxjbmVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4NzI2NjgsImV4cCI6MjAyNjQ0ODY2OH0.vxjVESYX6CWxKqcHC5GXQCxgXMqQiZGFYtZNY_Iy0Oc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);